import { useState } from 'react';

import { generateDisplayname, getRandomInt } from '../Utilities/functions.js';

import BlurImage from '../BlurImage';
import Stories from '../Stories';
import StoryIcon from '../StoryIcon';
import AddIcon from '../AddIcon';
import ThreeDotsIcon from '../ThreeDotsIcon';
import Followers from '../Followers';

import images from '../BlurImage/images.json';
const imageHashes = images.images;

const getHash = () => {
    return imageHashes[Math.floor(Math.random() * imageHashes.length)].hash
}

const displayName = generateDisplayname(1,2);
const posts  = [...Array(20)].map(() => getHash());
const stories  = [...Array(4)].map(() => { 
    return {hash: getHash(), label: generateDisplayname(1,1) } });
const numberOfFollowers = getRandomInt(200);
const numberOfFollowing = getRandomInt(200);

const hhhh = getHash();

import './Profile.scss';

function Profile() {
    const [o, setO] = useState( false );

    const openFollowers = () => {
        setO(true);
    }

    const closeFollowers = () => {
        setO(false);
    }

return (
    <div className="profile__Profile">
        <div className='profile__Data'>
            <div className='profile__Data_avatar'>
                <BlurImage hash={hhhh} />
            </div>
            <div className='profile__Data_data'>
                <div className='profile__Data_username'>savannahlands</div>
                <div className='profile__Data_following' onClick={openFollowers}>Following</div>
                <div className='profile__Data_message'>Message</div>
                <div className='profile__Data_add'>
                    <AddIcon />
                </div>
                <div className='profile__Data_option'>
                    <ThreeDotsIcon>
                        <p>Vitae cum voluptates iure dolorem. Adipisci quibusdam praesentium sed omnis ut similique ut. Omnis in saepe quis repudiandae molestiae. Nemo consequuntur maiores ut deserunt assumenda. Voluptatem qui dolorum deserunt assumenda voluptas quo. Ipsam eveniet maiores ullam debitis.</p>
                    </ThreeDotsIcon>
                </div>
            </div>
            <div className='profile__Stats_stats'>
                <div className='profile__Stats_post'><span className='profile__Stats_number'>{ posts.length }</span> posts</div>
                <div className='profile__Stats_followers'><span className='profile__Stats_number'>{ numberOfFollowers }</span> followers</div>
                <div className='profile__Stats_following'><span className='profile__Stats_number'>{ numberOfFollowing }</span> following</div>
            </div>
            <div className='profile__Bio'>
                <span className='profile__Bio_displayName'>{ displayName }</span><br/>
                Danni O’Brien 🏳️‍🌈she/they<br/>
                Interdisciplinary Artist<br/>
                recently: Material Systems, @marylandinstitutecollegeofart<br/>
                Innovation Studio AIR<br/>
                Followed by _thewanderingartteacher_, wassaicproject and 130 more
            </div>
        </div>
       
        <div className='profile__Stories'>
            {stories.map((story, i) =>
                <div className='profile__Stories_story' key={i}>
                    <StoryIcon hash={story.hash} />
                    {story.label}
                </div>
            )}
        </div>
        <div className='profile__Icons'>
            <div className='profile__Icons_grid'></div>
            <div className='profile__Icons_feed'></div>
            <div className='profile__Icons_'></div>
            <div className='profile__Icons_bookmark'></div>
        </div>
        <div className='profile__Grid'>
            {posts.map((h, i) =>
                <div className='profile__Grid_item' key={i}>
                    <BlurImage hash={h} />
                </div>
            )}
       </div>
       <Followers open={o} close={closeFollowers} />
    </div>
    );
}
export default Profile;