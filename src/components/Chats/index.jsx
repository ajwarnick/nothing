import { useState } from 'react';

import BackIcon from '../BackIcon';
import Chat from '../Chat';

import './Chats.scss';

function Chats() {


    return (
        <div className="chat__Chats">
            <Chat username={"warnick"} online={true}/>
            <Chat username={"warnick"} />
            <Chat username={"warnick"} />
            <Chat username={"warnick"} online={true}/>
        </div>
        );
    }
    export default Chats;