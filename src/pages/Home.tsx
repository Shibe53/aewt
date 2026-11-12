
import { HomeHeader } from "../components/HomeHeader";

const homepageImages = import.meta.glob<string>(
  "../assets/images/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const getPhoto = (filename: string): string =>
  homepageImages[`../assets/images/${filename}`] ??
  homepageImages["../assets/images/man.png"] ??
  "";

const sections = [
  {
    title: "What is Academic Esports?",
    color: "#ae1a20",
    photo: getPhoto("academic_esports.jpg"),
    alt: "",
    text: "Academic Esports integrates competitive gaming with education, research, and innovation. It uses gameful, human-centered, and design-driven learning to foster creativity, collaboration, and critical thinking. Esports is framed as a laboratory for developing transferable skills and intercultural competence."
  },
  {
    title: "What is AEWT?",
    color: "#6c0287",
    photo: getPhoto("aewt.jpg"),
    alt: "",
    text: "A first-of-its-kind global tournament where university teams compete in esports and academic challenges and, thereby, showcasing the best flex players who can think, create, and compete on a world stage."
  },
  {
    title: "Types of Activities",
    color: "#ae1a20",
    photo: getPhoto("idk.jpg"),
    alt: "",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "Explore Eindhoven",
    color: "#6c0287",
    photo: getPhoto("idk.jpg"),
    alt: "",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

export function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <HomeHeader />
      {/* Homepage content */}
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-7 px-5 py-8 sm:gap-9 sm:px-8 lg:gap-11 lg:px-12 lg:py-10">
        {sections.map((section, index) => (
          <section
            id={index === 0 ? "about-aewt" : undefined}
            className={`flex w-full flex-col gap-3 overflow-hidden md:min-h-[270px] md:gap-5 lg:min-h-[300px] ${
              index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
            }`}
          >
            {/* Photo */}
            <div className="group relative min-h-[200px] w-full shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#171717] md:min-h-[270px] md:w-1/3 lg:min-h-[300px]">
              <img
                src={section.photo}
                alt={section.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Text box */}
            <div
              className="relative flex min-h-[210px] flex-1 flex-col justify-center overflow-hidden rounded-xl p-6 text-white sm:p-8 lg:p-10 opacity-90"
              style={{ backgroundColor: section.color }}
            >
              <div className="relative z-10 max-w-2xl">
                <h2 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-s leading-6 text-white/85 sm:text-sm sm:leading-7">
                  {section.text}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
