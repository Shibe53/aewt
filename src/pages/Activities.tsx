
import { useState, type KeyboardEvent } from "react";

const activities = [
  {
    title: "Business Case",
    color: "#ae1a20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Academic",
    color: "#6c0287",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Gaming Tournament",
    color: "#ae1a20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    title: "Other Activities",
    color: "#6c0287",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi.",
  },
];

export function Activities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeActivity = activities[activeIndex];
  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex = index;

    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % activities.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex =
        (index - 1 + activities.length) % activities.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = activities.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    setActiveIndex(nextIndex);

    const tabs =
      e.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
        '[role="tab"]'
      );

    tabs?.[nextIndex]?.focus();
  };

  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Heading */}
      <div className="w-full px-5 pb-8 pt-6 sm:px-8 lg:px-16 lg:pt-8 xl:px-20">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Activities
        </h1>
        <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
          Discover the different activities available during AEWT 2027.
        </p>
      </div>
      {/* Activities */}
      <div className="flex w-full flex-col px-5 pb-16 sm:px-8 lg:px-16 xl:px-20">
        <section className="border-t border-white/15 pt-3 pb-8 py-8 sm:py-10">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="AEWT activities"
            className="flex flex-wrap gap-x-7 gap-y-3 border-b border-white/15"
          >
            {activities.map((activity, index) => (
              <button
                key={activity.title}
                id={`activity-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="activity-panel"
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`relative cursor-pointer py-4 text-sm font-semibold transition-colors duration-200 sm:text-base ${
                  activeIndex === index
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {activity.title}
                {/* Active tab underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full transition-opacity duration-200 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: activity.color }}
                />
              </button>
            ))}
          </div>
          {/* Activity content */}
          <div
            id="activity-panel"
            role="tabpanel"
            aria-labelledby={`activity-tab-${activeIndex}`}
            tabIndex={0}
            className="py-8 sm:py-10 focus:outline-none"
          >
            <h2 className="mb-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {activeActivity.title}
            </h2>
            <p className="max-w-5xl text-xs leading-7 text-gray-400 sm:text-sm">
              {activeActivity.description}
            </p>
          </div>
        </section>
        <div className="border-t border-white/15" />
      </div>
    </main>
  );
}
