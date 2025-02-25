import { useState } from 'react';
import { getRandomInt } from '../Utilities/functions.js';

import Modal from '../Modal';
import Follower from '../Follower';

import './Followers.scss';

function Followers({ open, close }) {

return (
    <Modal open={open} close={close}> 
        <div className='followers_Followers'>
            {[...Array(10)].map((x, i) =>
                <Follower key={i}  following={getRandomInt(0,i) == 1 ? false : true}/>
            )}
        </div>
    </Modal>
    );
}
export default Followers;