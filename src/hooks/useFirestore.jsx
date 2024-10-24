import { doc, setDoc, deleteDoc, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase/firebaseConfig";
export const useFirestore = () => {
  const addDocument = (collectionName, data) => {
    addDoc(collection(db, collectionName), data)
      .then(() => {
        toast.success("You liked this image ❤");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const removeDocument = (collectionName, id) => {
    deleteDoc(doc(db, collectionName, id))
      .then(() => {
        toast.success("You deleted this image 🗑");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return { addDocument, removeDocument };
};
