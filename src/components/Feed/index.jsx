import { useState } from 'react';
import Stories from '../Stories';
import Posts from '../Posts';
// import Post from '../Post';

import './Feed.scss';

function Feed() {


return (
    <div className="feed__Feed">
        <Stories />
        <Posts />
    </div>
    );
}
export default Feed;