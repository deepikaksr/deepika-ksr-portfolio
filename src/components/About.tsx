
import React, { useState } from 'react';
import { Brain, Code, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('passion');

  const tabs = [
    { 
      id: 'passion', 
      label: 'My Passion', 
      icon: Brain,
      gradient: 'from-blue-600 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      iconBg: 'bg-gradient-to-br from-blue-500 to-purple-500',
      content: {
        title: "Driven by Innovation",
        description: "I'm passionate about leveraging artificial intelligence to solve real-world problems. My journey in AI/ML is fueled by curiosity and the desire to create intelligent systems that make a meaningful impact.",
        highlights: ["Machine Learning Enthusiast", "Problem Solver", "Innovation Seeker"]
      }
    },
    { 
      id: 'journey', 
      label: 'My Journey', 
      icon: Target,
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      content: {
        title: "Academic Excellence",
        description: "Currently pursuing M.Sc. in AI & ML with a stellar 9.316 CGPA, I've consistently demonstrated academic excellence while actively participating in hackathons and technical competitions.",
        highlights: ["Top Academic Performance", "Hackathon Winner", "Research Focused"]
      }
    },
    { 
      id: 'expertise', 
      label: 'What I Do', 
      icon: Code,
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
      content: {
        title: "Technical Expertise",
        description: "I specialize in developing intelligent systems, from machine learning models to full-stack applications. My work spans across computer vision, NLP, and modern web technologies.",
        highlights: ["AI/ML Development", "Full-Stack Engineering", "System Architecture"]
      }
    },
    { 
      id: 'vision', 
      label: 'My Vision', 
      icon: Lightbulb,
      gradient: 'from-indigo-600 to-pink-600',
      bgGradient: 'from-indigo-50 to-pink-50',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-pink-500',
      content: {
        title: "Future Aspirations",
        description: "I envision a future where AI seamlessly integrates with human needs, creating solutions that are both powerful and accessible. My goal is to contribute to this transformative technology landscape.",
        highlights: ["Ethical AI Development", "Human-Centered Design", "Continuous Learning"]
      }
    }
  ];

  const achievements = [
    { metric: "9.316", label: "CGPA", color: "text-blue-600", bg: "bg-blue-50" },
    { metric: "10+", label: "Projects", color: "text-green-600", bg: "bg-green-50" },
    { metric: "4+", label: "Hackathon Wins", color: "text-purple-600", bg: "bg-purple-50" },
    { metric: "3+", label: "Certifications", color: "text-orange-600", bg: "bg-orange-50" }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            About <span className="text-blue-600 font-medium">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate AI/ML developer crafting intelligent solutions for tomorrow's challenges
          </p>
        </div>

        {/* Achievement Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className={`${achievement.bg} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105`}>
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.metric}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Tabs */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-0 px-6 py-4 flex items-center justify-center space-x-2 transition-all duration-300 relative overflow-hidden ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-20"></div>
                )}
                <tab.icon className="w-5 h-5 relative z-10" />
                <span className="font-medium text-sm md:text-base relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className={`p-8 md:p-12 bg-gradient-to-br ${activeTabData?.bgGradient} transition-all duration-500`}>
            {tabs.map((tab) => (
              activeTab === tab.id && (
                <div key={tab.id} className="animate-fade-in">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl ${tab.iconBg} shadow-lg`}>
                      <tab.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                      {tab.content.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {tab.content.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {tab.content.highlights.map((highlight, index) => (
                      <div key={index} className="group relative">
                        <div className="absolute inset-0 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300"></div>
                        <div className="relative flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white/90 transition-all duration-300">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${tab.gradient} shadow-sm`}></div>
                          <span className="font-medium text-gray-800">{highlight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
