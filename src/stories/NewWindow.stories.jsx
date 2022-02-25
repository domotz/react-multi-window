import React, {useState} from 'react';

import NewWindow from '../index'

export default {
  title: 'NewWindow',
  component: NewWindow,
  parameters: {
    layout: 'fullscreen',
  },
};

export const DetachableContent = () => {
  const [isDetached, setIsDetached] = useState(false);

  const content = <div style={{backgroundColor: 'red'}}>Some Content that may be useful in another window</div>
  return <>
    <button onClick={() => setIsDetached(true)}>Detach the content</button>
    {
      isDetached 
        ? <NewWindow 
            title="My Detached Window"
            onUnload={() => setIsDetached(false)} 
            placeHolder={<p>The content is detached - <button onClick={() => setIsDetached(false)}>re-attach here</button></p>}
          >
          {content}
        </NewWindow>
        : content
    }
  </>
};

