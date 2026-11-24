
import { useState } from "react";
//import { type ChangeEvent, type SyntheticEvent } from "react";

const contactSections = [
  {
    id: "general",
    title: "General Inquiries",
  },
  {
    id: "sponsorships",
    title: "Sponsorships",
  },
  {
    id: "partnerships",
    title: "Partnerships",
  },
  {
    id: "media",
    title: "Media & Press",
  },
];

export function Contact() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
/*
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  */
/*
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // need to set up a whole form for this
    console.log("Contact form:", formData);
  };

  const inputStyle =
    "w-full rounded-lg border border-white/15 bg-[#111111] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-[#6c0287]";
*/
  const toggleSection = (id: string) => {
    setActiveSection((current) => current === id ? null : id);
  };

  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Heading */}
      <div className="w-full px-5 pb-8 pt-6 sm:px-8 lg:px-16 lg:pt-8 xl:px-20">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
          Have a question or want to support AEWT 2027?
          Get in touch with us. We'd be happy to hear from you!
        </p>
      </div>
      {/* Contact sections */}
      <div className="flex w-full flex-col px-5 pb-16 sm:px-8 lg:px-16 xl:px-20">
        <section className="border-t border-white/15 py-4 sm:py-6">
          <div className="mx-auto w-full max-w-4xl">
            {contactSections.map((section) => {
              const isOpen = activeSection === section.id;
              return (
                <div
                  key={section.id}
                  className="border-b border-white/15"
                >
                  {/* Dropdown heading */}
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isOpen}
                    aria-controls={`contact-panel-${section.id}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors hover:text-white"
                  >
                    <span
                      className={`text-base font-semibold sm:text-lg ${
                        isOpen ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {section.title}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6 9 6 6 6-6"
                      />
                    </svg>
                  </button>
                  {/* Dropdown content */}
                  <div
                    id={`contact-panel-${section.id}`}
                    hidden={!isOpen}
                    className="pb-7"
                  >
                    {/* General inquiries */}
                    {section.id === "general" && (
                      <div className="px-1">
                        <p className="text-sm leading-7 text-gray-400">
                          Have a question about AEWT 2027? Feel free to contact us anytime at:
                        </p>
                        <a
                          href="mailto:external@academicesports.net"
                          className="mt-3 inline-block text-sm font-medium text-white underline decoration-[#ae1a20] underline-offset-4 transition hover:text-gray-300"
                        >
                          secretary@academicesports.net
                        </a>
                      </div>
                      )} 
                      {/* Contact form can be added instead of the secretary email - need to set up handleSubmit() with backend or similar
                      <div>
                        <p className="mb-5 text-sm leading-7 text-gray-400">
                          Have a question about AEWT 2027? Fill in the form below and we'll get back to you!
                        </p>
                        <div className="rounded-xl border border-white/10 bg-[#171717] p-6 sm:p-8">
                          <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                          >
                            <div>
                              <label className="mb-2 block text-sm font-medium text-white">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email address"
                                required
                                className={inputStyle}
                              />
                            </div>
                            <div>
                              <label className="mb-2 block text-sm font-medium text-white">
                                Subject
                              </label>
                              <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                                className={inputStyle}
                              />
                            </div>
                            <div>
                              <label className="mb-2 block text-sm font-medium text-white">
                                Message
                              </label>
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                rows={7}
                                required
                                className={`${inputStyle} resize-y`}
                              />
                            </div>
                            <button
                              type="submit"
                              className="cursor-pointer rounded-lg bg-[#6c0287] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#8203a2] active:scale-[0.98]"
                            >
                              Send Message
                            </button>
                          </form>
                        </div>
                      </div> */}
                    {/* Sponsorships */}
                    {section.id === "sponsorships" && (
                      <div className="px-1">
                        <p className="text-sm leading-7 text-gray-400">
                          Interested in sponsoring AEWT 2027 or learning more about sponsorship opportunities? Get in touch with us at:
                        </p>
                        <a
                          href="mailto:external@academicesports.net"
                          className="mt-3 inline-block text-sm font-medium text-white underline decoration-[#ae1a20] underline-offset-4 transition hover:text-gray-300"
                        >
                          external@academicesports.net
                        </a>
                      </div>
                    )}
                    {/* Partnerships */}
                    {section.id === "partnerships" && (
                      <div className="px-1">
                        <p className="text-sm leading-7 text-gray-400">
                          Interested in collaborating with AEWT 2027? We'd love to explore potential partnerships. Contact our team at:
                        </p>
                        <a
                          href="mailto:partnerships@example.com"
                          className="mt-3 inline-block text-sm font-medium text-white underline decoration-[#6c0287] underline-offset-4 transition hover:text-gray-300"
                        >
                          external@academicesports.net
                        </a>
                      </div>
                    )}
                    {/* Media and press */}
                    {section.id === "media" && (
                      <div className="px-1">
                        <p className="text-sm leading-7 text-gray-400">
                          For press enquiries, media requests or other communication-related questions, contact us at:
                        </p>
                        <a
                          href="mailto:marketing@academicesports.net"
                          className="mt-3 inline-block text-sm font-medium text-white underline decoration-[#ae1a20] underline-offset-4 transition hover:text-gray-300"
                        >
                          marketing@academicesports.net
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
