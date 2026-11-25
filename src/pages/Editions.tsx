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

const sections = [
  {
    title: "AEWT 2026 - Sydney",
    photo: getPhoto("2026.JPG"),
    alt: "Photo of AEWT 2026 winners.",
    photoCredit: "Thomas Zeng",
    description:
      "UNSW Sydney hosted the 2026 AEWT, bringing together students from eight leading universities across Europe, Asia, North America and Australia.\nMore than 75 competitors took part in its week-long program, showcasing how competitive gaming develops real-world skills such as teamwork, strategy, innovation and problem-solving.\nAfter an intense week of competition on the Kensington campus, UNSW ADA's team emerged victorious.",
  },
  {
    title: "AEWT 2024 - Maui",
    photo: getPhoto("2024.jpg"),
    alt: "Photo of AEWT 2024 participants.",
    photoCredit: "Vanalouise Neahu",
    description:
      "The world came to University of Hawai'i Maui College in December 2024 for the first-ever international academic Esports competition - the first edition of the AEWT. It brought together eight universities from across four countries.\n\"This tournament breaks new ground in how we think about esports in education. We're creating something that has never been done before at this international scale. It is also an excellent opportunity for cultural exchange and networking on a global scale,\" said Rune Andersen, the programme coordinator for academic esports at UiA.",
  },
];

export function Editions() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Heading */}
      <div className="w-full px-5 pb-8 pt-6 sm:px-8 lg:px-16 lg:pt-8 xl:px-20">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Editions
        </h1>
        <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
          Take a look back at previous editions of AEWT! Every year,
          the event is held at a different international university.
        </p>
      </div>
      {/* Edition sections */}
      <div className="flex w-full flex-col px-5 pb-16 sm:px-8 lg:px-16 xl:px-20">
        {sections.map((section, index) => (
          <section
            key={section.title}
            className="border-t border-white/15 py-8 sm:py-10 lg:py-12"
          >
            <div
              className={`grid grid-cols-1 gap-6 lg:items-center lg:gap-10 ${
                index % 2 === 0
                  ? "lg:grid-cols-[0.85fr_1.15fr]"
                  : "lg:grid-cols-[1.15fr_0.85fr]"
              }`}
            >
              {/* Information */}
              <div
                className={`flex flex-col ${
                  index % 2 === 0
                    ? "lg:order-1"
                    : "lg:order-2"
                }`}
              >
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-5 max-w-2xl whitespace-pre-line text-xs leading-7 text-gray-400 sm:text-sm">
                  {section.description}
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
                <div className="relative h-[240px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#151515] sm:h-[320px] lg:h-[360px]">
                  {section.photo ? (
                    <img
                      src={section.photo}
                      alt={section.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
                      Photo placeholder
                    </div>
                  )}
                  {/* Photo credit */}
                  {section.photoCredit && (
                    <span className="absolute bottom-2 right-3 z-10 rounded bg-black/40 px-2 py-1 text-[10px] text-white/75">
                      Photo: {section.photoCredit}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
        <div className="border-t border-white/15" />
      </div>
    </main>
  );
}
