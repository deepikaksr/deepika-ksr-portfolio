
import React, { useState } from 'react';
import { Brain, Code2, Database, Globe, Cpu, Users } from 'lucide-react';

const Expertise = () => {
  const [selectedCategory, setSelectedCategory] = useState('ai-ml');

  const categories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      skills: [
        { name: 'Deep Learning', level: 90, description: 'Neural Networks, CNN, RNN' },
        { name: 'Machine Learning', level: 95, description: 'Supervised, Unsupervised Learning' },
        { name: 'Computer Vision', level: 85, description: 'Image Processing, Object Detection' },
        { name: 'NLP', level: 80, description: 'Text Processing, Sentiment Analysis' },
        { name: 'RAG Systems', level: 88, description: 'Retrieval-Augmented Generation' }
      ]
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: Code2,
      color: 'from-green-600 to-emerald-600',
      skills: [
        { name: 'Python', level: 95, description: 'Data Science, ML, Backend' },
        { name: 'JavaScript', level: 85, description: 'React, Node.js, ES6+' },
        { name: 'Java', level: 75, description: 'OOP, Data Structures' },
        { name: 'C', level: 70, description: 'Systems Programming' }
      ]
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      icon: Globe,
      color: 'from-blue-600 to-cyan-600',
      skills: [
        { name: 'React.js', level: 90, description: 'Modern UI Development' },
        { name: 'Node.js', level: 80, description: 'Backend API Development' },
        { name: 'MongoDB', level: 85, description: 'NoSQL Database' },
        { name: 'MySQL', level: 80, description: 'Relational Database' },
        { name: 'Flutter', level: 75, description: 'Cross-platform Mobile' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Frameworks',
      icon: Cpu,
      color: 'from-orange-600 to-red-600',
      skills: [
        { name: 'TensorFlow', level: 90, description: 'Deep Learning Framework' },
        { name: 'Scikit-learn', level: 85, description: 'ML Library' },
        { name: 'Pandas', level: 88, description: 'Data Manipulation' },
        { name: 'AWS', level: 70, description: 'Cloud Services' },
        { name: 'Docker', level: 65, description: 'Containerization' }
      ]
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: Users,
      color: 'from-pink-600 to-rose-600',
      skills: [
        { name: 'Problem Solving', level: 95, description: 'Analytical Thinking' },
        { name: 'Team Collaboration', level: 90, description: 'Cross-functional Teams' },
        { name: 'Communication', level: 88, description: 'Technical & Non-technical' },
        { name: 'Adaptability', level: 92, description: 'Learning New Technologies' }
      ]
    }
  ];

  const selectedCat = categories.find(cat => cat.id === selectedCategory);

  return (
    <section id="expertise" className="py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Skills & <span className="text-blue-600 font-medium">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning AI/ML, full-stack development, and beyond
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-4">
            <div className="space-y-3 sticky top-32">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${
                      selectedCategory === category.id 
                        ? 'bg-white/20' 
                        : 'bg-white'
                    }`}>
                      <category.icon className={`w-6 h-6 ${
                        selectedCategory === category.id 
                          ? 'text-white' 
                          : 'text-gray-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                      <p className={`text-sm ${
                        selectedCategory === category.id 
                          ? 'text-white/80' 
                          : 'text-gray-500'
                      }`}>
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedCat?.color}`}>
                    <selectedCat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedCat?.title}</h3>
                    <p className="text-gray-600">Professional proficiency levels</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {selectedCat?.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                      <span className="text-sm font-bold text-gray-700">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${selectedCat?.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
