
import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

function getHeaderDimensions() {
  if (window.innerWidth < 640) {
    return { expanded: 440, compact: 330 };
  }

  if (window.innerWidth < 1024) {
    return { expanded: 500, compact: 370 };
  }

  return { expanded: 600, compact: 420 };
}

export function HomeHeader() {
  const [headerHeight, setHeaderHeight] = useState(
    () => getHeaderDimensions().expanded
  );

  const [contentScale, setContentScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const { expanded, compact } = getHeaderDimensions();
      const progress = Math.min(window.scrollY / 550, 1);
      const newHeight =
        expanded - (expanded - compact) * progress;
      const newScale = 1 - progress * 0.12;

      setHeaderHeight(Math.round(newHeight));
      setContentScale(newScale);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      id="home-header"
      className="relative isolate w-full overflow-hidden bg-white opacity-98"
      style={{
        height: `${headerHeight}px`,
        transition: "height 120ms ease-out",
      }}
    >
      {/* Purple rectangle */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute -left-[18%] -top-[12%] z-0 h-[66%] w-[66%] bg-[#6c0287]
    [clip-path:polygon(0_0,100%_0,58%_88%,0_75%)]
    sm:-left-[12%] sm:-top-[20%] sm:h-[75%] sm:w-[65%]
    sm:[clip-path:polygon(0_0,100%_0,65%_100%,0_45%)]"
/>
      {/* Red rectangle */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute -right-[18%] -top-[12%] z-0 h-[66%] w-[66%] bg-[#ae1a20]
    [clip-path:polygon(0_0,100%_0,100%_75%,42%_88%)]
    sm:-right-[12%] sm:-top-[20%] sm:h-[75%] sm:w-[65%]
    sm:[clip-path:polygon(0_0,100%_0,100%_45%,35%_100%)]"
/>
      <div
        className="relative z-20 mx-auto flex h-full w-full flex-col items-center justify-center px-4 text-center"
        style={{
          transform: `scale(${contentScale})`,
          transition: "transform 70ms linear",
          transformOrigin: "center center",
        }}
      >
        {/* Logo */}
        <img 
          src={logo} 
          alt="AEWT Logo" 
          className="relative z-10 h-30 w-30 shrink-0 rounded-full border-[6px] border-[#ae1a20] object-cover sm:h-35 sm:w-35 lg:h-45 lg:w-45 transition-all duration-500 ease-out hover:scale-110 hover:shadow-[0_0_100px_rgba(250,204,21,0.95)]"
        />
        {/* Title */}
        <h1 className="title-appear mt-8 w-full text-center text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight text-[#6c0287]">
          Academic Esports
          <span className="mt-2 block text-[#ae1a20]">
            World Tournament
          </span>
        </h1>
      </div>
      {/* Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-b from-transparent via-black/40 to-black sm:h-30 lg:h-32"
      />
    </header>
  );
}
