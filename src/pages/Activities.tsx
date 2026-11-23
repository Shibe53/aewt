
import { useState, type KeyboardEvent } from "react";

type ActivitySection = {
  title: string;
  color: string;
  description: string;
};

type ActivityTab = {
  title: string;
  color: string;
  sections: ActivitySection[];
};

const activityTabs: ActivityTab[] = [
  {
    title: "Academic",
    color: "#6c0287",
    sections: [
      {
        title: "Business Pitch",
        color: "#ae1a20",
        description:
          "The Business Pitch challenge evaluates teams' ability to develop and present innovative, sustainable, and actionable ideas that connect the esports and business environments. Participants must demonstrate creativity, analytical thinking, and communication skills as they address real-world challenges. The focus is on strategic innovation, sustainability, and impact, showing how esports can drive transformation in organizations, communities, or industries.",
      },
      {
        title: "Game Jam",
        color: "#6c0287",
        description:
          "The Game Jam challenge tests creativity, design thinking, and teamwork by asking participants to design a new game concept around a central theme revealed at the start of the AEWT.\n Teams must conceptualize, design, and present an original game that is innovative and thematically relevant.\n The focus of the game jam is on the game concept; an actually playable implementation (e.g. a paper or digital prototype) is optional. However, for teams that do put in the effort to make such a playable prototype, there is a bonus competition with a prize for the best playable prototype as voted by AEWT attendees.\n The Game Jam highlights how play can be used for learning, communication, and cultural expression: key aspects of AEWT's mission to connect creativity and academia through esports.",
      },
      {
        title: "Academic Debate",
        color: "#ae1a20",
        description:
          "The Academic Debate challenge tests participants' ability to research, reason, and argue complex issues relevant to esports, technology, and society. It is conducted as a team debate, emphasizing collaboration, structure, and intellectual depth over individual performance.\n Each debate brings together two teams, one representing the Affirmative (Proposition) and one representing the Negative (Opposition), in a formal, time-bound academic setting. A list of possible motions (debate topics) will be sent out ahead of the tournament; at the tournament itself, each team will be assigned one of these topics and their stance (affirmative/negative).",
      },
    ],
  },
  {
    title: "Esports",
    color: "#ae1a20",
    sections: [
      {
        title: "Tournament",
        color: "#6c0287",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
      },
      {
        title: "Games",
        color: "#ae1a20",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
      },
    ],
  },
  /*{
    title: "Other Activities",
    color: "#6c0287",
    sections: [
      {
        title: "Icebreaker",
        color: "#ae1a20",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi.",
      },
      {
        title: "Board Games?",
        color: "#6c0287",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi.",
      },
    ],
  },*/
];

export function Activities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTab = activityTabs[activeIndex];

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex = index;

    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % activityTabs.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex =
        (index - 1 + activityTabs.length) % activityTabs.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = activityTabs.length - 1;
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

      {/* Page heading */}
      <div className="w-full px-5 pb-8 pt-6 sm:px-8 lg:px-16 lg:pt-8 xl:px-20">

        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Activities
        </h1>

        <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
          Curious about the different activities that will happen during AEWT 2027?
          Below you can find a short description of every activity we have prepared for the participating teams!
        </p>

      </div>

      {/* Activities */}
      <div className="flex w-full flex-col px-5 pb-16 sm:px-8 lg:px-16 xl:px-20">

        <section className="border-t border-white/15 pt-3 pb-8 sm:pb-10">

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="AEWT activities"
            className="flex flex-wrap gap-x-7 gap-y-3 border-b border-white/15"
          >

            {activityTabs.map((tab, index) => (
              <button
                key={tab.title}
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

                {tab.title}

                {/* Active tab underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full transition-opacity duration-200 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: tab.color }}
                />

              </button>
            ))}

          </div>

          {/* Selected tab content */}
          <div
            id="activity-panel"
            role="tabpanel"
            aria-labelledby={`activity-tab-${activeIndex}`}
            tabIndex={0}
            className="focus:outline-none"
          >

            {activeTab.sections.map((activity, index) => (
              <section
                key={activity.title}
                className={`py-8 sm:py-10 ${
                  index > 0 ? "border-t border-white/15" : ""
                }`}
              >

                {/* Section heading */}
                <div className="mb-3 flex items-center gap-3">

                  <div
                    className="h-6 w-1 rounded-full"
                    style={{ backgroundColor: activity.color }}
                  />

                  <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {activity.title}
                  </h2>

                </div>

                {/* Description */}
                <p className="max-w-5xl text-xs leading-7 text-gray-400 sm:text-sm">
                  {activity.description}
                </p>

              </section>
            ))}

          </div>

        </section>

        <div className="border-t border-white/15" />

      </div>

    </main>
  );
}
