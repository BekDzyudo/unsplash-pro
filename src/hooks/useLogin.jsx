import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

export function useLogin() {
  const { dispatch } = useGlobalContext();
  const loginWidthEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success(`Welcome ${user.displayName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Email or Password is incorrect");
      });
  };
  return { loginWidthEmail };
}
