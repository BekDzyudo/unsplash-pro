import { Form, useActionData } from "react-router-dom";
import FormInput from "./FormInput";
import { useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

function Modal() {
  const data = useActionData();

  useEffect(() => {
    if (data?.email_for_reset) {
      sendPasswordResetEmail(auth, data.email_for_reset)
        .then(() => {
          toast.success("Verification sended");
          document.getElementById("my_modal_1").close();
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  }, [data]);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Reset password</h3>
        <Form method="post">
          <FormInput type="email" placeholder="Email" name="email_for_reset" />

          <div className="modal-action">
            <button
              onClick={() => document.getElementById("my_modal_1").close()}
              type="button"
              className="btn btn-secondary"
            >
              Close
            </button>
            <button className="btn btn-primary">Send</button>
          </div>
        </Form>
      </div>
    </dialog>
  );
}

export default Modal;
