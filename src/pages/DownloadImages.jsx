import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { ImageContainer } from "../components";
import { Link } from "react-router-dom";

function DownloadImages() {
  const { downloadImages } = useGlobalContext();
  if (downloadImages.length == 0) {
    return (
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-xl md:text-4xl text-center">
            No downloaded images available!
          </h1>
          <Link className="btn btn-primary md:btn-md btn-sm" to="/">
            Go to home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="align-elements my-5">
      {downloadImages.length > 0 && <ImageContainer images={downloadImages} />}
    </div>
  );
}

export default DownloadImages;
