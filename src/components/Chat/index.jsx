import { useState } from 'react';

import BackIcon from '../BackIcon';
import Eliza from '../Eliza';
import StoryIcon from '../StoryIcon';

import './Chat.scss';

const generateLoremText = (numParagraphs, numWords) =>  {
    var loremText = '';
    var words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'Duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'Excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum',         ];
  
    for (var i = 0; i < numParagraphs; i++) {
      var paragraph = '';
      for (var j = 0; j < numWords; j++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        paragraph += randomWord + ' ';
      }
      loremText +=  paragraph ;
    }
    return loremText;
}

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const getRandTime = () => {
    let dice = getRndInteger(1,12);

    if(dice <= 1){
        return '1s'
    }else if(dice <= 7){
        return '1m'
    }else if(dice <= 9){
        return '1h'
    }else if(dice <= 11){
        return '1d'
    }else{
        return '1y'
    }

    
}

function Chat({open, username, online}) {
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
                <div className={online ? "chat__chat_preview__icon online" : "chat__chat_preview__icon"}><StoryIcon /></div>
                <div className='chat__chat_preview__username'>{username}</div>
                <div className='chat__chat_preview__message'>
                    <p className='chat__chat_preview__message_p'>{firstLine.message}</p>
                    <span className='chat__chat_preview__message_hour'>{firstLine.time}</span>
                </div>
            </div>
            <dir className="chat__chat_chat">
                <div className='chat__chat_header' onClick={backClick}>
                    <BackIcon  />
                    <div className='chat__chat_chat__username'>{username}</div>
                    {/* info icon */}
                </div>
                <div className='chat__chat_eliza'><Eliza /></div>
                <div className='chat__chat_footer'></div>
            </dir>
        </div>
        );
    }
    export default Chat;