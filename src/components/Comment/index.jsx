import { generateLoremText } from '../Utilities/functions.js'

import './Comment.scss';

function Comment({type}) {

    let words = Math.floor(Math.random() * 40);
        words = 10;

    if (type) {
        return (
          <div className="post__comment">
            <p>true</p>
          </div>
        );
    }    

    return (
        <div className="post__comment">
            <p>{ generateLoremText(1, words) }</p>
        </div>
        );
  }
  export default Comment;