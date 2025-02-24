import React from 'react';
import { useState } from 'react';

import './ThreeDotsIcon.scss';

function ThreeDotsIcon({ children }) {
    const [open, setOpen] = useState(false);

    const showDropdown = () => {
        setOpen(current => !current);
    }

return (
    <div className={ open ? 'threeDotsIcon open' : 'threeDotsIcon'} onClick={showDropdown}>  
        <div className="threeDotsIcon__dropdown">
            <div className="threeDotsIcon__Icon">
                <div className='threeDotsIcon__dot'></div>
                <div className='threeDotsIcon__dot'></div>
                <div className='threeDotsIcon__dot'></div>
            </div>
            <div className="threeDotsIcon__dropdown-content">
                {children}
            </div>
        </div>
    </div>
    );
}
export default ThreeDotsIcon;