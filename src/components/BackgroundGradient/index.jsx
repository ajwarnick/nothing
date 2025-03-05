import { useState } from 'react';
import { getRandomInt } from '../Utilities/functions.js';


import './BackgroundGradient.scss';

const colors = [
    "rgb(150, 224, 154)", 
    "rgb(150, 224, 191)", 
    "rgb(183, 224, 150)", 
    "rgb(224, 150, 220)", 
    "rgb(224, 154, 150)", 
    "rgb(150, 220, 224)", 
    "rgb(230, 155, 142)"];

const makeLinearGradient = () => {
    const turn = getRandomInt(10, 90)/100;
    return `linear-gradient( ${turn}turn, ${colors[getRandomInt(0, colors.length-1)]} 0%,  25%, ${colors[getRandomInt(0, colors.length-1)]} 50%, ${colors[getRandomInt(0, colors.length-1)]} 100%)`;
}

const makeRadialGradient = () => {
    const numberOfPoints = getRandomInt(1, 3)
    var startingPositions = ["circle 70vw at 10vw 50vw", "circle 60vw at 70vw 70vw", "circle 60vw at 70vw 7vw", "circle 50vw at 50vw 20vw", "circle 40vw at 70vw 20vw"];
    
    let r = `radial-gradient(${startingPositions[getRandomInt(0, startingPositions.length-1)]}, ${colors[getRandomInt(0, colors.length-1)]}, transparent)`;
    for (let i = 0; i < numberOfPoints; i++) {
        r += `, radial-gradient(${startingPositions[getRandomInt(0, startingPositions.length-1)]}, ${colors[getRandomInt(0, colors.length-1)]}, transparent)`
      } 
    //    return `linear-gradient( 257deg, ${colors[getRandomInt(0, colors.length-1)]} 0%,  25%, ${colors[getRandomInt(0, colors.length-1)]} 50%, ${colors[getRandomInt(0, colors.length-1)]} 100%)`;
    return r;
}

const makeConicGradient = () => {
    const percentWidth = getRandomInt(10, 90);
    const percentHeight = getRandomInt(10, 90);
    const turn = getRandomInt(10, 90)/100;
    return `conic-gradient(from ${turn}turn at ${percentWidth}% ${percentHeight}%, ${colors[getRandomInt(0, colors.length-1)]}, ${colors[getRandomInt(0, colors.length-1)]}, ${colors[getRandomInt(0, colors.length-1)]} )`;
}

function BackgroundGradient({num}) {
    // base color


    const [elements, setElements] = useState([
        { "backgroundImage": makeLinearGradient()}
    ]);

    return (
        <div className={"backgroundGradient__parent "}>
            {elements.map((x, i) =>
              <div className='animationone' key={i} style={x}></div>
            )}
        </div>
    );
}
export default BackgroundGradient;