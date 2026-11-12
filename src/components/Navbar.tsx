
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

type NavItem = {
  name: string;
  path: string;
};

const links: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Editions", path: "/editions" },
  { name: "Activities", path: "/activities" },
  { name: "Info", path: "/info" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const renderLink = (
    link: NavItem,
    mobile: boolean = false
  ) => {
    return (
      <NavLink
        key={link.name}
        to={link.path}
        end={link.path === "/"}
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) => {
          const active =
            isActive && link.path !== "/construction";

          if (mobile) {
            return `block rounded-md px-4 py-3 text-sm font-semibold transition-colors ${
              active
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`;
          }

          return `relative px-3 py-3 text-sm font-semibold tracking-wide transition-colors duration-200
            after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[2px]
            after:origin-left after:transition-transform after:duration-300
            ${
              active
                ? "text-white after:scale-x-100 after:bg-[#ae1a20]"
                : "text-gray-400 after:scale-x-0 after:bg-[#6c0287] hover:text-white hover:after:scale-x-100"
            }`;
        }}
      >
        {link.name}
      </NavLink>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top accent */}
      <div className="h-[3px] bg-gradient-to-r from-[#ae1a20] to-[#6c0287]" />
      <nav className="border-b border-white/10 bg-[#101014]/95 text-white shadow-lg backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            {/* Logo */}
            <div className="h-10 w-10 shrink-0 rounded-full border-[3px] border-[#ae1a20] bg-[#facc15]" />
            <div className="flex flex-col">
              <span className="whitespace-nowrap text-l font-black uppercase leading-none tracking-[0.08em] text-white">
                AEWT 2027
              </span>
              <span className="mt-0.5 whitespace-nowrap text-[9px] font-bold uppercase leading-none tracking-[0.25em] text-[#ae1a20]">
                Eindhoven
              </span>
            </div>

          </Link>
          {/* Desktop navigation  */}
          <div className="hidden items-center gap-3 lg:flex">
            {links.map((link) => renderLink(link))}
          </div>
          {/* Mobile navigation */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-white/15 text-gray-300 transition-colors hover:border-[#6c0287] hover:text-white lg:hidden"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          id="mobile-navigation"
          className={`border-t border-white/10 bg-[#101014] px-5 py-4 lg:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="mx-auto flex max-w-[1600px] flex-col gap-2">
            {links.map((link) => renderLink(link, true))}
          </div>
        </div>
      </nav>
    </header>
  );
}
