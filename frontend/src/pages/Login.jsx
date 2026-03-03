import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { backendUrl, token, setToken } = useContext(ShopContext);

  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // ✅ added

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (loading) return; // ✅ prevent double submit
    setLoading(true);

    try {
      let response;

      // ⭐ SIGN UP
      if (currentState === "Sign Up") {
        response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });
      }

      // ⭐ LOGIN
      else {
        response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
      }

      // ⭐ COMMON RESPONSE HANDLING
      if (response.data.success) {
        // ✅ SIGNUP FLOW → go to login page
        if (currentState === "Sign Up") {
          toast.success(response.data.message);

          setName("");
          setEmail("");
          setPassword("");

          setCurrentState("Login");
          return;
        }

        // ✅ LOGIN FLOW → save token + go home
        else {
          localStorage.setItem("token", response.data.token);
          setToken(response.data.token);

          toast.success("Login successful 🎉");

          setEmail("");
          setPassword("");

          navigate("/");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false); // ✅ reset loading
    }
  };

  // auto redirect if already logged in
  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" && (
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          type="text"
          placeholder="Name"
          required
        />
      )}

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        type="email"
        placeholder="Email"
        required
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        type="password"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>

        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading} // ✅ disable during loading
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        {loading
          ? "Processing..."
          : currentState === "Login"
            ? "Sign in"
            : "Sign up"}
      </button>
    </form>
  );
};

export default Login;
