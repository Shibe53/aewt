
import { useEffect, useState } from "react";

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
      className="relative isolate w-full overflow-hidden bg-white"
      style={{
        height: `${headerHeight}px`,
        transition: "height 120ms ease-out",
      }}
    >

      {/* Purple rectangle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[12%] -top-[20%] z-0 bg-[#6c0287]"
        style={{
          width: "65%",
          height: "75%",
          clipPath: "polygon(0 0, 100% 0, 65% 100%, 0 45%)",
        }}
      />

      {/* Red rectangle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[12%] -top-[20%] z-0 bg-[#ae1a20]"
        style={{
          width: "65%",
          height: "75%",
          clipPath: "polygon(0 0, 100% 0, 100% 45%, 35% 100%)",
        }}
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
        <div className="relative z-10 h-20 w-20 shrink-0 rounded-full border-[6px] border-[#ae1a20] bg-[#facc15] sm:h-24 sm:w-24 lg:h-32 lg:w-32 transition-all duration-500 ease-out hover:scale-110 hover:rotate-6 hover:shadow-[0_0_20px_rgba(174,26,32,0.35)]" />  
        {/* Title */}
        <h1 className="title-appear mt-8 w-full text-center text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-tight text-[#171717]">
          AEWT 2027
          <span className="mt-2 block text-[#ae1a20]">
            Eindhoven
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
