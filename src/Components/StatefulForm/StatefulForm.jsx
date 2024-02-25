import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must be at least 6 characters or longer");
    } else {
      setError("");
    }
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=" bg-green-300 py-4 text-center">
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Type your Name"
          className="w-2/4 rounded-lg border-none px-2 py-4 outline-none"
          required
        />{" "}
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="Type your Email"
          className=" mt-3 w-2/4 rounded-lg border-none px-2 py-4 outline-none"
          required
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="Type your Password"
          className="mb-3 mt-3 w-2/4 rounded-lg border-none px-2 py-4 outline-none"
          required
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <br />
        <input
          type="submit"
          value="Submit"
          className="cursor-pointer rounded-md bg-green-400 px-6 py-3 font-semibold hover:bg-green-500"
        />
      </form>
    </div>
  );
};

export default StatefulForm;
