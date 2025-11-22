import Hero from "../../components/Hero"
import HeroImage from "../../assets/hero-img.png";
import AIZlogo from "../../assets/AIZLogo.png"
import ProfileImage from "../../assets/profile.jpg";
import Stats from "../../components/Stats";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero
        HeroImg={AIZlogo}
        HeroHeading="Empowering Businesses with Technology!"
        HeroText="We provide innovative solutions to help businesses thrive in the digital age."
        buttonHeading="Contact Us"
      />

      <Stats />



      <Carousel />

      {/* Why AIZero Section */}
      <div className="py-24 bg-white">
        <div className="container w-4/5 mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-4xl font-bold text-primary mb-6">Why AIZero?</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                We are a fast-growing team of highly skilled, passionate IT professionals with excellence in service delivery, enabling faster innovation and higher productivity.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
                Our services are dynamic, scalable, resilient, and responsive. Our highly collaborative approach aligns our services with your business goals.
              </p>

              <button
                onClick={() => window.location.href = '/#/about'}
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Explore About Us
              </button>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ProfileImage}
                  alt="Why AIZero Team"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-4xl font-semibold text-center mb-4 text-primary">Solutions You Can Trust</h3>
            <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto">Trusted solutions for seamless business transformation</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-32">
            <Card
              CardImg={ProfileImage}
              CardTitle={"AIZero Solutions"}
              CardText={"Discover the power of ."}
              showButton={true}
            />
            <Card
              CardImg={ProfileImage}
              CardTitle={"AIZero Solutions"}
              CardText={"Discover the power of ."}
              showButton={true}
            />
            <Card
              CardImg={ProfileImage}
              CardTitle={"AIZero Solutions"}
              CardText={"Discover the power of ."}
              showButton={true}
            />

          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;