// import { AxiosResponse } from "axios";
// import React, { ReactNode } from "react";
import "./ImageList.css";
import ImageShow from "./ImageShow";

export interface ImgData {
  id: string;
  alt_description: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
}

interface ImgProps {
  images: ImgData[];
}

function ImageList({ images }: ImgProps) {
  const renderedImages = images.map((image: ImgData) => {
    return <ImageShow key={image.id} thisImage={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
