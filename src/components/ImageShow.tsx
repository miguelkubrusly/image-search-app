import { ImgData } from "./ImageList";

interface ImgShowProps {
  thisImage: ImgData;
}

export function ImageShow({ thisImage }: ImgShowProps) {
  return (
    <div>
      <img src={thisImage.urls.small} alt={thisImage.alt_description} />
    </div>
  );
}

export default ImageShow;
