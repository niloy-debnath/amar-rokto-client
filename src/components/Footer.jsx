import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center max-w-7xl mx-auto footer-center bg-[#0B0B0B] sm:w-[90%] text-primary-content p-10 rounded-xl">
      <aside className="flex flex-col items-center pb-10">
        <Link
          href="/"
          className="text-2xl font-bold text-white flex gap-3 items-center pb-2"
        >
          <img src="/logo.png" alt="" width={40} height={40} />
          AmarRokto
        </Link>
        <p className="text-gray-400 text-center">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br />
          business shipments — we deliver on time, every time.
        </p>
      </aside>

      <nav>
        <div className="mb-10">
          <ul className="flex gap-5 text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/donors">Donors</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/beadonor">Donate</Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-between">
          <a href="#">
            <img src="/linkedinlogo.png" alt="LinkedIn" className="w-6" />
          </a>
          <a href="#">
            <img src="/ytlogo.png" alt="YouTube" className="w-6" />
          </a>
          <a href="#">
            <img src="/xlogo.png" alt="X" className="w-6" />
          </a>
          <a href="#">
            <img src="/fblogo.png" alt="Facebook" className="w-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
