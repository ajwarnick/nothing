import React from 'react';
import { useState } from 'react';

import './Modal.scss';

function Modal({ children, open }) {
    const [o, setO] = useState(open);

    const openClose = () => {
        setO(current => !current);
    }

return (
    <div className={ o ? 'modal__Modal' : 'modal__Modal open'} >  
        <div className='modal__Content'>
            {children}
        </div>
        <div className='modal__Backdrop' onClick={openClose}></div>
    </div>
    );
}
export default Modal;