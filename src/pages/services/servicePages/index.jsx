import { useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";
import './index.css'
function ServiceDetail() {
    const navigate = useNavigate();
    const { id } = useParams();

    const data = [
        {
          slug: "technology-advisory",
          title: "Technology Advisory",
          description: `
            Technology can drive your business forward or quietly drain resources if it’s not aligned with your goals. 
            Our Technology Advisory service exists to ensure your tech strategy is a growth strategy. We go beyond surface-level 
            recommendations and partner with you to make informed, forward-thinking decisions about how technology supports your operations, 
            your customers, and your future.
      
            We start by understanding your business—where you are, where you’re headed, and what’s getting in the way. Then we dig into 
            your current systems, infrastructure, software, and processes. We identify what’s working, what’s outdated, and what’s missing. 
            Our approach is pragmatic: no hype, no fluff, just clear insights and a custom roadmap.
      
            We advise on IT budgeting, risk mitigation, vendor selection, tech stack optimization, and digital transformation strategies. 
            Whether you're launching a new product, scaling operations, or recovering from a past misstep, our team helps you make the right calls. 
            We also keep you ahead of the curve with insights into emerging technologies like AI, automation, and cloud innovations.
      
            But strategy alone isn’t enough. Execution matters. That’s why we work alongside your leadership and tech teams to implement plans, 
            track KPIs, and pivot when needed. We help you build internal capabilities so you’re not dependent on outside consultants forever. 
            We measure success not just by a solid plan—but by the business outcomes it drives: faster growth, fewer outages, better customer experiences, and higher ROI.
      
            When you're facing high-stakes decisions—acquisitions, infrastructure upgrades, new markets—we’re the partner you want in the room. 
            Technology shouldn’t be a cost center. With the right guidance, it becomes your biggest lever for growth.
          `
        },
        {
          slug: "cloud-consulting-and-migration",
          title: "Cloud Consulting",
          description: "We help businesses plan, execute, and optimize their journey to the cloud—securely, efficiently, and without downtime."
        },
        {
          slug: "infrastructure-management",
          title: "Infrastructure Management",
          description: "We keep your systems reliable, scalable, and secure with proactive monitoring, performance tuning, and 24/7 support."
        },
        {
          slug: "managed-it-services",
          title: "Managed IT Services",
          description: "Comprehensive IT support—from helpdesk to cybersecurity—so you can focus on your business while we handle the tech."
        },
        {
          slug: "ai-automation",
          title: "AI Automation",
          description: "We implement AI-driven solutions and automation tools that streamline operations, reduce costs, and boost productivity."
        },
        {
          slug: "digital-modernization",
          title: "Digital Modernization",
          description: "We upgrade legacy systems and implement modern, cloud-native solutions to future-proof your operations."
        }
      ];
      

    const selectedService = data.find(service => service.slug === id);

    if (!selectedService) {
        return (
            <Container className="py-5">
                <p onClick={() => navigate(-1)} style={{ cursor: 'pointer', color: 'blue' }}>
                    ← Back to Services
                </p>
                <h2>Service Not Found</h2>
            </Container>
        );
    }

    return (
        <Container fluid className="px-0">
            <div className='servicePageHeader'>
                <Container py={5} className="text-center">
                    <h3 className="fs-1 fw-600 p-0 pt-2 m-0 mb-2 text-center"> {selectedService.title}</h3>
                    <p className="opacity-75 w-75 w-sm-100 mx-auto text-center">Trusted solutions for seamless business transformation</p>
                </Container>
            </div>

            <Container className='py-5'>
            <p style={{ textAlign: 'justify', padding: "3px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedService.description}</p>
            </Container>
            
        </Container>
    );
}

export default ServiceDetail;
