// react icons
import { FaHeart, FaRegHeart, FaDownload } from "react-icons/fa";
// hooks
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

function Image({ image, added }) {
  const { urls, alt_description, links, user } = image;
  const { likedImages, downloadImages, dispatch } = useGlobalContext();

  function addLikeImage(e, image) {
    e.preventDefault();
    const alreadyLikeImage = likedImages.some((img) => img.id == image.id);
    if (!alreadyLikeImage) {
      dispatch({ type: "LIKE", payload: image });
    } else {
      dispatch({ type: "UNLIKE", payload: image.id });
    }
  }

  function addedDownload(e, image) {
    e.preventDefault();
    const alreadyDownloadImage = downloadImages.some(
      (img) => img.id == image.id
    );

    if (!alreadyDownloadImage) {
      dispatch({ type: "DOWNLOAD", payload: image });
    }
    window.open(links.download + "&force=true", "_blank");
  }

  return (
    <Link to={`/ImageInfo/${image.id}`} className="relative group">
      {!added && (
        <span
          onClick={(e) => addLikeImage(e, image)}
          className="like-btn-style hover-icons"
        >
          <FaRegHeart className="text-white text-lg" />
        </span>
      )}
      {added && (
        <span
          onClick={(e) => addLikeImage(e, image)}
          className="like-btn-style bg-slate-300 hover-icons"
        >
          <FaHeart className="text-red-600 text-lg" />
        </span>
      )}
      <img src={urls.regular} alt={alt_description} />
      <span className="absolute left-2 bottom-2 flex items-center gap-2 hover-icons">
        <img
          className="w-10 h-10 rounded-full"
          src={user.profile_image.large}
          alt={user.name + " avatar"}
        />
        <p className="text-white">{user.name}</p>
      </span>
      <span className="absolute bottom-3 right-3 hover-icons">
        <span onClick={(e) => addedDownload(e, image)}>
          <FaDownload className="text-lg text-white" />
        </span>
      </span>
    </Link>
  );
}

export default Image;
