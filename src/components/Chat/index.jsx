import { useState, useRef } from 'react';
import { generateLoremText, getRandTime } from '../Utilities/functions.js';

import BackIcon from '../BackIcon';
import Eliza from '../Eliza';
import StoryIcon from '../StoryIcon';

import images from '../BlurImage/images.json';

import './Chat.scss';

function Chat({open, username, online}) {
    const hash = useRef(images.images[Math.floor(Math.random() * images.images.length)].hash);

    const [o, setO] = useState(open);
    const [unread, setUnread] = useState(true);
    const [firstLine, setFirstLine] = useState({ message: generateLoremText(1, 5), time: getRandTime()});

    const messageClick = () => {
        setUnread(false);
        setO(true);
    }

    const backClick = () => {
        setO(false);
    }

    return (
        <div className={o ? "chat__chat open" : "chat__chat"}>
            <div className={unread ? "chat__chat_preview unread" : "chat__chat_preview"} onClick={messageClick}>
                <div className={online ? "chat__chat_preview__icon online" : "chat__chat_preview__icon"}><StoryIcon hash={hash.current} /></div>
                <div className='chat__chat_preview__username'>{username}</div>
                <div className='chat__chat_preview__message'>
                    <p className='chat__chat_preview__message_p'>{firstLine.message}</p>
                    <span className='chat__chat_preview__message_hour'>{firstLine.time}</span>
                </div>
            </div>
            <dir className="chat__chat_chat">
                <div className='chat__chat_header' onClick={backClick}>
                    <BackIcon  />
                    <StoryIcon hash={hash.current} />
                    <div className='chat__chat__header_meta'>
                        <div className='chat__chat__header_meta_username'>{username}</div>
                        <div className='chat__chat__header_meta_active'>Active {firstLine.time} ago</div>
                    </div>
                </div>
                <div className='chat__chat_eliza'><Eliza /></div>
                <div className='chat__chat_footer'></div>
            </dir>
        </div>
        );
    }
    export default Chat;