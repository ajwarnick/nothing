import { useState, useMemo, useRef } from 'react';
import { generateDisplayname, getRandomInt, generateUsername } from '../Utilities/functions.js';

import StoryIcon from '../StoryIcon';

import images from '../BlurImage/images.json';

import './Follower.scss';

function Follower({ following = false }) {

    const [follow, setFollow] = useState( following );
    const userAvatar = useRef(images.images[Math.floor(Math.random() * images.images.length)].hash);
    const userName = useRef( generateUsername(getRandomInt(5,10)) );
    const displayName = useRef( generateDisplayname(1, getRandomInt(1,3)) );

    const followToggle = () => {
        setFollow(current => !current);
    }

return (

    <div className='follower__Follower'>
        <div className='follower__Follower_icon'>
            <StoryIcon hash={userAvatar.current} />
        </div>
        <div className='follower__Follower_name'>
            <p className='follower__Follower_username'>{ userName.current }</p>
            <p className='follower__Follower_displayname'>{ displayName.current }</p>
        </div>
        <div className={ follow ? 'follower__Follower_button' : 'follower__Follower_button following'} onClick={followToggle}>{ follow ? 'Fallow' : 'Following'}</div>
    </div>

    );
}
export default Follower;