"use client";

import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "@/firebase/firebase.init";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading]);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return children;
}
