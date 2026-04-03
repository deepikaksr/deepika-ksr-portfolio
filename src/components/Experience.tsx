import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Researcher Intern',
      company: 'Microsoft Research Lab India Pvt. Ltd.',
      location: 'Bengaluru',
      duration: 'July 2025 - December 2025',
      description: "Worked on AI Operation in Multi-Agent Systems, built frameworks for autonomous workflows, Advanced R&D in reinforcement learning and query reformulation in agentic systems for Microsoft's M365 suite.",
      gradient: 'from-blue-600 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      id: 2,
      role: 'Mobile Application Developer Intern',
      company: 'Joslin Pharmaa India Pvt. Ltd.',
      location: 'Coimbatore',
      duration: 'June 2025 - July 2025',
      description: "Developed a Flutter + Firebase mobile application including GPS tracking, leave management, reporting dashboards, and document modules, delivering real-time data sync and streamlined field workflows.",
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Professional <span className="text-blue-600 font-medium">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey through the industry, applying AI/ML and software engineering to real-world challenges
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${exp.gradient}`}></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 ml-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.gradient} text-white`}>
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-xl text-gray-700 font-medium">{exp.company}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 font-medium">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${exp.bgGradient}`}>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
