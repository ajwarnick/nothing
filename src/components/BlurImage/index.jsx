// import { Blurhash } from "react-blurhash";
import { BlurhashCanvas } from "react-blurhash";
import images from './images.json';

import './BlurImage.scss';

const imageHases = images.images;

function BlurImage() {  
  let hash = imageHases[Math.floor(Math.random() * imageHases.length)].hash;

  return (
    <div className="blurImage">
      {/* <Blurhash
          hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          width={900}
          height={700}
          resolutionX={10}
          resolutionY={10}
          punch={0}
      /> */}
      <BlurhashCanvas hash={hash} width={900} height={700} punch={1} style={{border: "0px solid red", maxWidth: "100%"}} />
    </div>
  );
}
export default BlurImage;