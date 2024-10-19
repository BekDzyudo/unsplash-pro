// react icons
import { FaHeart, FaRegHeart, FaDownload } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function ImageInfo() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/photos/${id}?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`
  );

  return (
    <>
      {isPending && (
        <span className="loading loading-spinner loading-lg fixed top-1/2 left-1/2"></span>
      )}
      {data && (
        <div className="my-5 flex justify-center align-elements">
          <div className="flex flex-col md:flex-row gap-12 p-5 w-full">
            <div className="flex flex-col items-center gap-5">
              <div className="w-full h-[300px] md:w-[400px] md:h-[300px]">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={data.urls.regular}
                  alt={data.alt_description + " avatar"}
                />
              </div>
              <div className="flex gap-10">
                <span className="flex gap-2 items-center">
                  <FaHeart className="text-2xl" />: <span>{data.likes}</span>
                </span>
                <span className="flex gap-2 items-center">
                  <FaDownload className="text-2xl" />:{" "}
                  <span>{data.downloads}</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <strong className="text-lg">Name:</strong>
                <br />
                <span className="text-md md:text-xl">{data.user.name}</span>
              </div>
              <div>
                <strong className="text-lg">Location:</strong>
                <br />
                <span className="text-md md:text-xl">{data.user.location}</span>
              </div>
              <div>
                <strong className="text-lg">Bio:</strong>
                <br />
                <span className="text-md md:text-xl">{data.user.bio}</span>
              </div>
              <div>
                <strong className="text-lg">Portfolio:</strong>
                <br />
                <Link
                  to={data.user.portfolio_url}
                  className="text-blue-600 underline text-md md:text-xl"
                >
                  {data.user.portfolio_url && <span>Portfolio URL</span>}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageInfo;
