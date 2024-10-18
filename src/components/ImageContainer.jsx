import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Image } from "./";

function ImageContainer({ images }) {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
    >
      <Masonry gutter="10px">
        {images.map((image) => {
          return <Image key={image.id} image={image} />;
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImageContainer;
