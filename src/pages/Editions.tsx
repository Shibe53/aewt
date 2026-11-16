const editionImages = import.meta.glob<string>(
  "../assets/images/editions/*.{png,jpg,JPG,jpeg,webp,avif}",
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
  photo: EditionPhoto;
};

const editions: Edition[] = [
  {
    title: "AEWT 2026 - Sydney",
    color: "#ae1a20",
    description:
      "UNSW Sydney hosted the 2026 AEWT, bringing together students from eight leading universities across Europe, Asia, North America and Australia.\n More than 75 competitors took part in its week-long program, showcasing how competitive gaming develops real-world skills such as teamwork, strategy, innovation and problem-solving.\n After an intense week of competition on the Kensington campus, UNSW ADA's team emerged victorious.",
    photo: {
      file: "2026.JPG",
      alt: "Photo of AEWT 2026 winners.",
    },
  },
  {
    title: "AEWT 2024 - Maui",
    color: "#6c0287",
    description:
      "The world came to University of Hawai'i Maui College in December 2024 for the first-ever international academic Esports competition - the first edition of the AEWT. It brought together eight universities from across four countries.\n \"This tournament breaks new ground in how we think about esports in education. We're creating something that has never been done before at this international scale. It is also an excellent opportunity for cultural exchange and networking on a global scale,\" said Rune Andersen, the programme coordinator for academic esports at UiA.",
    photo: {
      file: "2024.jpg",
      alt: "Photo of AEWT 2024 participants.",
    },
  },
];

function EditionGallery({
  photo,
}: {
  photo: EditionPhoto;
}) {
  const image = photo.file ? getPhoto(photo.file) : undefined;

  return (
    <div className="relative h-[240px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#151515] sm:h-[320px] lg:h-[360px]">
      {/* Current photo */}
      {image ? (
        <img
          src={image}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
          Photo placeholder
        </div>
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
          Take a look back at previous editions of AEWT! Every year, the event is held at a different international university.
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
              {/* Photo */}
              <div
                className={
                  index % 2 === 0
                    ? "lg:order-2"
                    : "lg:order-1"
                }
              >
                <EditionGallery photo={edition.photo} />
              </div>
            </div>
          </section>
        ))}
        <div className="border-t border-white/15" />
      </div>
    </main>
  );
}
