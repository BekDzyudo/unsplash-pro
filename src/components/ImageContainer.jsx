import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ImageContainer({ images }) {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
    >
      <Masonry gutter="10px">
        {images.map((image) => {
          return <img key={image.id} src={image.urls.regular} alt="" />;
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImageContainer;
