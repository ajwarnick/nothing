import React from 'react';
import { useState, useMemo } from 'react';

import BlurImage from '../BlurImage';
import Comments from '../Comments';
import HeartIcon from '../HeartIcon';
import CommentIcon from '../CommentIcon';
import ShareIcon from '../ShareIcon';
import Carousel from '../Carousel/Index';

import './Post.scss';

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateString = (length) => {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const Post = () => {
  const timer = React.useRef();
  const userAvatar = useMemo(() => <BlurImage />);
  let [sidebar, setSidebar] = useState(false);
  let [like, setLike] = useState(false);

  let [meta, setMeta] = useState({
    multipleImages: getRandomInt(2), // if 1 is solo / if 2 is mutliple 
    images: getRandomInt(4), // if multiple this number of images 2-4
    likeUsers: getRandomInt(160), // between 1 and 3
    comments: getRandomInt(3), // between 1 and 4
  });

  const onClickHandler = event => {
    clearTimeout(timer.current);

    if (event.detail === 1) {
      timer.current = setTimeout(()=>{}, 200);
    } else if (event.detail === 2) {
      setLike(true);
    }
  }

  const testUser = React.useRef( generateString( getRandomInt( 15 ) ) );
  const testNumber = React.useRef( getRandomInt(110) );

  return (
    <section className="post">
      <div className="post__header">
          <div className="post__header__icon">
            {userAvatar}
          </div>
          <div className="post__header__name">
              {/* {`Multiple: ${meta.multipleImages}, Likes: ${meta.likeUsers}, Username: ${testUser.current}`} */}
              {testUser.current}
          </div>
          <div className="post__header__options"><div></div></div>
      </div>
      <div className="post__image" onClick={onClickHandler}>
        {meta.multipleImages === 0 ? (
          <Carousel show={1} withIndicator >
            {[...Array(meta.images + 1)].map((x, i) =>
              <BlurImage key={i} />
            )}
          </Carousel>
        ) : (
          <BlurImage />
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
              <div className="post__likes__circle"><BlurImage /></div>
              <div className="post__likes__circle"><BlurImage /></div>
              <div className="post__likes__circle"><BlurImage /></div>
              <div className="post__likes__number">Liked by <span>{testUser.current}</span> and <span>{meta.likeUsers} others</span></div>
          </div>
          <Comments open={sidebar} />
      </div>
      {meta.numberOfImages}
  </section>
  );
};

export default Post;