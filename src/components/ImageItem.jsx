function ImageItem({ images }) {
  const imageStyle = {
    width: "100%",
    marginBottom: "10px",
  };
  console.log(images);
  return (
    <div>
      <img
        src={images.urls.small}
        alt={images.alt_description}
        style={imageStyle}
      />
    </div>
  );
}

export default ImageItem;
