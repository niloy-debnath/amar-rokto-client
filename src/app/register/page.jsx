"use client";

import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/lib/firebase";
import Link from "next/link";

export default function Register() {
  const auth = getAuth(app);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMsg({ type: "", text: "" });
  };

  const validate = () => {
    if (!form.email) {
      setMsg({ type: "error", text: "Email is required." });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setMsg({ type: "error", text: "Enter a valid email." });
      return false;
    }
    if (!form.password || form.password.length < 6) {
      setMsg({
        type: "error",
        text: "Password must be at least 6 characters.",
      });
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMsg({ type: "", text: "" });

    if (!validate()) return;

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // success
      console.log("Firebase user created:", userCredential.user);
      setMsg({
        type: "success",
        text: `Registered: ${userCredential.user.email}`,
      });

      // optional: reset form (keep name maybe)
      setForm({ name: "", email: "", password: "" });

      // NOTE: check Firebase Console -> Authentication -> Users to confirm.
    } catch (error) {
      console.error("createUserWithEmailAndPassword error:", error);
      // Friendly error messages for common Firebase errors:
      let friendly = "Registration failed. Try again.";
      if (error.code === "auth/email-already-in-use") {
        friendly = "This email is already in use.";
      } else if (error.code === "auth/invalid-email") {
        friendly = "Invalid email address.";
      } else if (error.code === "auth/weak-password") {
        friendly = "Password is too weak (min 6 chars).";
      } else if (error.code === "auth/operation-not-allowed") {
        friendly = "Email/password auth not enabled in Firebase console.";
      }
      setMsg({ type: "error", text: friendly + ` (${error.message})` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* LEFT FORM (50%) */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-red-700 mb-6">
              Create an Account
            </h2>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* FULL NAME */}
              <div>
                <label className="block mb-1 font-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input input-bordered w-full"
                />
              </div>

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

              {/* status message */}
              {msg.text && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    msg.type === "error"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {msg.text}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="btn bg-red-600 hover:bg-red-700 text-white w-full mt-2"
              >
                {loading ? "Creating account..." : "Register"}
              </button>
            </form>

            <p className="text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-red-600 font-semibold hover:underline">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE (50%) */}
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
          <img
            src="/chair-bg.png"
            alt="Register image"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
