import React from 'react';
import { useState } from 'react';
import StoryIcon from '../StoryIcon';

import './Follower.scss';

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateUsername = (length) => {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateDisplayname = (numParagraphs, numWords) =>  {
    var loremText = '';
    var words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'Duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'Excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum',         ];
  
    for (var i = 0; i < numParagraphs; i++) {
      var paragraph = '';
      for (var j = 0; j < numWords; j++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        paragraph += randomWord + ' ';
      }
      loremText +=  paragraph ;
    }
    return loremText;
}

function Follower({ following = false }) {
    const [follow, setFollow] = useState(following);
    
    const followToggle = () => {
        setFollow(current => !current)
    }
    
return (

    <div className='follower__Follower'>
        <div className='follower__Follower_icon'>
            <StoryIcon />
        </div>
        <div className='follower__Follower_name'>
            <p className='follower__Follower_username'>{generateUsername(getRandomInt(5,10))}</p>
            <p className='follower__Follower_displayname'>{generateDisplayname(1, getRandomInt(1,3))}</p>
        </div>
        <div className={ follow ? 'follower__Follower_button' : 'follower__Follower_button following'} onClick={followToggle}>{ follow ? 'Fallow' : 'Following'}</div>
    </div>

    );
}
export default Follower;