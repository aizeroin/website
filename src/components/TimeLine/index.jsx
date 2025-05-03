import React from "react";
import "./index.css"; // Add your custom styles if needed

const approachSteps = [
  {
    title: "1. Understand",
    description: "We start by deeply understanding your business, challenges, and goals to align our AI solutions with your unique needs.",
  },
  {
    title: "2. Ideate",
    description: "Our team collaborates to brainstorm and architect the most efficient and innovative approach tailored for your business.",
  },
  {
    title: "3. Develop",
    description: "We bring the solution to life using cutting-edge technologies with a focus on scalability, security, and performance.",
  },
  {
    title: "4. Deliver",
    description: "We deploy, test, and deliver a solution that is production-ready, with continuous support and improvements as your needs evolve.",
  },
];

function Timeline() {
  return (
    <section className="py-2 px-3 bg-white">
      <div className="container">
        <h2 className="fs-1 fw-600 p-0 pt-2 m-0 mb-2 text-center">Our Approach</h2>
        <p className="opacity-75 w-75 w-sm-100 mx-auto text-center">
          A strategic and transparent approach to help your business grow with powerful AI solutions.
        </p>

        <div className="timeline position-relative">
          {approachSteps.map((step, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
              <div className="timeline-box shadow-sm p-3 text-center rounded bg-light timeline-card card">
                <h5 className="fw-semibold">{step.title}</h5>
                <p className="mb-0 text-muted small">{step.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
