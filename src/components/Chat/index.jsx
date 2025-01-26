import { useState } from 'react';

import BackIcon from '../BackIcon';
import Eliza from '../Eliza';

import './Chat.scss';

function Chat({open}) {


    return (
        <div className={open ? "chat__chat open" : "chat__chat"}>
            <div className="chat__chat_preview unread">
                <div className='chat__chat_preview__icon online'></div>
                <div className='chat__chat_preview__username'></div>
                <div className='chat__chat_preview__message'>
                    <span className='chat__chat_preview__message_hour'></span>
                </div>
            </div>
            <dir className="chat__chat_chat">
                <div className='chat__chat_header'><BackIcon /></div>
                <div className='chat__chat_eliza'><Eliza /></div>
                <div className='chat__chat_footer'></div>
            </dir>
        </div>
        );
    }
    export default Chat;