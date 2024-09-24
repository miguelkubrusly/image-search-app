// import { AxiosResponse } from "axios";
// import React, { ReactNode } from "react";

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
  [key: string]: any;
}

interface ImgProps {
  images: ImgData[];
}

function ImageList({ images }: ImgProps) {
  const renderedImages = images.map((image: ImgData, index: number) => {
    return (
      <div key={index}>
        <ImageShow thisImage={image} />
      </div>
    );
  });

  return <div>{renderedImages}</div>;
}

export default ImageList;
