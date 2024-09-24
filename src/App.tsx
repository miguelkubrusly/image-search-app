import { useState } from "react";
import searchImages from "./api";
import ImageList, { ImgData } from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import { AxiosPromise, AxiosResponse } from "axios";

function App() {
  const [images, setImages] = useState<ImgData[]>([]);

  const handleSubmit = async (searchTerm: string) => {
    const results: ImgData[] = await searchImages(searchTerm);
    setImages(results);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
