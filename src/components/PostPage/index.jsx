import { useState, useMemo, useRef } from 'react';
import { generateDisplayname, getRandomInt, generateString } from '../Utilities/functions.js';

import images from '../BlurImage/images.json';

const getHash = () => {
    return images.images[Math.floor(Math.random() * images.images.length)].hash
}

const generateHashes = (num) => {
  return [...Array(num+1)].map(() => getHash());;
}

const generateImages = () => {
  var test = generateHashes(getRandomInt(1,3));
  return test;
}

import './PostPage.scss';

const PostPage = ({data}) => {


    const meta = useRef({
        userAvatar: data.userAvatar ? data.userAvatar : getHash(),
        userName: data.userName ? data.userName : generateString( getRandomInt( 4, 15 ) ),
        multipleImages: data.multipleImages ? data.multipleImages : getRandomInt(1,2), // if 1 is solo / if 2 is mutliple 
        images: data.images ? data.images : generateHashes(getRandomInt(1,3)), // if multiple this number of images 2-4
        likeUsers: data.likeUsers ? data.likeUsers : getRandomInt(1,160), // between 1 and 3
        likeAvatars: data.likeAvatars ? data.likeAvatars : generateHashes(getRandomInt(1,3)),
        comments: data.comments ? data.comments : getRandomInt(1,4), // between 1 and 4
    });

    console.log(meta.current);


    return (
        <div className='postPage__PostPage'>hi</div>
    );
};

export default PostPage;