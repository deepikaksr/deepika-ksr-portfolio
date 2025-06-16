import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C', 'Java'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Full-Stack Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'MySQL', 'MongoDB', 'Flutter'],
      color: 'from-emerald-600 to-emerald-700'
    },
    {
      title: 'ML Architectures',
      skills: ['Artificial Neural Network', 'Deep Learning', 'Retrieval-Augmented Generation'],
      color: 'from-purple-600 to-purple-700'
    },
    {
      title: 'Libraries and Tools',
      skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      color: 'from-orange-600 to-orange-700'
    },
    {
      title: 'Cloud Platforms',
      skills: ['AWS (S3, EC2)', 'Docker (Basics)'],
      color: 'from-indigo-600 to-indigo-700'
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Adaptability', 'Team Collaboration'],
      color: 'from-rose-600 to-rose-700'
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-6`}>
                <div className="w-6 h-6 bg-white rounded opacity-90"></div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
