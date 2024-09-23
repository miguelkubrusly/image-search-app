import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface ImageData{
  description:string;
  alt_description: string;
  urls:{
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  }
}

async function searchImages(searchTerm:string):Promise<ImageData[]> {
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: "Client-ID TIEvqvwCT6uxmLHm7d_yzz-2LOQyblhvs3IrBkXBKAI",
    },
    params: {
      query: searchTerm,
    },
  };
  const response: AxiosResponse = await axios.get(
    "https://api.unsplash.com/search/photos",
    config
  );
  return response.data.results;
}

export default searchImages;
