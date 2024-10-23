// rrd
import { Form, Link, useActionData } from "react-router-dom";
// components
import { FormInput } from "../components";
// react icons
import { FcGoogle } from "react-icons/fc";
// register hook
import { useRegister } from "../hooks/useRegister.jsx";
import { useEffect } from "react";
import { useLogin } from "../hooks/useLogin.jsx";

// action
export const action = async ({ request }) => {
  const data = await request.formData();
  const Email = data.get("email");
  const Password = data.get("password");
  return {
    Email,
    Password,
  };
};

function Login() {
  const inputData = useActionData();
  const { registerWithGoogle } = useRegister();
  const { loginWidthEmail } = useLogin();

  useEffect(() => {
    if (inputData) {
      loginWidthEmail(inputData.Email, inputData.Password);
    }
  }, [inputData]);

  return (
    <div className="flex min-h-screen">
      <div className="md:w-[40%] md:bg-[url('https://picsum.photos/900/1000')] bg-center bg-cover"></div>
      <div className="bg-black bg-opacity-30 fixed top-0 left-0 right-0 bottom-0 md:hidden"></div>
      <div className="md:w-[60%] w-full flex justify-center items-center px-5 md:px-0 bg-[url('https://picsum.photos/900/1000')] md:bg-none">
        <Form method="post" className="max-w-96 w-full relative z-50">
          <h1 className="text-center md:text-black text-white mb-5 md:text-4xl text-2xl font-medium">
            Login
          </h1>
          <div className="flex-col flex md:gap-5 gap-3">
            <FormInput type="email" placeholder="Email" name="email" />
            <FormInput type="password" placeholder="Password" name="password" />
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
              <span className="md:text-lg text-sm">Login</span>
            </button>
          </div>
          <div className="flex justify-between">
            <p className="link md:text-black text-white">Reset password</p>
            <Link to="/register" className="link md:text-black text-white">
              Are you not registered?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
