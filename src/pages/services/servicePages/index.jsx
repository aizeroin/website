import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

function ServiceDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const data = [
    {
      slug: "technology-advisory",
      title: "Technology Advisory",
      subtitle: "Strategic guidance to align technology with your business goals.",
      description: `Technology can drive your business forward or quietly drain resources if it’s not aligned with your goals. Our Technology Advisory service exists to ensure your tech strategy is a growth strategy. We go beyond surface-level recommendations and partner with you to make informed, forward-thinking decisions about how technology supports your operations, your customers, and your future.
      
      We start by understanding your business—where you are, where you’re headed, and what’s getting in the way. Then we dig into your current systems, infrastructure, software, and processes. We identify what’s working, what’s outdated, and what’s missing. Our approach is pragmatic: no hype, no fluff, just clear insights and a custom roadmap.`,
      benefits: [
        "Strategic IT Roadmap aligned with business goals",
        "Vendor Selection & Management",
        "Risk Mitigation & Compliance",
        "Digital Transformation Strategy",
        "Cost Optimization & Budgeting"
      ]
    },
    {
      slug: "cloud-consulting-and-migration",
      title: "Cloud Consulting",
      subtitle: "Seamless migration and optimization for a cloud-first future.",
      description: "We help businesses plan, execute, and optimize their journey to the cloud—securely, efficiently, and without downtime. Whether you are moving to AWS, Azure, or Google Cloud, our experts ensure a smooth transition that maximizes performance and minimizes cost.",
      benefits: [
        "Cloud Strategy & Planning",
        "Seamless Migration Execution",
        "Cost Optimization & FinOps",
        "Cloud Security & Compliance",
        "Hybrid & Multi-Cloud Solutions"
      ]
    },
    {
      slug: "infrastructure-management",
      title: "Infrastructure Management",
      subtitle: "Reliable, scalable, and secure infrastructure for 24/7 operations.",
      description: "We keep your systems reliable, scalable, and secure with proactive monitoring, performance tuning, and 24/7 support. Our managed infrastructure services ensure your business is always online and performing at its peak.",
      benefits: [
        "24/7 Proactive Monitoring",
        "Server & Network Management",
        "Security Patching & Updates",
        "Backup & Disaster Recovery",
        "Performance Optimization"
      ]
    },
    {
      slug: "managed-it-services",
      title: "Managed IT Services",
      subtitle: "Comprehensive IT support so you can focus on your business.",
      description: "Comprehensive IT support—from helpdesk to cybersecurity—so you can focus on your business while we handle the tech. We act as your extended IT department, providing rapid response and expert resolution to keep your team productive.",
      benefits: [
        "Helpdesk & User Support",
        "Cybersecurity Management",
        "Device Management (MDM)",
        "Software License Management",
        "Onboarding & Offboarding"
      ]
    },
    {
      slug: "ai-automation",
      title: "AI Automation",
      subtitle: "Streamline operations and boost productivity with intelligent automation.",
      description: "We implement AI-driven solutions and automation tools that streamline operations, reduce costs, and boost productivity. From chatbots to complex workflow automation, we help you harness the power of AI to stay ahead of the competition.",
      benefits: [
        "Workflow Automation",
        "Intelligent Chatbots",
        "Data Analysis & Insights",
        "Process Optimization",
        "Custom AI Solutions"
      ]
    },
    {
      slug: "digital-modernization",
      title: "Digital Modernization",
      subtitle: "Future-proof your business with modern, cloud-native solutions.",
      description: "We upgrade legacy systems and implement modern, cloud-native solutions to future-proof your operations. Don't let outdated technology hold you back. We help you modernize your stack to improve agility, security, and customer experience.",
      benefits: [
        "Legacy System Modernization",
        "App Refactoring & Re-platforming",
        "Microservices Architecture",
        "API Development & Integration",
        "User Experience (UX) Redesign"
      ]
    }
  ];


  const selectedService = data.find(service => service.slug === id);

  if (!selectedService) {
    return (
      <div className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h2>
        <button
          onClick={() => navigate('/services')}
          className="text-primary hover:underline font-medium"
        >
          ← Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Modern Hero Section */}
      <div className="relative bg-primary text-white pt-40 pb-24 overflow-hidden">
        {/* <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div> */}
        {/* <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -ml-10 -mb-10"></div> */}

        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" w-4/5 mx-auto text-start"
          >
            {/* Breadcrumbs */}
            <div className="flex justify-start items-center gap-2 text-blue-200 mb-6 text-sm font-medium">
              <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
              <span>/</span>
              <button onClick={() => navigate('/services')} className="hover:text-white transition-colors">Services</button>
              <span>/</span>
              <span className="text-white">{selectedService.title}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{selectedService.title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light">{selectedService.subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24 bg-white">
        <div className="container w-4/5 mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-3/5"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 relative inline-block">
                Overview
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line text-justify">
                {selectedService.description}
              </div>
            </motion.div>

            {/* Key Benefits Card */}
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-2/5 w-full"
            >
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg sticky top-32">
                <h3 className="text-2xl font-bold text-primary mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {selectedService.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Need help with this?</h4>
                  <p className="text-gray-500 text-sm mb-6">Speak with our experts to get a custom plan.</p>
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
                  >
                    Get in Touch <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div> */}

          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Let's discuss how our {selectedService.title} solutions can help you achieve your goals.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
          >
            Start Your Journey
          </button>
        </div>
      </div> */}

    </div>
  );
}

export default ServiceDetail;
