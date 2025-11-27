"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "@/lib/firebase";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathname = usePathname();
  const auth = getAuth(app);

  // Active link style
  const active = (path) =>
    pathname === path
      ? "text-red-600 font-semibold underline"
      : `hover:text-red-600`;

  // Listen for auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold text-red-600 flex gap-3 items-center"
        >
          <img src="/logo.png" alt="" width={40} height={40} />
          AmarRokto
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className={active("/")}>
            Home
          </Link>
          <Link href="/donors" className={active("/donors")}>
            Donors
          </Link>
          <Link href="/beadonor" className={active("/beadonor")}>
            Be a Donor
          </Link>
          <Link href="/about" className={active("/about")}>
            About
          </Link>
          <Link href="/contact" className={active("/contact")}>
            Contact
          </Link>

          {user ? (
            <div className="relative">
              {/* Avatar */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 focus:outline-none"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                    {user.email[0].toUpperCase()}
                  </span>
                )}
                <span className="font-medium">
                  {user.displayName || user.email.split("@")[0]}
                </span>
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md border border-gray-200">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-600 hover:text-white transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-x-4 flex items-center">
              <Link href="/register" className="block">
                Register
              </Link>
              <Link
                href="/login"
                className={`bg-red-600 text-white px-4 py-2 rounded-md w-fit block ${active(
                  "/login"
                )}`}
              >
                Login
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-red-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
          <Link href="/" className={`block ${active("/")}`}>
            Home
          </Link>
          <Link href="/donors" className={`block ${active("/donors")}`}>
            Donors
          </Link>
          <Link href="/beadonor" className={`block ${active("/be-a-donor")}`}>
            Be a Donor
          </Link>
          <Link href="/about" className={`block ${active("/about")}`}>
            About
          </Link>
          <Link href="/contact" className={`block ${active("/contact")}`}>
            Contact
          </Link>

          {user ? (
            <>
              <Link href="/profile" className="block">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left hover:bg-red-600 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/register" className="block font-semibold">
                Register
              </Link>
              <Link
                href="/login"
                className={`bg-red-600 text-white px-4 py-2 rounded-md w-fit block ${active(
                  "/login"
                )}`}
              >
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
