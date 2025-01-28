import React from 'react';
import { useState } from 'react';

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
  let [sidebar, setSidebar] = useState(false);

  let [meta, setMeta] = useState({
    multipleImages: 1, // if 1 is solo / if 2 is mutliple 
    images: 2, // if multiple this number of images 2-4
    likeUsers: 3, // between 1 and 3
    comments: 3, // between 1 and 4
  });

  const testUser = React.useRef( generateString(10) );
  const testNumber = React.useRef( getRandomInt(110) );



  return (
    <section className="post">
      <div className="post__header">
          <div className="post__header__icon"></div>
          <div className="post__header__name">
              warnick
          </div>
          <div className="post__header__options"><div></div></div>
      </div>
      <div className="post__image">
        <Carousel 
          show={1}
          infiniteLoop
          withIndicator
        >
          <BlurImage data-testid="carousel-item-1" />
          <BlurImage data-testid="carousel-item-2" />
          <BlurImage data-testid="carousel-item-3" />
        </Carousel>
          
          <div className="post__image__icons">
              <div className="post__image__heart">
                <HeartIcon />
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
              <div className="post__likes__circle"></div>
              <div className="post__likes__circle"></div>
              <div className="post__likes__circle"></div>
              <div className="post__likes__number">Liked by <span>{testUser.current}</span> and <span>{testNumber.current} others</span></div>
          </div>
          <Comments open={sidebar} />
      </div>
      {meta.numberOfImages}
  </section>
  );
};

export default Post;