import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
  const [name, handleNameChange] = useInputState("Rojoni");
  const handleSubmit = (e) => {
    console.log("Form Data", name);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-green-300 py-4 text-center">
      <input
        value={name}
        onChange={handleNameChange}
        type="text"
        name="name"
        placeholder="Type your Name"
        className="w-2/4 rounded-lg border-none px-2 py-4 outline-none"
        required
      />{" "}
      <br />
      <input
        type="email"
        name="email"
        placeholder="Type your Email"
        className="mb-3 mt-3 w-2/4 rounded-lg border-none px-2 py-4 outline-none"
        required
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Type your password"
        className="mb-3 mt-3 w-2/4 rounded-lg border-none px-2 py-4 outline-none"
        required
      />
      <br />
      <input
        type="submit"
        value="Submit"
        className="cursor-pointer rounded-md bg-green-400 px-6 py-3 font-semibold hover:bg-green-500"
      />
    </form>
  );
};

export default HookForm;
