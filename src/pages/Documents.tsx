type DownloadFile = {
  name: string;
  file: string;
};

type DownloadSection = {
  title: string;
  color: string;
  downloads: DownloadFile[];
};

const downloadSections: DownloadSection[] = [
  {
    title: "Business Case",
    color: "#ae1a20",
    downloads: [
      {
        name: "Business Case Rulebook",
        file: "",
      },
    ],
  },
  {
    title: "Academic Event",
    color: "#6c0287",
    downloads: [
      {
        name: "Academic Rulebook",
        file: "",
      },
    ],
  },
  {
    title: "Gaming Tournament",
    color: "#ae1a20",
    downloads: [
      {
        name: "Tournament Rulebook",
        file: "",
      },
    ],
  },
  {
    title: "Other Information",
    color: "#6c0287",
    downloads: [
      {
        name: "Useful Information about the NL",
        file: "",
      },
    ],
  },
];

export function Info() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Heading */}
      <div className="w-full px-5 pb-8 pt-6 sm:px-8 lg:px-16 lg:pt-8 xl:px-20">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Information
        </h1>
        <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
          All of the information necessary for AEWT smth smth
        </p>
      </div>
      <div className="flex w-full flex-col px-5 pb-16 sm:px-8 lg:px-16 xl:px-20">
        {downloadSections.map((section) => (
          <section
            key={section.title}
            className="border-t border-white/15 py-6 sm:py-7"
          >
            {/* Section */}
            <div className="mb-4 flex items-center gap-3">
              <div
                className="h-6 w-1 rounded-full"
                style={{ backgroundColor: section.color }}
              />
              <h2 className="text-lg font-bold text-white sm:text-xl">
                {section.title}
              </h2>
            </div>
            {/* Downloads */}
            <div className="flex flex-col divide-y divide-white/10">
              {section.downloads.map((item) => (
                <div
                  key={item.file}
                  className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  {/* File information */}
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
                      style={{
                        backgroundColor: `${section.color}20`,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={section.color}
                        strokeWidth="1.8"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 3v5h5M9 14h6M9 17h6"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white sm:text-sm">
                        {item.name}
                      </p>
                    </div>

                  </div>
                  {/* Download link */}
                  <a
                    href={item.file}
                    download
                    className="inline-flex shrink-0 cursor-pointer items-center gap-2 text-xs font-semibold transition-opacity hover:opacity-70 sm:ml-4"
                    style={{ color: section.color }}
                  >
                    Download PDF
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
        <div className="border-t border-white/15" />
      </div>
    </main>
  );
}
