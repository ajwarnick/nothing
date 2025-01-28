import BlurImage from '../BlurImage';
import Stories from '../Stories';

import './Profile.scss';

function Profile() {


return (
    <div className="profile__Profile">
        <div className='profile__Data'>
            <div className='profile__Data_avatar'></div>
            <div className='profile__Data_data'></div>
        </div>
        <div className='profile__Bio'>

        </div>
        <div className='profile__Stories'>
            <Stories />
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