import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Image } from "./";
import { useGlobalContext } from "../hooks/useGlobalContext";

function ImageContainer({ images }) {
  const { likedImages } = useGlobalContext();
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
    >
      <Masonry gutter="10px">
        {images.map((image) => {
          return (
            <Image
              key={image.id}
              image={image}
              added={likedImages.some((img) => img.id == image.id)}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImageContainer;
