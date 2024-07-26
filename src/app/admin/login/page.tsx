"use client";

import login from "@/app/api/auth/login";
import { useFormState } from "react-dom";

export default function Login() {
  const [error, dispatch] = useFormState(login, undefined);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-2/3 h-2/3 flex flex-col items-center justify-between">
        <h1>Login as an administrator</h1>

        <form
          action={dispatch}
          className="flex flex-col items-center justify-center w-full h-1/2"
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="border-[0.1rem] border-gray-300 rounded-3xl w-1/2 h-10 px-3 focus:right-1 focus:ring-blue-400 my-5"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="border-[0.1rem] border-gray-300 rounded-3xl w-1/2 h-10 px-3 focus:right-1 focus:ring-blue-400 my-5"
          />

          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white w-1/2 h-10 rounded-3xl my-5"
          >
            Login
          </button>
        </form>

        <div></div>
      </div>
    </div>
  );
}
