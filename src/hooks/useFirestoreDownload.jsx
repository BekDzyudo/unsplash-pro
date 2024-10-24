import { doc, setDoc, deleteDoc, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase/firebaseConfig";
export const useFirestoreDownload = () => {
  const addDocumentDLoad = (collectionName, data) => {
    addDoc(collection(db, collectionName), data)
      .then(() => {
        toast.success("You download this image 📩");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const removeDocumentDLoad = (collectionName, id) => {
    deleteDoc(doc(db, collectionName, id))
      .then(() => {
        toast.success("You deleted this image 🗑");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return { addDocumentDLoad, removeDocumentDLoad };
};
