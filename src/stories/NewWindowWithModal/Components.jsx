import React, {useState} from 'react';

import NewWindow from '../../index'
import {Modal} from 'react-overlays';
import { useDocument } from '../../hooks';
import './style.css';

const Backdrop = (props) => <div {...props} className='backdrop'/>

function ModalExample() {
  const [show, setShow] = useState(false);

  return (
    <div className="modal-example">
      <button
        type="button"
        className="btn btn-primary mb-4"
        onClick={() => setShow(true)}
      >
        Open Modal
      </button>

      <p>Click to get the full Modal experience!</p>

      <Modal
        className='modal'
        show={show}
        onHide={() => setShow(false)}
        renderBackdrop={Backdrop}
        aria-labelledby="modal-label"
        container={useDocument().body}
      >
        <div>
          <h4 id="modal-label">Text in a modal</h4>
          <p>
            The modal works because of `container={'{'}useDocument(){'}'}` props passed to the Modal component.
          </p>
          <ModalExample />
        </div>
      </Modal>
    </div>
  );
}

export const DetachableContentWithModal = () => {
  const [isDetached, setIsDetached] = useState(false);

  return <>
    <button onClick={() => setIsDetached(true)}>Detach the content</button>
    {
      isDetached 
        ? <NewWindow 
            title="My Detached Window"
            onUnload={() => setIsDetached(false)} 
            placeHolder={<p>The content is detached - <button onClick={() => setIsDetached(false)}>re-attach here</button></p>}
          >
          <ModalExample/>
        </NewWindow>
        : <ModalExample/>
    }
  </>
};
