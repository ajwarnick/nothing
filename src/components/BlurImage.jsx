import { Blurhash } from "react-blurhash";
import { BlurhashCanvas } from "react-blurhash";

function BlurImage() {

  let hash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";
      hash = "L5jsl0k8pyo0adR*QfQfQQfQfQfQ";

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