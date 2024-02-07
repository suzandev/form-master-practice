const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-green-300 py-4 text-center">
      <input
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
        type="submit"
        value="Submit"
        className="cursor-pointer rounded-md bg-green-400 px-6 py-3 font-semibold hover:bg-green-500"
      />
    </form>
  );
};

export default SimpleForm;
