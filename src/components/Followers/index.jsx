import React from 'react';
import { useState } from 'react';
import Modal from '../Modal';
import Follower from '../Follower';

import './Followers.scss';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Followers({ children }) {
    const [open, setOpen] = useState(false);


return (
    <>  
        <Modal open={open} > 
            <div className='followers_Followers'>
                {[...Array(10)].map((x, i) =>
                    <Follower key={i}  following={getRandomInt(0,i) == 1 ? false : true}/>
                )}
            </div>
       </Modal>
    </>
    );
}
export default Followers;