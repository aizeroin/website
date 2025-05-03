import Card from "../../components/Card";
import Hero from "../../components/Hero";
import { Container } from "react-bootstrap";
import Applications from "../../assets/s1.jpg";
import Timeline from "../../components/TimeLine";
import serviceimage from "../../assets/service.png";
import AboutUS from "../../assets/aiaboutus.png"

function Services() {

    const cardData = [
        { slug: "technology-advisory", title: "Technology Advisory", description: "Innovative AI solutions for your business." },
        { slug: "cloud-consulting-and-migration", title: "Cloud Consulting and Migration", description: "Expert cloud solutions." },
        { slug: "infrastructure-management", title: "Infrastructure Management", description: "Advanced data insights." },
        { slug: "digital-modernization", title: "Digital Modernization", description: "Transform your business digitally." },
        { slug: "managed-it-services", title: "Managed IT Services", description: "Enterprise-grade security." },
        { slug: "ai-automation", title: "AI Automation", description: "Automate with intelligence." },
    ]

    return (
        <Container fluid className="px-0">
            <Hero
                HeroImg={serviceimage}
                HeroHeading="Technology Services and Solutions"
                HeroText="We provide innovative solutions to help businesses thrive in the digital age."
                buttonHeading="Contact Us"
            />
            <br></br>
            <br></br>
            <Container>
                <h3 class="fs-1 fw-600 p-0 pt-2 m-0 mb-2 text-center">Solutions You Can Trust</h3>
                <p class="opacity-75 w-75 w-sm-100 mx-auto text-center">Trusted solutions for seamless business transformation</p>
                <div class="d-flex flex-wrap justify-content-center gap-5 mt-5 mb-6 pb-5">
                    {cardData.map((item, index) => (
                        <Card
                            key={index}
                            CardImg={Applications}
                            CardTitle={item.title}
                            CardText={item.description}
                            slug={item.slug}
                        />
                    ))}
                </div>
            </Container>
            <br></br>
            <br></br>
            <Timeline />
            <br></br>
            <br></br>
        </Container>
    );
}

export default Services;