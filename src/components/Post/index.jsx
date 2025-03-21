import { useState, useMemo, useRef } from 'react';
import { generateDisplayname, getRandomInt, generateString, buildParams } from '../Utilities/functions.js';

import BlurImage from '../BlurImage';
import Comments from '../Comments';
import HeartIcon from '../HeartIcon';
import CommentIcon from '../CommentIcon';
import ShareIcon from '../ShareIcon';
import Carousel from '../Carousel/Index';

import images from '../BlurImage/images.json';

const getHash = () => {
    return images.images[Math.floor(Math.random() * images.images.length)].hash
}

const generateHashes = (num) => {
  return [...Array(num+1)].map(() => getHash());;
}

const generateImages = () => {
  const coin = getRandomInt(1,2);
  var images;
  if (coin == 1){
    images = [getHash()];
  }else{
    images = generateHashes(getRandomInt(1,3));
  }

  return images;
}

import './Post.scss';

const Post = ({data, isLiked}) => {
  const timer = useRef();
  let [sidebar, setSidebar] = useState(false);
  let [like, setLike] = useState(isLiked);

  const meta = useRef({
      userAvatar: data.userAvatar ? data.userAvatar : getHash(),
      userName: data.userName ? data.userName : generateString( getRandomInt( 4, 15 ) ),
      images: data.images ? data.images : generateImages(), // if multiple this number of images 2-4
      likeUsers: data.likeUsers ? data.likeUsers : getRandomInt(1,160), // between 1 and 3
      likeAvatars: data.likeAvatars ? data.likeAvatars : generateHashes(getRandomInt(1,3)),
      comments: data.comments ? data.comments : getRandomInt(1,4), // between 1 and 4
  });

  const onClickHandler = event => {
    clearTimeout(timer.current);

    if (event.detail === 1) {
      timer.current = setTimeout(()=>{}, 200);
    } else if (event.detail === 2) {
      setLike(true);
    }
  }

  const sharePath = () => {
    const path = '/post/' + buildParams(meta.current)
    return path;
  }


  const testUser = useRef( generateString( getRandomInt( 15 ) ) );
  const testNumber = useRef( getRandomInt(110) );

  return (
    <section className="post">
      <div className="post__header">
          <div className="post__header__icon">
            <BlurImage hash={meta.current.userAvatar} />
          </div>
          <div className="post__header__name">
              { meta.current.userName }
          </div>
          <div className="post__header__options"><div></div></div>
      </div>
      <div className="post__image" onClick={onClickHandler}>
        { meta.current.images.length > 1 ? (
          <Carousel show={1} withIndicator >
            {meta.current.images.map((x, i) =>
              <BlurImage key={i} hash={x} />
            )}
          </Carousel>
        ) : (
           <BlurImage hash={meta.current.images[0]}/>
        )}
        <div className="post__image__icons">
            <div className="post__image__heart">
              <HeartIcon like={like}/>
            </div>
            <div className="post__image__comment" onClick={() => {setSidebar(!sidebar)}}>
              <CommentIcon />
            </div>
            <div className="post__image__share">
              <ShareIcon path={sharePath()}/>
            </div>
            <div className="post__image__bookmark">
            
            </div>
        </div>
      </div>
      <div className="post__meta">
          <div className="post__likes">
            {meta.current.likeAvatars.map((x,i) => 
              <div className="post__likes__circle" key={i}><BlurImage hash={x} /></div>
            )}
            <div className="post__likes__number">Liked by <span>{testUser.current}</span> and <span>{meta.current.likeUsers} others</span></div>
          </div>
          <Comments open={sidebar} />
      </div>
      {meta.current.numberOfImages}
  </section>
  );
};

export default Post;