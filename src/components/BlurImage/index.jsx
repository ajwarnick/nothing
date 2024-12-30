// import { Blurhash } from "react-blurhash";
import { BlurhashCanvas } from "react-blurhash";

function BlurImage() {

  const hashes = ['UdG7bos+59NK}qs.9vNHV@oLNHn%Iqa}t6t6', 'LEHV6nWB2yk8pyo0adR*.7kCMdnj','L5H2EC=PM+yV0g-mq.wG9c010J}I']
  let hash = hashes[Math.floor(Math.random() * hashes.length)];

    return (
      <div className="BlurImage">
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