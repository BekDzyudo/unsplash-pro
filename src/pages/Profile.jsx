import { toast } from "react-toastify";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { sendEmailVerification } from "firebase/auth";

function Profile() {
  const { user } = useGlobalContext();
  const sendVerification = () => {
    sendEmailVerification(auth.currentUser, {
      url: "https://unsplash-pro.vercel.app/profile",
    }).then(() => {
      toast.success("Verification email is sended !");
    });
  };

  return (
    <div className="align-elements my-10 flex md:flex-row flex-col items-center gap-10">
      <div>
        <img
          className="w-40 h-40 rounded-full"
          src={user.photoURL}
          alt={user.displayName + " avatar"}
        />
      </div>
      <div className="bg-base-200 w-full md:w-0 grow rounded-lg p-4 grid gap-4 md:grid-cols-2">
        <h2>
          <span className="font-medium block">Display Name:</span>
          <span>{user.displayName}</span>
        </h2>

        <h2>
          <span className="font-medium block">Status User:</span>
          <span>
            {user.emailVerified ? (
              "Verified ✔"
            ) : (
              <h2 className="flex gap-2">
                <span>Not Verified</span>
                <button
                  onClick={sendVerification}
                  className="btn btn-xs btn-primary"
                >
                  Send
                </button>
              </h2>
            )}
          </span>
        </h2>
        <h2>
          <span className="font-medium block">Email:</span>
          <span>{user.email}</span>
        </h2>
      </div>
    </div>
  );
}

export default Profile;
