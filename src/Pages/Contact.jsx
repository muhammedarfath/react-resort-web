import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Map from "../components/Sections/Map";
import { FaSpinner } from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading

    const formData = new FormData(event.target);
    formData.append("access_key", "3dc9160f-4797-4cea-9a14-0bd7c3a8d621");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <section className="bg-white mt-40">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
            Please share your details with us, and we'll get back to you
            promptly. We're here to assist with any inquiries or bookings you
            may have. Your information helps us ensure the best possible
            experience.
          </p>
          <form action="#" className="space-y-8" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-black"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-black bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                className="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="border p-3 bg-[#F9DABB] text-black rounded flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? <FaSpinner className="animate-spin" /> : "Send message"}
            </button>
          </form>
        </div>
      </section>
      <Map />
      <Toaster position="top-right" />
    </div>
  );
}

export default Contact;
