import React from 'react';
import { useState } from 'react';

import MessageIcon from '../MessageIcon';
import FooterLink from '../FooterLink';

import './Footer.scss';

function Footer() {


return (
    <div className='footer'>

        <FooterLink to="/">
            <div className='footer__FeedIcon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 19v-6.733a4 4 0 0 0-1.245-2.9L13.378 3.31a2 2 0 0 0-2.755 0L4.245 9.367A4 4 0 0 0 3 12.267V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"/></svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.646 11.146a.5.5 0 0 1 .708 0L10 12.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708Zm4-2.292a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L10 7.207l1.646 1.647ZM5 3.5A1.5 1.5 0 0 1 6.5 2h7A1.5 1.5 0 0 1 15 3.5v13a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5v-13ZM6.5 3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-7Z"/></svg> */}
            </div>
        </FooterLink>

        <FooterLink to="/camera">
            <div className="footer__CameraIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinecap="round" strokeLinejoin="round"><path d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175a2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039a48.774 48.774 0 0 0-5.232 0a2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"/><path d="M16.5 12.75a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm2.25-2.25h.008v.008h-.008V10.5Z"/></g></svg>        
            </div>
        </FooterLink>
        
        <FooterLink to="/chat" >
            <MessageIcon />
        </FooterLink>

        <FooterLink to="/profile" >
            <div className='footer__ProfileIcon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g  strokeLinecap="round" strokeLinejoin="round" ><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2Z"/><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"/></g></svg>
            </div>
        </FooterLink>
        
    </div>
    
    );
}
export default Footer;