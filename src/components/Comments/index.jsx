import Comment from '../Comment';

import './Comments.scss';

function Comments() {

    // add class to body to frieze it
    // add class to post__comments_comments to expand it

    return (
        <div className="post__comments">
            <Comment />
            <div>posted min</div>
            <div>View all 5 Comments</div>
            <div className='post__comments_comments'>

            </div>
        </div>
        );
    }
    export default Comments;