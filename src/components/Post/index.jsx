import React from 'react';
import './Post.scss';
import BlurImage from '../BlurImage';
import Comment from '../Comment';

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateString = (length) => {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


const Post = () => {
  
  function sayHello() {
    alert('Hello, World!');
  }
  
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
                
              </div>
              <div className="post__image__comment">
                
              </div>
              <div className="post__image__share">
                
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
              <p><span>{generateString(10)}</span>Liked by</p>
              <div className="post__likes__number"></div>
          </div>
          <div className="post__comments">
            <Comment />
          </div>
      </div>
  </section>
  );
};

export default Post;