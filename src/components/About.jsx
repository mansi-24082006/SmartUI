import React from "react";
import { Eye, Target, Heart, Linkedin } from "lucide-react";
import logo from "../assets/logo.png"; // WebArchitect logo
import founderImage from "../assets/profile.jpg"; // Founder image
import Navbar from "../components/Navbar.jsx";

// Founder Data
const founder = {
  name: "Mansi Vaghasiya",
  role: "Founder & CEO",
  imageUrl: founderImage,
};

// Features / Why Choose WebArchitect
const features = [
  {
    icon: <Heart size={32} className="text-fuchsia-500" />,
    title: "Passionate Development",
    description:
      "We build websites with dedication and care, ensuring quality and innovation at every step.",
  },
  {
    icon: <Target size={32} className="text-fuchsia-500" />,
    title: "User-Centric Design",
    description:
      "Our websites are designed with the user in mind, providing seamless experiences across all devices.",
  },
  {
    icon: <Eye size={32} className="text-fuchsia-500" />,
    title: "Cutting-Edge Technology",
    description:
      "We leverage modern tools like Tailwind CSS, GSAP, and AI-assisted coding to stay ahead.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[var(--color-base-100)] text-white min-h-screen">
        <div className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center py-12">
            <img
              src={logo}
              alt="WebArchitect Logo"
              className="mx-auto h-20 w-20 mb-6 rounded-xl object-cover shadow-lg"
            />
            <h1 className="text-5xl md:text-6xl font-bold sp-text mb-4">
              Building Beautiful Websites with Code & Creativity
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              WebArchitect is dedicated to crafting high-quality, modern, and
              responsive websites for businesses and creators.
            </p>
          </div>

          {/* Founder Section */}
          <div className="my-20 lg:my-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 sp-text">
                Meet the Founder
              </h2>
              <p className="text-gray-400 mb-4">
                Mansi Vaghasiya founded WebArchitect with the vision to empower
                businesses and individuals by creating stunning, high-performing
                websites that inspire users.
              </p>
              <p className="text-gray-400">
                With expertise in frontend development, UI/UX design, and
                AI-assisted tools, Mansi ensures that every project combines
                creativity, functionality, and cutting-edge technology.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={founder.imageUrl}
                alt={founder.name}
                className="rounded-full shadow-2xl w-80 h-80 object-cover mx-auto border-4 border-fuchsia-500"
              />
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="my-20 lg:my-24 grid md:grid-cols-2 gap-10">
            <div className="bg-[var(--color-base-200)] p-8 rounded-lg">
              <Target className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-400">
                To provide businesses and creators with innovative, high-quality,
                and fully responsive websites that stand out.
              </p>
            </div>
            <div className="bg-[var(--color-base-200)] p-8 rounded-lg">
              <Eye className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-400">
                To become a trusted name in web development, known for creativity,
                professionalism, and cutting-edge solutions.
              </p>
            </div>
          </div>

          {/* Why Choose WebArchitect */}
          <div className="my-20 lg:my-24">
            <h2 className="text-4xl font-bold text-center mb-12 sp-text">
              Why Choose WebArchitect?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-base-200)] p-8 rounded-xl transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-[var(--color-base-300)] rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="my-20 lg:my-24 text-center bg-[var(--color-base-200)] p-12 rounded-xl">
            <h2 className="text-4xl font-bold mb-4 sp-text">
              Connect with Mansi
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Want to collaborate or learn more about WebArchitect? Reach out
              and let’s build amazing things together.
            </p>
            <a
              href="https://www.linkedin.com/in/vaghasiya-mansi-22457a2b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bf9m2HbbIQUCB%2FTO9dEYY4Q%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-fuchsia-600 hover:to-cyan-600 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
