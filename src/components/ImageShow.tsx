import { ImgData } from "./ImageList";

interface ImgShowProps {
  thisImage: ImgData;
}

export function ImageShow({ thisImage }: ImgShowProps) {
  return <div>{thisImage.alt_description}</div>;
}

export default ImageShow;
