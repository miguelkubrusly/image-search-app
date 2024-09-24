import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// export interface ImgData {
//   description: string;
//   alt_description: string;
//   urls: {
//     full: string;
//     raw: string;
//     regular: string;
//     small: string;
//     small_s3: string;
//     thumb: string;
//   };


async function searchImages(searchTerm: string){
  const config = {
    headers: {
      Authorization: "Client-ID TIEvqvwCT6uxmLHm7d_yzz-2LOQyblhvs3IrBkXBKAI",
    },
    params: {
      query: searchTerm,
    },
  };
  const response = await axios.get(
    "https://api.unsplash.com/search/photos",
    config
  );
  return response.data.results;
}

export default searchImages;
