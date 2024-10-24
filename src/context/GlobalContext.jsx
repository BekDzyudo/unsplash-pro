import { createContext, useEffect, useReducer } from "react";
import { useCollection } from "../hooks/useCollection";

export const GlobalContext = createContext();

// function getFromLocalStorage() {
//   return (
//     JSON.parse(localStorage.getItem("my-splash-data")) || {
//       user: null,
//       likedImages: [],
//       downloadImages: [],
//     }
//   );
// }

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return { ...state, user: payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_READY":
      return { ...state, authReady: true };
    case "LIKE":
      return { ...state, likedImages: payload };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter((image) => image.id !== payload),
      };
    case "DOWNLOAD":
      return {
        ...state,
        downloadImages: payload,
      };
    case "UNDOWNLOAD":
      return {
        ...state,
        downloadImages: state.downloadImages.filter(
          (image) => image.id !== payload
        ),
      };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    authReady: false,
    likedImages: [],
    downloadImages: [],
  });

  const { data: likedImages } = useCollection("likedImages", [
    "uid",
    "==",
    state.user && state.user.uid,
  ]);
  const { data: downloadImages } = useCollection("downloadImages", [
    "uid",
    "==",
    state.user && state.user.uid,
  ]);

  useEffect(() => {
    localStorage.setItem("my-splash-data", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (likedImages) dispatch({ type: "LIKE", payload: likedImages });
  }, [likedImages]);

  useEffect(() => {
    if (downloadImages) dispatch({ type: "DOWNLOAD", payload: downloadImages });
  }, [downloadImages]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
