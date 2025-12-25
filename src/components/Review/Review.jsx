"use client";
import { useState } from "react";
import James from "../../assets/review/james.png";
import Another from "../../assets/review/another.png";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Designer",
      image: Another,
      rating: 5,
      text: "I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.",
    },
    {
      id: 2,
      name: "James K.",
      role: "Traveler",
      image: James,
      rating: 5,
      text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    },
    {
      id: 3,
      name: "Michael R.",
      role: "Developer",
      image: Another,
      rating: 4,
      text: "This is simply amazing. I can't believe how great this product is. It exceeded all my expectations!",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div
      className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex flex-col 
     items-center justify-center p-8 overflow-hidden"
    >
      <div className="w-179 text-center pb-10">
        <h1 className="text-[#484848] text-[46px]" id="review_title">
          This Is What Our Customers Say
        </h1>
        <p className="text-[16px] text-[#8A8A8A]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="relative">
          <div className="relative overflow-hidden">
            <div className="flex gap-2 mb-8 ">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`flex  transition-all duration-500 min-w-220 ${
                    index === 1 ? "scale-105 z-5" : "scale-80 opacity-60 z-1"
                  }`}
                >
                  <div
                    className="bg-white rounded-xl p-15 h-full flex gap-5
                   shadow-lg border border-gray-100"
                  >
                    <div className="w-60.5 h-60.5 bg-[#D9D9D9]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-60.5 h-60.5 rounded-xl object-cover shadow-md"
                      />
                    </div>

                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
                        {testimonial.text}
                      </p>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <div className="w-full h-px bg-gray-200 mb-4"></div>

                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl 
                transition-all duration-300 flex items-center justify-center border border-gray-200
                 hover:border-gray-300 group"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl 
                transition-all duration-300 flex items-center justify-center border border-gray-200 hover:border-gray-300 group"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gray-800"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
