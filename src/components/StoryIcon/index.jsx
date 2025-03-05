import { memo } from 'react';
import { getRandomInt } from '../Utilities/functions.js';
import BlurImage from '../BlurImage';

import './StoryIcon.scss';

const makeGradient = () => {
    var colors = ["#96e09a", "#96e0bf", "#b7e096", "#e096dc", "#e09a96", "#96dce0"];
   return `linear-gradient(to bottom, ${colors[getRandomInt(0, colors.length-1)]} 0%, ${colors[getRandomInt(0, colors.length-1)]} 50%, ${colors[getRandomInt(0, colors.length-1)]} 100%)`;
}

const bc = { "backgroundImage": makeGradient() };

const StoryIcon = memo(function StoryIcon({ hash, border = true }) {
    return <div className='storieIcon'><div className={border ? 'storieIcon__border' : ''} style={bc}></div><BlurImage hash={hash}/></div>
});
  
export default StoryIcon;