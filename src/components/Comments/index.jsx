import { useState } from 'react';

import Comment from '../Comment';
import ShareIcon from '../ShareIcon';
import BackIcon from '../BackIcon';

import './Comments.scss';

function Comments({open}) {
    
    // add class to body to frieze it
    // add class to post__comments_comments to expand it

    // back arrow
    // share

    // comment submission
        // update 

        // onClick={() => {open = !open}}
        // onClick={() => {setSidebar(!sidebar)}}

    return (
        <div className={open ? "post__comments open" : "post__comments"}>
            <Comment type={true} />
            <div>posted min</div>
            <div>View all 5 Comments</div>
            <div className='post__comments_comments'>
                <div className='post__comments_comments___header'>
                    <div ><BackIcon /></div>
                    <div><ShareIcon /></div>
                </div>
                <Comment type={false} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed haec omittamus; Inde igitur, inquit, ordiendum est. Quae est igitur causa istarum angustiarum? Duo Reges: constructio interrete. <a href='http://loripsum.net/' target='_blank'>Nescio quo modo praetervolavit oratio.</a> Ille enim occurrentia nescio quae comminiscebatur; <a href='http://loripsum.net/' target='_blank'>At ego quem huic anteponam non audeo dicere;</a> An hoc usque quaque, aliter in vita? Non laboro, inquit, de nomine. </p>
                <p><a href='http://loripsum.net/' target='_blank'>Atqui reperies, inquit, in hoc quidem pertinacem;</a> Quod quidem nobis non saepe contingit. Istam voluptatem perpetuam quis potest praestare sapienti? Putabam equidem satis, inquit, me dixisse. </p>
            
                <div className='post__comments_comments___submission'></div>
            </div>
        </div>
        );
    }
    export default Comments;