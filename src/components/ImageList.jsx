import ImageItem from "./ImageItem";

const imageListStyle = {
  columns: "250px 5",
  columnGap: "10px",
};

function ImageList({ imagesPlaceholder }) {
  return (
    <div style={imageListStyle}>
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem images={image} key={index} />;
      })}
    </div>
  );
}

export default ImageList;
