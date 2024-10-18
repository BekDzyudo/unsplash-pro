import { useGlobalContext } from "../hooks/useGlobalContext";

function LikedImages() {
  const data = useGlobalContext();
  console.log(data);

  return <div>Liked images</div>;
}

export default LikedImages;
