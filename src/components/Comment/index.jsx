import { useRef, useState } from 'react';
import { generateLoremText, generateUsername, generateString, getRandTime, getRandomInt } from '../Utilities/functions.js'
import BlurImage from '../BlurImage';
import HeartIcon from '../HeartIcon';


import './Comment.scss';

import images from '../BlurImage/images.json';

const getHash = () => {
    return images.images[Math.floor(Math.random() * images.images.length)].hash
}


function Comment({type, data, isSlim}) {

    if (isSlim) {
      const slimMeta = useRef({
        userName: data.userName ? data.userName : generateUsername( getRandomInt( 4, 15 ) ),
        text: data.text ? data.text : generateLoremText(1, Math.floor(Math.random() * 40)),
      })

      return (
        <div className="post__comment isSlim">
            <p><span className='post__Comment_Username'>{ slimMeta.current.userName }</span> { slimMeta.current.text }</p>
        </div>
      );
    }else{
      const slimMeta = useRef({
        userName: data.userName ? data.userName : generateUsername( getRandomInt( 4, 15 ) ),
        text: data.text ? data.text : generateLoremText(1, Math.floor(Math.random() * 40)),
      });

      let [like, setLike] = useState(false);

      const meta = useRef({
        userAvatar: data.userAvatar ? data.userAvatar : getHash(),
        numberOfParagraphs: data.numberOfParagraphs ? data.numberOfParagraphs : getRandomInt( 1, 4), 
        numberOfWords: data.numberOfWords ? data.numberOfWords : Math.floor(Math.random() * 40), 
        time: data.time ? data.time : getRandTime(),
      });

      return (
        <div className="post__comment">
            <div className="post__comment_avatar">
              <BlurImage hash={meta.current.userAvatar} />
            </div>
            <div>
              <p><span className='post__Comment_Username'>{ slimMeta.current.userName }</span> { slimMeta.current.text }</p>
            </div>
            <div className="post__comment_meta">
              { meta.current.time }              
            </div>
            <div className="post__comment_heart">
              <HeartIcon like={like}/>
            </div>
        </div>
      );
    }    

    
  }
  export default Comment;