
import { useState } from "react";

const editionImages = import.meta.glob<string>(
  "../assets/images/editions/**/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const getPhoto = (filename: string): string | undefined =>
  editionImages[`../assets/images/editions/${filename}`];

type EditionPhoto = {
  file: string;
  alt: string;
};

type Edition = {
  title: string;
  color: string;
  description: string;
  photos: EditionPhoto[];
};

const editions: Edition[] = [
  {
    title: "AEWT 2026 - Sydney",
    color: "#ae1a20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photos: [
      {
        file: "",
        alt: "",
      },
      {
        file: "",
        alt: "",
      },
      {
        file: "",
        alt: "",
      },
    ],
  },
  {
    title: "AEWT 2024 - Maui",
    color: "#6c0287",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photos: [
      {
        file: "",
        alt: "",
      },
      {
        file: "",
        alt: "",
      },
      {
        file: "",
        alt: "",
      },
    ],
  },
];

// individual photo gallery for each edition
function EditionGallery({
  photos
}: {
  photos: EditionPhoto[];
  color: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const changePhoto = (direction: number) => {
    setActiveIndex((current) =>
      (current + direction + photos.length) % photos.length
    );
  };

  const currentPhoto = photos[activeIndex];
  const image = currentPhoto ? getPhoto(currentPhoto.file) : undefined;

  return (
    <div className="relative h-[240px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#151515] sm:h-[320px] lg:h-[360px]">
      {/* Current photo */}
      {image ? (
        <img
          key={image}
          src={image}
          alt={currentPhoto.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
          Photo placeholder
        </div>
      )}
      {/* Previous */}
      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => changePhoto(-1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-[#ae1a20]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 18-6-6 6-6"
              />
            </svg>
          </button>
          {/* Next */}
          <button
            type="button"
            onClick={() => changePhoto(1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-[#6c0287]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 18 6-6-6-6"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export function Editions() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Heading */}
      <div className="w-full px-5 pb-8 pt-6 sm:px-8 lg:px-16 lg:pt-8 xl:px-20">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Editions
        </h1>
        <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
          Take a look back at previous editions of AEWT. Discover the experiences that have shaped the event over the years.
        </p>
      </div>
      {/* Editions */}
      <div className="flex w-full flex-col px-5 pb-16 sm:px-8 lg:px-16 xl:px-20">
        {editions.map((edition, index) => (
          <section
            key={edition.title + index}
            className="border-t border-white/15 py-8 sm:py-10 lg:py-12"
          >
            <div
              className={`grid grid-cols-1 gap-6 lg:items-center lg:gap-10 ${
                index % 2 === 0
                  ? "lg:grid-cols-[0.85fr_1.15fr]"
                  : "lg:grid-cols-[1.15fr_0.85fr]"
              }`}
            >
              {/* Edition info */}
              <div
                className={`flex flex-col ${
                  index % 2 === 0
                    ? "lg:order-1"
                    : "lg:order-2"
                }`}
              >
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {edition.title}
                </h2>
                <p className="mt-5 max-w-2xl text-xs leading-7 text-gray-400 sm:text-sm">
                  {edition.description}
                </p>
              </div>
              {/* Photos */}
              <div
                className={
                  index % 2 === 0
                    ? "lg:order-2"
                    : "lg:order-1"
                }
              >
                <EditionGallery
                  photos={edition.photos}
                  color={edition.color}
                />
              </div>
            </div>
          </section>
        ))}
        <div className="border-t border-white/15" />
      </div>
    </main>
  );
}
