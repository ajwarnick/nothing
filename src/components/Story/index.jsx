import { useState, useMemo, useRef } from 'react';

import { generateString, getRandomInt } from '../Utilities/functions.js';
import BackgroundGradient from "../BackgroundGradient";
import BlurImage from '../BlurImage';
import ShareIcon from '../ShareIcon';
import HeartIcon from '../HeartIcon';
import ThreeDotsIcon from '../ThreeDotsIcon';

import './Story.scss';

import images from '../BlurImage/images.json';

const getHash = () => {
    return images.images[Math.floor(Math.random() * images.images.length)].hash
}

function Story() {
    const meta = useRef({
        userAvatar: getHash(),
        userName: generateString( getRandomInt( 4, 15 ) )
    });

    return (
        <div className={"story__Story "}>
            <div className='story__Story_Header'>
                <div className='story__Story_Header_Lines'>
                    <div className='story__Story_Header_Line'></div>
                    <div className='story__Story_Header_Line'></div>
                </div>
                <div className='story__Story_Header_Meta'>
                    <div className="story__Story_Header__icon">
                        <BlurImage hash={meta.current.userAvatar} />
                    </div>
                    <div className="story__Story_Header__name">
                        { meta.current.userName }
                    </div>
                    <ThreeDotsIcon />
                </div>
                
            </div>
            <BackgroundGradient />
            <div className='story__Story_Footer'>
                <div className='story__Story_Footer_input'></div>
                <ShareIcon />
                <HeartIcon />
            </div>
        </div>
    );
}
export default Story;