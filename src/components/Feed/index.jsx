import { useState } from 'react';
import Stories from '../Stories';
import Post from '../Post';

import './Feed.scss';

function Feed() {


return (
    <div className="feed__Feed">
        <Stories />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
    );
}
export default Feed;