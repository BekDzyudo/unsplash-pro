// react icons
import { FaHeart, FaRegHeart, FaDownload } from "react-icons/fa";

function Image({ image }) {
  const { urls, alt_description, links, user } = image;
  return (
    <div className="relative group">
      {true && (
        <span className="like-btn-style hover-icons">
          <FaRegHeart className="text-white text-lg" />
        </span>
      )}
      {false && (
        <span className="like-btn-style bg-slate-300 hover-icons">
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
        <a href={links.download + "&force=true"}>
          <FaDownload className="text-lg text-white" />
        </a>
      </span>
    </div>
  );
}

export default Image;
