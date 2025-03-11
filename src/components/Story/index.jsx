import { useState, useMemo, useRef, useEffect } from 'react';

import { generateString, getRandomInt, getRandTime } from '../Utilities/functions.js';
import BackgroundGradient from "../BackgroundGradient";
import BlurImage from '../BlurImage';
import ShareIcon from '../ShareIcon';
import HeartIcon from '../HeartIcon';
import PlayIcon from '../PlayIcon';
import PauseIcon from '../PauseIcon';
import ThreeDotsIcon from '../ThreeDotsIcon';

import './Story.scss';

import images from '../BlurImage/images.json';

const getHash = () => {
    return images.images[Math.floor(Math.random() * images.images.length)].hash
}

function Story() {
    const [isPlaying, setIsPlaying] = useState();
    const [isActive, setIsActive] = useState();

    const intervalRef = useRef(null);

    useEffect(() => {
        setIsActive(0);
        setIsPlaying(true);
        startAnimation();
    }, []);

    const meta = useRef({
        userAvatar: getHash(),
        userName: generateString( getRandomInt( 7, 26 ) ),
        time: getRandTime(),
        numOfStories: 3
    });

    const startAnimation = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setIsActive(previous => previous + 1);
            }, 4000);
        }
    };
    
    const stopAnimation = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsPlaying(false);
        }
    };

    const toggleAnimation = () => {
        if(isPlaying){
            stopAnimation();
        }

        if(!isPlaying){
            console.log('Yo');
            // setIsPlaying(true);
            // startAnimation();
        }
    }

    useEffect(() => {
        return () => stopAnimation(); // Clear interval on component unmount
    }, []);

    return (
        <div className={"story__Story "} onClick={toggleAnimation}>
            <div className='story__Story_Header'>
                <div className='story__Story_Header_Lines'>
                    { [...Array(meta.current.numOfStories)].map( ( test, i) => <div key={i} className={ `story__Story_Header_Line ${isPlaying ? "" : "paused"} ${i === isActive ? "active" : ""} ${i < isActive ? "done" : ""}`   }></div> ) }
                </div>
                <div className='story__Story_Header_Meta'>
                    <div className="story__Story_Header__icon">
                        <BlurImage hash={meta.current.userAvatar} />
                    </div>
                    <div className="story__Story_Header__name" >
                        <span className="story__Story_Header__username">{ meta.current.userName }</span> <span>{ meta.current.time }</span>
                    </div>
                    {isPlaying ? <PlayIcon /> : <PauseIcon />}
                    <ThreeDotsIcon />
                </div>
            </div>
            <BackgroundGradient />
            <div className='story__Story_Footer'>
                <fieldset className='story__Story_Footer_fieldset'>
                    <label>
                        <input className='story__Story_Footer_input' type="text" />
                    </label>  
                    <div className='story__Story_Footer_buttons'>
                        <button className='story__Story_Footer_buttons_smile'>
                            <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><ellipse cx="6" cy="5.5" rx="1" ry="1.5"/><ellipse cx="10" cy="5.5" rx="1" ry="1.5"/><path d="M12.143,12.071H11a2.929,2.929,0,0,0-5.857,0H4a4.072,4.072,0,0,1,8.143,0Z"/><path d="M8,1A7,7,0,1,1,1,8,7.008,7.008,0,0,1,8,1M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Z"/></svg>
                        </button>
                        <button className='story__Story_Footer_buttons_fire'>
                            <svg viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <g sketch:type="MSLayerGroup" transform="translate(-415.000000, -411.000000)">
                                        <path d="M428.5,441 C422.148,441 417,435.641 417,429.625 C417,428.228 417.031,427.094 418,426 C417.895,426.634 419.397,432.055 424.305,431.771 C424.092,427.652 422.978,417.561 428.152,414.073 C427.695,419.557 429.038,426.924 435.029,428 C434.686,425.801 434.727,422.143 436.267,421.467 C436.433,424.836 438.924,426.914 438.924,430.152 C438.924,436.016 433.251,441 428.5,441 L428.5,441 Z M437.905,417.953 C433.52,419.203 432.717,422.748 433,425 C429.872,421.322 430,417.093 430,411 C419.968,414.783 422.301,425.688 422,429 C419.477,426.935 419,422 419,422 C416.336,423.371 415,427.031 415,430 C415,437.18 420.82,443 428,443 C435.18,443 441,437.18 441,430 C441,425.733 437.867,423.765 437.905,417.953 L437.905,417.953 Z" id="fire-2" sketch:type="MSShapeGroup"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <button className='story__Story_Footer_buttons_funny'>
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8,1A7,7,0,1,1,1,8,7.008,7.008,0,0,1,8,1M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Z"/>
                                <path d="M11.5,5.42h-.794l.561-.58a.529.529,0,0,0,0-.732.488.488,0,0,0-.708,0L9.141,5.572a.521.521,0,0,0-.108.168.545.545,0,0,0-.039.2h0v0a.53.53,0,0,0,.038.2.513.513,0,0,0,.271.28.478.478,0,0,0,.181.038l.01,0h2a.51.51,0,0,0,.5-.518h0A.51.51,0,0,0,11.5,5.42Z"/>
                                <path d="M7.006,5.938h0a.545.545,0,0,0-.039-.2.521.521,0,0,0-.108-.168L5.442,4.108a.488.488,0,0,0-.708,0,.529.529,0,0,0,0,.732l.561.58H4.5a.51.51,0,0,0-.5.518H4a.51.51,0,0,0,.5.518h2.01A.5.5,0,0,0,6.7,6.416a.51.51,0,0,0,.271-.28.53.53,0,0,0,.038-.2Z"/>
                                <path d="M3,7.956a5,5,0,0,0,10,0Zm5,3.873A3.869,3.869,0,0,1,4.27,8.942h7.46A3.869,3.869,0,0,1,8,11.829Z"/>
                            </svg>
                        </button>
                        <button className='story__Story_Footer_buttons_kiss'>
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8,1A7,7,0,1,1,1,8,7.008,7.008,0,0,1,8,1M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Z"/>
                                <g>
                                    <path d="M12,4.779A.8.8,0,0,0,11.19,4a.817.817,0,0,0-.69.372A.817.817,0,0,0,9.81,4,.8.8,0,0,0,9,4.779a.765.765,0,0,0,.278.587l1.148,1.105a.109.109,0,0,0,.148,0l1.148-1.105A.765.765,0,0,0,12,4.779Z"/>
                                </g>
                                <g>
                                    <path d="M7,4.779A.8.8,0,0,0,6.19,4a.817.817,0,0,0-.69.372A.817.817,0,0,0,4.81,4,.8.8,0,0,0,4,4.779a.765.765,0,0,0,.278.587L5.426,6.471a.109.109,0,0,0,.148,0L6.722,5.366A.765.765,0,0,0,7,4.779Z"/>
                                </g>
                                <path d="M8.407,12a4.633,4.633,0,0,1-1.29-.178C7.058,11.8,7,11.774,7,11.717V11.2a.1.1,0,0,1,.105-.1h.012c.362.027.858.053,1.214.053s.5-.126.5-.336v-.084c0-.194-.064-.373-.455-.373H7.4a.112.112,0,0,1-.117-.105V9.7A.108.108,0,0,1,7.4,9.6h.969c.367,0,.455-.205.455-.389V9.123c0-.21-.152-.273-.45-.273-.4,0-.852.032-1.231.058H7.134a.106.106,0,0,1-.111-.1V8.294c0-.058.065-.084.123-.105A4.112,4.112,0,0,1,8.377,8c.987,0,1.611.268,1.611,1.055v.074a.982.982,0,0,1-.531.834.848.848,0,0,1,.543.772v.084C10,11.638,9.387,12,8.407,12Z"/>
                            </svg>
                        </button>
                    </div>                  
                </fieldset>
                <ShareIcon />
                <HeartIcon />
            </div>
        </div>
    );
}
export default Story;