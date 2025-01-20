import React from 'react';
import { useState } from 'react';

import BlurImage from '../BlurImage';
import Comments from '../Comments';
import HeartIcon from '../HeartIcon';
import CommentIcon from '../CommentIcon';
import ShareIcon from '../ShareIcon';

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
    const [sidebar, setSidebar] = useState(false);

    // onClick={() => {setSidebar(!sidebar)}}
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
          <BlurImage />
          <div className="post__image__icons">
              <div className="post__image__heart">
                <HeartIcon />
              </div>
              <div className="post__image__comment" >
                <CommentIcon onClick={() => {console.log("Bingo Bango!")}}/>
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
              <div className="post__likes__number">Liked by <span>{generateString(10)}</span> and <span>{getRandomInt(110)} others</span></div>
          </div>
          <Comments open={sidebar} />
      </div>
  </section>
  );
};

export default Post;