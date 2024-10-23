// react icons
import { FaSearch, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function FormInput({ type, placeholder, name }) {
  return (
    <label className="input input-bordered flex items-center gap-2 w-full input-sm md:input-md">
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        name={name}
      />
      {placeholder == "Search" && <FaSearch className="h-4 w-4 opacity-70" />}
      {placeholder == "Full Name" && <FaUser className="h-4 w-4 opacity-70" />}
      {placeholder == "Email" && <MdEmail className="h-4 w-4 opacity-70" />}
      {placeholder == "Password" && (
        <RiLockPasswordFill className="h-4 w-4 opacity-70" />
      )}
      {placeholder == "Confirm password" && (
        <RiLockPasswordFill className="h-4 w-4 opacity-70" />
      )}
    </label>
  );
}

export default FormInput;
