import { useState, useRef } from 'react';
import { getRandomInt } from '../Utilities/functions.js'

import Comment from '../Comment';
import ShareIcon from '../ShareIcon';
import BackIcon from '../BackIcon';

import './Comments.scss';

function Comments({open = false}) {
    const [message, setMessage] = useState("");
    const [toggle, setToggle] = useState(open);
    const numComments = useRef(getRandomInt(1, 7));
    
    // add class to body to frieze it
    // add class to post__comments_comments to expand it

    // back arrow
    // share

    // comment submission
        // update 

        // onClick={() => {open = !open}}
        // onClick={() => {setSidebar(!sidebar)}}

    const openSidebar = () => {
        setToggle(prevToggle => !prevToggle);
        // document.body.classList.toggle('moduleOpen');
    }

    return (
        <div className={toggle ? "post__comments open" : "post__comments"}>
            <Comment isSlim data={{}}/>
            <div className='post__Comments_Viewall' onClick={openSidebar}>View all { numComments.current } Comments</div>
            <div className='post__comments_comments'>
                <div className='post__comments_comments___header'>
                    <div onClick={openSidebar}><BackIcon /></div>
                    <div className='post__comments_comments___header_label'>Comments</div>
                    <div><ShareIcon /></div>
                </div>
                <div className='post__comments_comments___comments'>
                    {[...Array(numComments.current)].map((x,i) => 
                        <Comment key={i} type={false} data={{}} />
                    )}
                </div>
                <div className='post__comments_comments___submission'>
                    <form className='post__comments_comments___form' onSubmit={()=>{console.log("YO")}}>
                    <label >
                        <input 
                            className='post__comments_comments___input'
                            type="text" 
                            value={message}
                            placeholder="Message"
                            // onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <input className='post__comments_comments___submit' type="submit" value="Send" />
                </form>
                </div>
                <div className='post__comments_comments___curtain'></div>
            </div>
        </div>
        );
    }
    export default Comments;