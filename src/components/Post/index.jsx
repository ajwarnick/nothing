import { useState, useMemo, useRef } from 'react';
import { generateDisplayname, getRandomInt, generateString } from '../Utilities/functions.js';

import BlurImage from '../BlurImage';
import Comments from '../Comments';
import HeartIcon from '../HeartIcon';
import CommentIcon from '../CommentIcon';
import ShareIcon from '../ShareIcon';
import Carousel from '../Carousel/Index';

import images from '../BlurImage/images.json';
const imageHashes = images.images;

const getHash = () => {
    return imageHashes[Math.floor(Math.random() * imageHashes.length)].hash
}

const generateHashes = (num) => {
  return [...Array(num+1)].map(() => getHash());;
}

import './Post.scss';

const Post = () => {
  const timer = useRef();
  // const userAvatar = useMemo(hhhh,[]);
  let [sidebar, setSidebar] = useState(false);
  let [like, setLike] = useState(false);

  const meta = useRef({
    multipleImages: getRandomInt(1,2), // if 1 is solo / if 2 is mutliple 
    images: generateHashes(getRandomInt(1,3)), // if multiple this number of images 2-4
    likeUsers: getRandomInt(1,160), // between 1 and 3
    comments: getRandomInt(1,4), // between 1 and 4
  });

  // const posts  = [...Array(20)].map(() => getHash());

  const onClickHandler = event => {
    clearTimeout(timer.current);

    if (event.detail === 1) {
      timer.current = setTimeout(()=>{}, 200);
    } else if (event.detail === 2) {
      setLike(true);
    }
  }

  const testUser = useRef( generateString( getRandomInt( 15 ) ) );
  const testNumber = useRef( getRandomInt(110) );

  return (
    <section className="post">
      <div className="post__header">
          <div className="post__header__icon">
          {/* <BlurImage hash={userAvatar} /> */}
          </div>
          <div className="post__header__name">
              {/* {`Multiple: ${meta.multipleImages}, Likes: ${meta.likeUsers}, Username: ${testUser.current}`} */}
              {testUser.current}
          </div>
          <div className="post__header__options"><div></div></div>
      </div>
      <div className="post__image" onClick={onClickHandler}>
        {meta.current.multipleImages === 1 ? (
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
              <ShareIcon />
            </div>
            <div className="post__image__bookmark">
            
            </div>
        </div>
      </div>
      <div className="post__meta">
          <div className="post__likes">
              {/* <div className="post__likes__circle"><BlurImage /></div>
              <div className="post__likes__circle"><BlurImage /></div>
              <div className="post__likes__circle"><BlurImage /></div> */}
              <div className="post__likes__number">Liked by <span>{testUser.current}</span> and <span>{meta.current.likeUsers} others</span></div>
          </div>
          <Comments open={sidebar} />
      </div>
      {meta.current.numberOfImages}
  </section>
  );
};

export default Post;