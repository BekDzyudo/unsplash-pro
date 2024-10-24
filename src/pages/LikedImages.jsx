import { Link } from "react-router-dom";
import { ImageContainer } from "../components";
import { useGlobalContext } from "../hooks/useGlobalContext";

function LikedImages() {
  const { likedImages } = useGlobalContext();
  if (likedImages.length == 0) {
    return (
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-xl md:text-4xl text-center">
            There are no favorite pictures!
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
      {likedImages.length > 0 && <ImageContainer images={likedImages} />}
    </div>
  );
}

export default LikedImages;
