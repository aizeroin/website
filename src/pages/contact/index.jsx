import React from 'react';
import Hero from '../../components/Hero';
import Globe from "../../assets/globe.png";

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    return (
        <div className="w-full overflow-x-hidden">
            <Hero
                HeroImg={Globe}
                HeroHeading="Contact Us"
                HeroText="We are here to assist you with any inquiries or support you may need. Your satisfaction is our priority."
            />
            <section className="py-24 bg-white" id="contact">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-6 text-primary">Get In Touch</h2>
                    <p className="text-center mb-12 max-w-2xl mx-auto text-lg text-gray-500">
                        Connect for Excellence, Your Direct Line to Exceptional IT Services<br />
                        We'd love to hear from you! Fill out the form below and we'll get back to you shortly.
                    </p>

                    <div className="max-w-3xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div>
                                <label htmlFor="formName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="formName"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="formEmail" className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                                <input
                                    type="email"
                                    id="formEmail"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="formSubject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="formSubject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="Subject"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="formMessage" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="formMessage"
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Type your message..."
                                    required
                                />
                            </div>

                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-accent text-white text-lg font-semibold rounded-full shadow-lg hover:bg-accent-50 transition-all duration-300 shine-effect w-full md:w-auto"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;