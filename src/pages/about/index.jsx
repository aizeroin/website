import { Container } from "react-bootstrap";
import Hero from "../../components/Hero";
import AboutUS from "../../assets/aiaboutus.png"
import CoreValues from "../../components/CoreValue";


function About() {
    const paragraphStyle = {
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#333",
        textAlign: "justify",
    };

    return (
        <Container fluid className="px-0">
            <Hero
                HeroImg={AboutUS}
                HeroHeading="Who we are? Your technology partner!"
                HeroText="We provide innovative solutions to help businesses thrive in the digital age."
                buttonHeading="Contact Us"
            />
            <br></br>
            <Container>
                <section class="py-5 px-3">
                    <div class="container text-center">
                        <h3 class="fs-1 fw-600 p-0 pt-2 m-0 mb-2 text-center">Our Company Overview</h3>
                        <p class="opacity-75 w-75 w-sm-100 mx-auto text-center">
                            Pioneering the Future of Intelligent Automation
                        </p>

                        <div class="row justify-content-center pt-4">
                            <div class="col-md-10 col-lg-8 text-start">
                                <p className={paragraphStyle} >
                                    At <strong>AIZero</strong>, we are on a mission to revolutionize the way businesses operate by harnessing the power of Artificial Intelligence.
                                    As a passionate team of innovators, engineers, and problem-solvers, we build intelligent systems that help organizations automate workflows,
                                    enhance decision-making, and accelerate digital transformation.
                                </p>
                                <p className={paragraphStyle} class="mb-4">
                                    Founded with a startup spirit and a bold vision, AIZero is committed to delivering reliable, scalable, and user-friendly AI solutions
                                    that adapt to your unique business needs. We believe technology should empower, not complicate — and that’s exactly what we aim to deliver.
                                </p>
                                <p className={paragraphStyle} class="mb-4">
                                    Whether you're a growing startup or an established enterprise, AIZero is your partner in building a smarter tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
            <h3 class="fs-1 fw-600 p-0 pt-2 m-0 mb-2 text-center">Our Core Value </h3>
            <p class="opacity-75 w-75 w-sm-100 mx-auto text-center">
                AIZero adheres to a set of core values in all business dealings. All our employees are expected to take ownership of these values and incorporate them into their everyday activities.
            </p>
            <CoreValues/>
            <br></br>
            <br></br>
            <br></br>
        </Container>
    );
}

export default About;