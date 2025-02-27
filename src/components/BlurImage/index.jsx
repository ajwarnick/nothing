// import { Blurhash } from "react-blurhash";
import { BlurhashCanvas } from "react-blurhash";
import { memo } from 'react';

import './BlurImage.scss';

const BlurImage = memo(function BlurImage({ hash }) {
  return <div className="blurImage"><BlurhashCanvas hash={hash} width={900} height={700} punch={1} style={{border: "0px solid red", maxWidth: "100%"}} /></div>
});

export default BlurImage;