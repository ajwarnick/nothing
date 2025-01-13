import Comment from '../Comment';

import './Comments.scss';

function Comments() {

    return (
        <div className="post__comments">
            <Comment />
            <div>posted min</div>
            <div>View all 5 Comments</div>
        </div>
        );
    }
    export default Comments;