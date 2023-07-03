import { useState } from "react";
import SearchHeader from "./components/searchHeader";
import searchImages from "./components/Api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setİmages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setİmages(result);
  };

  return (
    <>
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </>
  );
}

export default App;
