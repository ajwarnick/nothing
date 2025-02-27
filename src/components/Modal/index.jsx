import React from 'react';
import { useState } from 'react';

import './Modal.scss';

function Modal({ children, open, close }) {
 const backdropClick = () =>{
    close(false);
 }
return (
    <div className={ open ? 'modal__Modal open' : 'modal__Modal'} >  
        <div className='modal__Content'>
            {children}
        </div>
        <div className='modal__Backdrop'  onClick={backdropClick}></div>
    </div>
    );
}
export default Modal;