import React from 'react';
import Checkatrade from '../assets/checkatrade.png'

const TestimonialsSection = () => {
    return (
        <section className="py-12 bg-base sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-lg font-semibold text-white/50 font-pj">Our Testimonials</p>
                        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">What our clients say about us</h2>
                    </div>

                    <div className="mt-8 text-center md:mt-16 md:order-3">
                        <a href="#" title="Check all 2,157 reviews" className="pb-2 text-white font-bold leading-7 text-white transition-all duration-200 border-b-2 text-white hover:text-white/50 font-pj hover:border-white/50 cursor-pointer"> See all reviews </a>
                    </div>

                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter bg-logo-gradient"></div>
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            <TestimonialCard
                                name="Lillie Jervis"
                                date="April 4th, 2024"
                                // avatarUrl="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                                testimonial="“Thank you very much for completing the work quickly and professionally, love the new light fittings and LED lights fitted in my media centre.”"
                            />
                            <TestimonialCard
                                name="Christine Saunders"
                                date="April 8th, 2024"
                                // avatarUrl="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                                testimonial="“They were very polite, suggested best options and give reasonable quote to carry out job. Got job done in a timely manner and I was happy with the work carried out.”"
                            />
                            <TestimonialCard
                                name="Sarah Dann"
                                date="April 4th, 2024"
                                // avatarUrl="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                                testimonial="“Cannot fault the service from L / J Electrical, Polite and courteous and outlined the process in full. Transparent in cost and the work was carried out in a great timescale and to a very high standard.”"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ name, date, testimonial }) => {
    return (
        <div className="flex flex-col overflow-hidden shadow-xl">
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                    <div className="flex items-center">
                        <StarsRating />
                    </div>
                    <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">{testimonial}</p>
                    </blockquote>
                </div>
                <div className="flex items-center mt-8">
                    <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={Checkatrade} alt="Checkatrade" />
                    <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{name}</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StarsRating = () => {
    return (
        <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

export default TestimonialsSection;
