import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-[#101014] text-white">
      {/* Top accent */}
      <div className="h-[2px] bg-gradient-to-r from-[#ae1a20] to-[#6c0287]" />
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-5 px-5 py-6 sm:flex-row sm:px-8 lg:px-16">
        <Link
          to="/"
          className="flex w-fit items-center gap-2.5"
        >
          {/* Logo */}
          <img
              src={logo}
              alt="AEWT Logo"
              className="h-10 w-10 shrink-0 rounded-full border-[3px] border-[#ae1a20] object-cover"
            />
          <div className="flex flex-col">
            <span className="whitespace-nowrap text-base font-black uppercase leading-none tracking-[0.08em] text-white">
              AEWT 2027
            </span>
            <span className="mt-1 whitespace-nowrap text-[8px] font-bold uppercase leading-none tracking-[0.2em] text-[#ae1a20]">
              Eindhoven
            </span>
          </div>
        </Link>
        {/* Copyright?? */}
        <div className="text-center sm:text-right">
          <p className="text-[11px] text-gray-500">
            © 2027 AEWT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
