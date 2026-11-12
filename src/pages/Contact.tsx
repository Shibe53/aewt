
import { useState, type ChangeEvent, type SyntheticEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
    // put email functionality here (and test)
    console.log("Contact form:", formData);
  };

  const inputStyle =
    "w-full rounded-lg border border-white/15 bg-[#111111] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-[#6c0287]";

  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Heading */}
      <div className="w-full px-5 pb-8 pt-6 sm:px-8 lg:px-16 lg:pt-8 xl:px-20">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
          Have a question or want to support AEWT 2027? Get in touch with us, we'd be happy to hear from you!
        </p>
      </div>
      {/* Contact form */}
      <div className="flex w-full flex-col px-5 pb-16 sm:px-8 lg:px-16 xl:px-20">
        <section className="border-t border-white/15 py-8 sm:py-10">
          <div className="mx-auto w-full max-w-4xl rounded-xl border border-white/10 bg-[#171717] p-7 sm:p-9">
            {/* Form heading */}
            <div className="mb-7 flex items-center gap-3">
              <div className="h-6 w-1 rounded-full bg-[#6c0287]" />
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Send a Message
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Form contents */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputStyle}
                  />
                </div>
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
              {/* Submit button */}
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-[#6c0287] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#8203a2] active:scale-[0.98]"
              >
                Send Message →
              </button>
            </form>
          </div>
        </section>
        <div className="border-t border-white/15" />
      </div>
    </main>
  );
}
