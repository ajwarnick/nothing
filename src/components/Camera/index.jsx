import './Camera.scss';
import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

let capture;

function sketch(p5) {
    p5.setup = () =>{
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        capture = p5.createCapture(p5.VIDEO,{ flipped:true });
        capture.size(100,100);
    };
  
    p5.draw = () => {
        p5.image(capture, 0, 0, p5.width, p5.height * capture.height / capture.width);

        // Invert the colors in the stream.
        p5.filter(p5.INVERT);
    };
}

function Camera() {


return (
    <div className="camera__Camera">
        <ReactP5Wrapper sketch={sketch} />
    </div>
    );
}
export default Camera;

