import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-green-300 py-4 text-center">
      <input
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Type your Name"
        className="w-2/4 rounded-lg border-none px-2 py-4 outline-none"
        required
      />{" "}
      <br />
      <input
        ref={emailRef}
        type="email"
        name="email"
        placeholder="Type your Email"
        className=" mt-3 w-2/4 rounded-lg border-none px-2 py-4 outline-none"
        required
      />
      <br />
      <input
        ref={passwordRef}
        type="password"
        name="password"
        placeholder="Type your Password"
        className="mb-3 mt-3 w-2/4 rounded-lg border-none px-2 py-4 outline-none"
        required
      />
      {/* {error && <p className="text-sm text-red-500">{error}</p>} */}
      <br />
      <input
        type="submit"
        value="Submit"
        className="cursor-pointer rounded-md bg-green-400 px-6 py-3 font-semibold hover:bg-green-500"
      />
    </form>
  );
};

export default RefForm;
