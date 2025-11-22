import Card from "../../components/Card";
import Hero from "../../components/Hero";
import Applications from "../../assets/s1.jpg";
import Timeline from "../../components/TimeLine";
import serviceimage from "../../assets/service.png";

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
        <div className="w-full overflow-x-hidden">
            <Hero
                HeroImg={serviceimage}
                HeroHeading="Technology Services and Solutions"
                HeroText="We provide innovative solutions to help businesses thrive in the digital age."
                buttonHeading="Contact Us"
            />

            <div className="py-20">
                <div className="container mx-auto px-4">
                    <h3 className="text-4xl font-semibold text-center mb-4 text-primary">Solutions You Can Trust</h3>
                    <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto mb-16">Trusted solutions for seamless business transformation</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
                </div>
            </div>

            <div className="py-20 bg-gray-50">
                <Timeline />
            </div>
        </div>
    );
}

export default Services;