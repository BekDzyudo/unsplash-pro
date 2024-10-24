// react icons
import { FaHeart, FaRegHeart, FaDownload } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
// hooks
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useFirestore } from "../hooks/useFirestore";
import { useFirestoreDownload } from "../hooks/useFirestoreDownload";

function Image({ image, addedLike, addedDownload }) {
  const { urls, alt_description, links, user } = image;
  const {
    likedImages,
    downloadImages,
    dispatch,
    user: authUser,
  } = useGlobalContext();
  const { addDocument, removeDocument } = useFirestore();
  const { addDocumentDLoad, removeDocumentDLoad } = useFirestoreDownload();

  function addLikeImage(e, image) {
    e.preventDefault();
    const alreadyLikeImage = likedImages.find((img) => img.id == image.id);
    if (!alreadyLikeImage) {
      addDocument("likedImages", { ...image, uid: authUser.uid });
    } else {
      removeDocument("likedImages", alreadyLikeImage._id);
    }
  }

  function addedDownloadImage(e, image) {
    e.preventDefault();
    const alreadyDownloadImage = downloadImages.find(
      (img) => img.id == image.id
    );

    if (!alreadyDownloadImage) {
      addDocumentDLoad("downloadImages", { ...image, uid: authUser.uid });
      window.open(links.download + "&force=true", "_blank");
    } else {
      removeDocumentDLoad("downloadImages", alreadyDownloadImage._id);
    }
  }

  // function addedDownloadImage(e, image) {
  //   e.preventDefault();
  //   const alreadyDownloadImage = downloadImages.some(
  //     (img) => img.id == image.id
  //   );

  //   if (!alreadyDownloadImage) {
  //     dispatch({ type: "DOWNLOAD", payload: image });
  //     window.open(links.download + "&force=true", "_blank");
  //   } else {
  //     dispatch({ type: "UNDOWNLOAD", payload: image.id });
  //   }
  // }

  return (
    <Link to={`/ImageInfo/${image.id}`} className="relative group">
      {!addedLike && (
        <span
          onClick={(e) => addLikeImage(e, image)}
          className="md:like-btn-style md:hover-icons right-10 bottom-2 absolute md:right-2 md:top-2"
        >
          <FaRegHeart className="md:text-white text-2xl md:text-lg" />
        </span>
      )}
      {addedLike && (
        <span
          onClick={(e) => addLikeImage(e, image)}
          className="md:like-btn-style md:bg-slate-300 md:hover-icons right-10 bottom-2 absolute md:right-2 md:top-2"
        >
          <FaHeart className="text-red-600 text-2xl md:text-lg" />
        </span>
      )}
      <img
        className="border-red-600 mb-[50px] md:my-0"
        src={urls.regular}
        alt={alt_description}
      />
      <span className="absolute left-0 bottom-0 md:left-2 md:bottom-2 flex items-center gap-2 mt-2 md:hover-icons">
        <img
          className="w-10 h-10 rounded-full"
          src={user.profile_image.large}
          alt={user.name + " avatar"}
        />
        <p className="md:text-white">{user.name}</p>
      </span>
      <span className="absolute bottom-2 right-2 md:bottom-3 md:right-3 md:hover-icons mt-2">
        {!addedDownload && (
          <span onClick={(e) => addedDownloadImage(e, image)}>
            <FaDownload className="md:text-lg text-2xl md:text-white" />
          </span>
        )}
        {addedDownload && (
          <span onClick={(e) => addedDownloadImage(e, image)}>
            <FaDownload className="md:text-lg text-2xl text-red-600" />
          </span>
        )}
      </span>
    </Link>
  );
}

export default Image;
