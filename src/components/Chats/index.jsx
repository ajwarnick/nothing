import { useState } from 'react';

import BackIcon from '../BackIcon';
import Chat from '../Chat';

import './Chats.scss';

function Chats() {


    return (
        <div className="chat__Chats">
            <Chat />
            <Chat />
        </div>
        );
    }
    export default Chats;