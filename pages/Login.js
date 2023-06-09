import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import googleImage from "../public/googleImage.png";
import githubImage from "../public/githubImage.png";
import Image from "next/image";
``;
import { useEffect, useState } from "react";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email);
    console.log("Password:", password);
  };
  useEffect(() => {
    // Redirect to login page if there is no session
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <main class="bg-gray-100 h-screen w-full font-sans1">
      <div class="flex">
        <div class="bg-black  w-60 hidden md:flex  items-center justify-center">
          <h1 class="font-sans font-bold text-4xl leading-12 text-white">
            Board.
          </h1>
        </div>
        <div class=" h-screen w-full flex items-center justify-center ">
          <div class="m-5">
            <span class="font-sans1 text-black text-3xl font-bold leading-11 tracking-normal text-left">
              Sign In
            </span>
            <span class="font-sans text-base font-normal leading-5 tracking-normal text-left text-black block">
              Sign in to your account
            </span>
            <div class="flex flex-col items-center mt-4 md:flex-row md:justify-center">
              <button class="flex-1 md:w-auto m-2" onClick={() => signIn()}>
                <Image
                  src={googleImage}
                  alt="Picture of Google"
                  class="rounded-lg"
                />
              </button>
              <button class="mt-4 md:mt-0 m-2">
                <Image
                  src={githubImage}
                  alt="Picture of GitHub"
                  class="rounded-lg"
                />
              </button>
            </div>

            <div class="mt-4 bg-white p-4 rounded-xl">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">
                    <span class="font-sans text-black font-normal leading-5 tracking-normal text-left block">
                      {" "}
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    class=" font-sans bg-slate-100 mt-3 mb-3 w-full p-1 pl-4 rounded-lg "
                  />
                </div>

                <div>
                  <label htmlFor="password">
                    <span class="font-sans text-black font-normal leading-5 tracking-normal text-left block">
                      {" "}
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    class="bg-slate-100 mt-3 mb-3 w-full p-1 pl-4  rounded-lg font-sans "
                  />
                </div>
                <span class="text-blue-700 font-sans block mt-3 mb-3">
                  Forgot Password?
                </span>
                <button
                  type="submit"
                  class="font-sans1 text-white font-bold leading-5 tracking-normal text-center p-2  rounded-lg w-full bg-black"
                >
                  sign in
                </button>
              </form>
            </div>
            <div class="font-sans text-black font-normal leading-5 tracking-normal text-center m-5">
              <p>
                Don’t have an account?{" "}
                <span class="text-blue-700">Register here</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
