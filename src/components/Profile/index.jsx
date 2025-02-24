import BlurImage from '../BlurImage';
import Stories from '../Stories';
import StoryIcon from '../StoryIcon';
import AddIcon from '../AddIcon';
import ThreeDotsIcon from '../ThreeDotsIcon';
import Followers from '../Followers';

import './Profile.scss';

function Profile() {

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    

return (
    <div className="profile__Profile">
        <div className='profile__Data'>
            <div className='profile__Data_avatar'>
                <BlurImage key="avatar" />
            </div>
            <div className='profile__Data_data'>
                <div className='profile__Data_username'>savannahlands</div>
                <div className='profile__Data_following'>Following</div>
                <div className='profile__Data_message'>Message</div>
                <div className='profile__Data_add'>
                    <AddIcon />
                </div>
                <div className='profile__Data_option'>
                    <ThreeDotsIcon>
                        {/* <a href="#">Edit</a> */}
                        <p>Vitae cum voluptates iure dolorem. Adipisci quibusdam praesentium sed omnis ut similique ut. Omnis in saepe quis repudiandae molestiae. Nemo consequuntur maiores ut deserunt assumenda. Voluptatem qui dolorum deserunt assumenda voluptas quo. Ipsam eveniet maiores ullam debitis.</p>
                    </ThreeDotsIcon>
                </div>
            </div>
            <div className='profile__Stats_stats'>
                <div className='profile__Stats_post'><span className='profile__Stats_number'>64</span> posts</div>
                <div className='profile__Stats_followers'><span className='profile__Stats_number'>3,161</span> followers</div>
                <div className='profile__Stats_following'><span className='profile__Stats_number'>2,320</span> following</div>
            </div>
            <div className='profile__Bio'>
                Danni O’Brien 🏳️‍🌈she/they<br/>
                Interdisciplinary Artist<br/>
                recently: Material Systems, @marylandinstitutecollegeofart<br/>
                Innovation Studio AIR<br/>
                {/* Followed by _thewanderingartteacher_, wassaicproject and 130 more */}
            </div>
        </div>
       <Followers></Followers>
        <div className='profile__Stories'>
            {/* <Stories /> */}

            <div>
                <StoryIcon/>
                word
            </div>
            <div>
                <StoryIcon/>
                word
            </div>
            <div>
                <StoryIcon/>
                word
            </div>
        </div>
        <div className='profile__Icons'>
            <div className='profile__Icons_grid'></div>
            <div className='profile__Icons_feed'></div>
            <div className='profile__Icons_'></div>
            <div className='profile__Icons_bookmark'></div>
        </div>
        <div className='profile__Grid'>
            {[...Array(10)].map((x, i) =>
                <div className='profile__Grid_item'>
                    <BlurImage key={i} />
                </div>
            )}
       </div>
    </div>
    );
}
export default Profile;