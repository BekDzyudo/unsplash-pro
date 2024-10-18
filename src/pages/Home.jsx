// components
import { useEffect, useRef, useState } from "react";
import { ImageContainer, Search } from "../components";
// react router dom
import { useActionData } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("search");
  return search;
};

function Home() {
  // search value
  const searchValue = useActionData();
  const [allImages, setAllImages] = useState([]);
  const [pageParam, setPageParam] = useState(1);
  const prevSearchParam = useRef(searchValue);

  // fetch images
  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }&query=${searchValue ?? "all"}&page=${pageParam}`
  );
  useEffect(() => {
    if (data && data.results) {
      setAllImages((prevImages) => {
        return pageParam == 1 ? data.results : [...prevImages, ...data.results];
      });
    }
  }, [data]);

  useEffect(() => {
    if (searchValue != prevSearchParam.current) {
      setAllImages([]);
      setPageParam(1);
      prevSearchParam.current = searchValue;
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchValue) {
      // console.log(searchValue);
    }
  }, [searchValue]);

  return (
    <div className="align-elements relative">
      <div className="my-5">
        <Search />
      </div>
      {isPending && (
        <span className="loading loading-spinner loading-lg fixed top-1/2 left-1/2"></span>
      )}
      <div>
        {allImages.length > 0 && <ImageContainer images={allImages} />}
        <div>
          {!isPending && (
            <button
              onClick={() => setPageParam(pageParam + 1)}
              className="btn btn-secondary my-10 btn-block text-xl"
            >
              Read more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
