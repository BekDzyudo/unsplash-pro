// rrd
import { Form, Link, useActionData } from "react-router-dom";
// components
import { FormInput } from "../components";
// react icons
import { FcGoogle } from "react-icons/fc";
// register hook
import { useRegister } from "../hooks/useRegister";
import { toast } from "react-toastify";
import { useEffect } from "react";
// action
export const action = async ({ request }) => {
  const data = await request.formData();
  const fullName = data.get("fullName");
  const Email = data.get("email");
  const Password = data.get("password");
  const confirm_password = data.get("confirmPassword");

  if (Password == confirm_password) {
    return {
      fullName,
      Email,
      Password,
    };
  } else {
    toast.warn("password is not equal!");
    return null;
  }
};

function Register() {
  const inputData = useActionData();
  const { registerWithGoogle, registerWithEmail } = useRegister();
  useEffect(() => {
    if (inputData) {
      registerWithEmail(
        inputData.fullName,
        inputData.Email,
        inputData.Password
      );
    }
  }, [inputData]);

  return (
    <div className="flex min-h-screen">
      <div className="md:w-[40%] md:bg-[url('https://picsum.photos/900/1000')] bg-center bg-cover"></div>
      <div className="bg-black bg-opacity-30 fixed top-0 left-0 right-0 bottom-0 md:hidden"></div>
      <div className="md:w-[60%] w-full flex justify-center items-center px-5 md:px-0 bg-[url('https://picsum.photos/900/1000')] md:bg-none">
        <Form method="post" className="max-w-96 w-full relative z-50">
          <h1 className="text-center md:text-black text-white mb-5 md:text-4xl text-2xl font-medium">
            Register
          </h1>
          <div className="flex-col flex md:gap-5 gap-3">
            <FormInput type="text" placeholder="Full Name" name="fullName" />
            <FormInput type="email" placeholder="Email" name="email" />
            <FormInput type="password" placeholder="Password" name="password" />
            <FormInput
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
            />
          </div>
          <div className="my-5 flex justify-between gap-5">
            <button
              onClick={registerWithGoogle}
              type="button"
              className="btn md:btn-md btn-sm btn-secondary grow"
            >
              <span className="md:text-lg text-sm">Google</span>{" "}
              <FcGoogle className="h-6 w-6" />
            </button>
            <button
              type="submit"
              className="btn md:btn-md btn-sm btn-primary grow"
            >
              <span className="md:text-lg text-sm">Register</span>
            </button>
          </div>
          <Link to="/login" className="link md:text-black text-white">
            Are you already registered?
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
