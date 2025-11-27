"use client";

import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // reset error

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      console.log("Logged In:", user.user.email);
      router.push("/");
    } catch (err) {
      console.log("Error:", err.code);

      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    setError("");

    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Login:", result.user.email);
      router.push("/");
    } catch (err) {
      console.log("Google Error:", err.code);
      setError("Google login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* LEFT FORM */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-red-700 mb-6">
              Welcome Back
            </h2>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* EMAIL */}
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="input input-bordered w-full"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block mb-1 font-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input input-bordered w-full"
                />
              </div>

              {/* SHOW ERROR MESSAGE */}
              {error && (
                <p className="text-red-600 font-semibold text-center">
                  {error}
                </p>
              )}

              <button className="btn bg-red-600 hover:bg-red-700 text-white w-full mt-2">
                Login
              </button>
            </form>

            {/* GOOGLE LOGIN */}
            <div className="mt-5">
              <button
                onClick={handleGoogleLogin}
                className="btn w-full border shadow-sm bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>

            <p className="text-center mt-4 text-gray-600">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-red-600 font-semibold hover:underline"
              >
                Register
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
          <img
            src="/chair-bg.png"
            alt="Login illustration"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
