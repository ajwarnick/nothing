import { Blurhash } from "react-blurhash";
import { BlurhashCanvas } from "react-blurhash";

function BlurImage() {

    return (
      <div className="BlurImage">
        <img src="https://picsum.photos/900/700" alt=""></img>
        {/* <Blurhash
            hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            width={900}
            height={700}
            resolutionX={100}
            resolutionY={100}
            punch={0}
        />
        hi<br/>
        <BlurhashCanvas hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" width={400} height={300} punch={1} /> */}
      </div>
    );
  }
  export default BlurImage;