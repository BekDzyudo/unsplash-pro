import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

function getFromLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("my-splash-data")) || {
      likedImages: [],
      downloadImages: [],
    }
  );
}

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LIKE":
      return { ...state, likedImages: [...state.likedImages, payload] };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter((image) => image.id !== payload),
      };
    case "DOWNLOAD":
      return {
        ...state,
        downloadImages: [...state.downloadImages, payload],
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
  const [state, dispatch] = useReducer(changeState, getFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("my-splash-data", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
