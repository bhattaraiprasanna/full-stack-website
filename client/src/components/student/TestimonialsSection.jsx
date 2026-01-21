import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0 max-w-4xl mx-auto">
      
      {/* Heading */}
      <h2 className="text-3xl font-medium text-gray-800 text-center">
        Testimonials
      </h2>
      <p className="text-gray-500 text-center mt-3">
        Hear from our learners as they share their journeys of transformation,
        success, and how our <br />
        platform has made a difference in their lives.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl bg-white shadow-md overflow-hidden"
          >
            {/* Top section */}
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-100">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-base font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 py-6">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                    className="h-4 w-4"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                {testimonial.feedback}
              </p>

              {/* Read more */}
              <a
                href="#"
                className="inline-block text-blue-500 text-sm mt-4 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
