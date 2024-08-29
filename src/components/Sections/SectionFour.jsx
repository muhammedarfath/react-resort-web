import React, { useState } from "react";

function SectionFour() {
  const testimonials = [
    {
      quote:
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
      name: "Micheal Gough",
      title: "CEO at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "This is a fantastic product with excellent customer support. I've been able to build my project much faster thanks to Flowbite.",
      name: "Sarah Johnson",
      title: "Lead Developer at Amazon",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sarah-johnson.png",
    },
    {
      quote:
        "Using Flowbite has been a game changer for our team. The predesigned components have saved us countless hours of development time.",
      name: "John Doe",
      title: "CTO at Microsoft",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/john-doe.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white mt-40 border">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 text-black">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-black"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-2xl font-medium text-gray-900">
              "{testimonials[current].quote}"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src={testimonials[current].image}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2">
              <div className="pr-3 font-medium text-gray-900">
                {testimonials[current].name}
              </div>
              <div className="pl-3 text-sm font-light">
                {testimonials[current].title}
              </div>
            </div>
          </figcaption>
        </figure>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={previousTestimonial}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={nextTestimonial}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
