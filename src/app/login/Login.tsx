"use client";
import React, { useEffect, useState } from "react";
import { Messages } from "../Util/CommonMessages";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./loginSlice";
import { useRouter } from "next/navigation";
import { RootState } from "../store/Store";
import { ROUTES } from "../Util/CommonConstants";

const Login = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useRouter();
  const isloggedIn = useSelector((state: RootState) => state.auth.isloggedIn);

  useEffect(() => {
    if (isloggedIn) {
      navigate.push(ROUTES.home.route);
    }
  });
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const loginObj = Object.fromEntries(formData);

    const email = loginObj.email.toString();

    const password = loginObj.password.toString();

    if (email === "" || password === "") {
      setError("Please enter email and password");
      return;
    }
    if (email && password) {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const result = await response.json();
      dispatch(login(result));
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=cyan&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-400">
            {Messages.SignIn.cardTitle.value}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-600"
              >
                {Messages.SignIn.emailLabel.value}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-600"
                >
                  {Messages.SignIn.passwordLabel.value}
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                {Messages.SignIn.loginBtn.value}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            {Messages.SignIn.signupText.value}{" "}
            <a
              href="#"
              className="font-semibold text-cyan-600 hover:text-cyan-500"
            >
              {Messages.SignIn.signupLink.value}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
