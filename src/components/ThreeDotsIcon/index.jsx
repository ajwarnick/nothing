import React from 'react';
import { useState } from 'react';

import './ThreeDotsIcon.scss';

function ThreeDotsIcon() {
    const showDropdown = () => {
        console.log("yo");
    }

return (
    <div className='threeDotsIcon'>  
        <div className="threeDotsIcon__dropdown">
            <div className="threeDotsIcon__Icon" onClick={showDropdown()}>
                <div className='threeDotsIcon__dot'></div>
                <div className='threeDotsIcon__dot'></div>
                <div className='threeDotsIcon__dot'></div>
            </div>
            <div className="threeDotsIcon__dropdown-content">
                <a href="#home">Open</a>
                <a href="#about">Edit</a>
            </div>
        </div>
    </div>
    );
}
export default ThreeDotsIcon;