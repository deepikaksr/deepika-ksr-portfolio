import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import NetworkBackground from './NetworkBackground';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden pt-10"
    >
      <NetworkBackground />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <div className="text-left space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </div>

            <h1 className="text-6xl md:text-7xl font-light text-gray-900 leading-tight">
              Hi There,
              <br />
              I'm{' '}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Deepika
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-2xl text-gray-700 font-medium">
                M.Sc. AI & ML Student
              </p>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Passionate about creating intelligent systems and innovative solutions through artificial intelligence and modern web technologies
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200 border-2 border-gray-200 hover:border-gray-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <a
              href="https://www.linkedin.com/in/deepika-ksr-9a3330254"
              className="group p-4 bg-white text-gray-600 rounded-xl hover:text-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md border border-gray-100"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/deepikaksr"
              className="group p-4 bg-white text-gray-600 rounded-xl hover:text-gray-900 transition-colors duration-200 shadow-sm hover:shadow-md border border-gray-100"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:deepikaksramesh@gmail.com"
              className="group p-4 bg-white text-gray-600 rounded-xl hover:text-red-600 transition-colors duration-200 shadow-sm hover:shadow-md border border-gray-100"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+919176362643"
              className="group p-4 bg-white text-gray-600 rounded-xl hover:text-green-600 transition-colors duration-200 shadow-sm hover:shadow-md border border-gray-100"
              aria-label="Phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Column - Profile Image (Aesthetically Improved) */}
        <div className="flex items-center justify-center lg:justify-end h-full">
          <div className="relative w-[26rem] h-[26rem] group -translate-x-10">
            
            {/* START: Smoky Background Blobs (More Visible) */}
            <div className="absolute top-[-1rem] left-[-1rem] w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
            <div className="absolute top-[-1rem] right-[-1rem] w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-2rem] left-10 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
            {/* END: Smoky Background Blobs */}
            
            {/* Main profile picture container */}
            <div className="relative w-full h-full">
              {/* Gradient border ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full shadow-2xl transform transition-transform duration-500 group-hover:scale-105"></div>

              {/* Inner white ring and image */}
              <div className="absolute inset-2 bg-white rounded-full p-2">
                <img
                  src="/lovable-uploads/500ce987-3b3b-4e86-9495-b314c5e15baf.png"
                  alt="Deepika KSR"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;