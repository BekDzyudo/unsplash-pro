import { Form } from "react-router-dom";
import { FormInput } from "./";
function Search() {
  return (
    <Form method="post" className="max-w-96 mx-auto w-full flex gap-2">
      <FormInput type="search" placeholder="Search" name="search" />
      <button className="btn btn-primary btn-sm md:hidden">Search</button>
    </Form>
  );
}

export default Search;
