import DarkIcon from '../DarkIcon'
import AddIcon from '../AddIcon';

import './Header.scss';

function Header() {


return (
    <div className='header'>
        <div className='header__logo'>
            NOTHING
        </div>

        <div className='header__Icons'>
            <DarkIcon />
            {/* <AddIcon /> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8m-4-4v8"/></g></svg> */}
        </div>
    </div>
    );
}
export default Header;