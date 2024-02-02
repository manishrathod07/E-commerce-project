import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../assets/img/logo.png";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        mobile,
        password,
      });

      if (response.data === "exist") {
        setMessage("User already exists");
      } else if (response.data === "notexist") {
        // Use the navigate function directly
        navigate("/", { state: { id: email } });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login flex flex-col gap-3 items-center pt-1 w-4/12 h-auto shadow-md shadow-gray-600 mt-20 mx-auto rounded-lg">
      <img src={logo} alt="" className="h-16" />
      <h1 className="text-xl font-bold text-[#00df9a]">Signup</h1>

      <form
        action="POST"
        className="w-3/4 flex flex-col gap-3 h-56 justify-center items-center"
      >
        <input type="name" onChange={(e) => { setName(e.target.value) }} placeholder="Name" className="border-2 border-gray-400 rounded-lg w-3/4 p-2 text-sm outline-none focus:placeholder:translate-x-1/2 focus:placeholder:text-[8px]  focus:placeholder:duration-1000 focus:placeholder:text-[#00df9a] focus:placeholder:opacity-50 focus:placeholder:font-semibold" />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" className="border-2 border-gray-400 rounded-lg w-3/4 p-2 text-sm outline-none focus:placeholder:translate-x-1/2 focus:placeholder:text-[8px]  focus:placeholder:duration-1000 focus:placeholder:text-[#00df9a] focus:placeholder:opacity-50 focus:placeholder:font-semibold" />
                <input type="text" onChange={(e) => { setMobile(e.target.value) }} placeholder="Mobile" className="border-2 border-gray-400 rounded-lg w-3/4 p-2 text-sm outline-none focus:placeholder:translate-x-1/2 focus:placeholder:text-[8px]  focus:placeholder:duration-1000 focus:placeholder:text-[#00df9a] focus:placeholder:opacity-50 focus:placeholder:font-semibold" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" className="border-2 border-gray-400 rounded-lg w-3/4 p-2 text-sm outline-none focus:placeholder:translate-x-1/2 focus:placeholder:text-[8px]  focus:placeholder:duration-1000 focus:placeholder:text-[#00df9a] focus:placeholder:opacity-50 focus:placeholder:font-semibold" />
        <input
          type="submit"
          value="Signup"
          onClick={submit}
          className="bg-[#00df9a] rounded-xl py-1 text-[14px] w-2/5 text-center hover:scale-105 duration-500 text-white"
        />
      </form>

      {message && <p className="text-red-500">{message}</p>}

      <p className="text-sm">Already have an Account?</p>
      <Link to="/login" className="flex text-sm">
        Login<ArrowForwardIcon />
      </Link>
    </div>
  );
};

export default Signup;
