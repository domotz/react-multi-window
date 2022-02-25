import React, {useCallback} from 'react';
import {
    useState,
    useEffect,
    useMemo,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { copyResources } from './copyResources';
import { NewWindowContext } from './hooks';

export default function NewWindow ({
    children, 
    onUnload, 
    placeHolder,
    title,
    copyStyleAndScripts=true,
}) {
    const [dest, setDest] = useState();
    const [externalWindow, setExternalWindow] = useState(null);

    const _onUnload = useCallback(()=>{
        onUnload();
        setDest(null);
    },[
        onUnload,
        setDest,
    ]);

    useEffect(() => {
        const externalWindow = window.open(
            '', '', 'toolbar=no,width=720,height=480,left=200,top=200',
        );
        externalWindow.document.write('<base href=\'' + window.location.href.split('#')[0] + '\' /><body></body>');
        setExternalWindow(externalWindow);
        externalWindow.document.title = title;

        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            externalWindow.addEventListener('beforeunload', _onUnload);
        } else {
            externalWindow.onload = () => {
                externalWindow.addEventListener('beforeunload', _onUnload);
            };
        }

        window.addEventListener('beforeunload', () => externalWindow.close());

        const containerEl = externalWindow.document.createElement('div');
        externalWindow.document.body.appendChild(containerEl);
        externalWindow.document.body.style.position='absolute';
        setDest(containerEl);

        if(copyStyleAndScripts){
            // run it async because otherwise the rendering is blocked and some issue in placement of HTML tag can happens
            setTimeout(() => {
                copyResources(document, externalWindow.document);
            });
        }
        

        return () => {
            externalWindow.close();
            setDest(null);
        };
    }, [
        setDest, 
        title,
    ]);

    const contextValue = useMemo(() => ({
        document: externalWindow.document,
        window: externalWindow,
        isOpen: !!externalWindow,
    }), [
        externalWindow,
    ]);

    if (!dest) {
        return children;
    } else {
        return <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                {placeHolder}
            </div>
            {
                ReactDOM.createPortal(
                    <NewWindowContext.Provider value={contextValue}>
                        {children}
                    </NewWindowContext.Provider>, dest)
            }
        </>;
    }
}

NewWindow.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    onUnload: PropTypes.func,
    placeholder: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    title: PropTypes.string,
}
