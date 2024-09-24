import { AxiosResponse } from "axios";
import React, { ReactNode } from "react";

export interface ImgData {
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  [key: string]: any;
}

interface ImgProps {
  images: ImgData[];
}

function ImageList({ images }: ImgProps) {
  const renderedImages = images.map((image: ImgData) => {
    return <img></img>;
  });

  return (
    <div>
      <p>{renderedImages}</p>
    </div>
  );
}

export default ImageList;
