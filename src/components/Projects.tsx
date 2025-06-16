
import React, { useState } from 'react';
import { Github, ExternalLink, Brain, Database, Eye, Globe } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', count: 4 },
    { id: 'ai-ml', label: 'AI/ML', count: 3 },
    { id: 'fullstack', label: 'Full-Stack', count: 1 },
    { id: 'computer-vision', label: 'Computer Vision', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Engagement Automation Platform',
      category: 'ai-ml',
      description: 'Comprehensive platform leveraging Flask, SQLite, PRAW, BERTopic, and Google Gemini 1.5 Flash for automated Reddit analysis and AI-driven content generation.',
      longDescription: 'Advanced automation platform that analyzes Reddit discussions, extracts insights using topic modeling, and generates brand-aligned marketing content with sentiment analysis.',
      technologies: ['Flask', 'SQLite', 'PRAW', 'BERTopic', 'Sentence Transformers', 'Google Gemini'],
      icon: Brain,
      gradient: 'from-purple-600 via-blue-600 to-indigo-600',
      features: ['Automated Reddit Analysis', 'AI Content Generation', 'Topic Modeling', 'Sentiment Scoring'],
      metrics: { accuracy: '94%', processing: '1000+ posts/min', engagement: '+150%' },
      githubUrl: 'https://github.com/deepikaksr/ai-marketing-automation-community',
      demoUrl: '#'
    },
    {
      id: 2,
      title: 'RAG-Based Multimodal Chatbot',
      category: 'ai-ml',
      description: 'Intelligent document and media retrieval chatbot using SQLite, TF-IDF, Pytesseract, FFmpeg, Groq Whisper API, and Google Gemini.',
      longDescription: 'Sophisticated chatbot system that processes and retrieves information from multiple data types including text, images, videos, and audio files using semantic search.',
      technologies: ['SQLite', 'TF-IDF', 'Pytesseract', 'FFmpeg', 'Groq Whisper API', 'Google Gemini'],
      icon: Database,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      features: ['Semantic Search', 'Multimodal Processing', 'Document Analysis', 'Audio Transcription'],
      metrics: { retrieval: '0.3s avg', accuracy: '96%', formats: '10+ types' },
      githubUrl: 'https://github.com/deepikaksr/RAG-chatbot',
      demoUrl: '#'
    },
    {
      id: 3,
      title: 'Hand Gesture Interpreter',
      category: 'computer-vision',
      description: 'Real-time hand gesture recognition system using MediaPipe, OpenCV, k-NN, and TensorFlow Teachable Machine.',
      longDescription: 'Advanced computer vision system that recognizes and interprets hand gestures in real-time with high precision for intuitive human-computer interaction.',
      technologies: ['MediaPipe', 'OpenCV', 'k-NN', 'TensorFlow', 'Teachable Machine'],
      icon: Eye,
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      features: ['Real-time Detection', 'Gesture Recognition', 'Smooth Predictions', 'Multiple Gestures'],
      metrics: { latency: '<50ms', accuracy: '98%', gestures: '15+ types' },
      githubUrl: 'https://github.com/deepikaksr/hand_gesture_interpreter',
      demoUrl: '#'
    },
    {
      id: 4,
      title: 'Travel Expense Manager',
      category: 'fullstack',
      description: 'Full-stack web application using MERN stack for comprehensive travel planning and expense tracking.',
      longDescription: 'Complete travel management solution with expense tracking, budget visualization, and detailed analytics for efficient trip planning and financial management.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      icon: Globe,
      gradient: 'from-indigo-600 via-blue-600 to-purple-600',
      features: ['Travel Planning', 'Expense Tracking', 'Budget Management', 'Analytics Dashboard'],
      metrics: { users: '500+', savings: '25% avg', features: '20+' },
      githubUrl: 'https://github.com/deepikaksr/travel-toes',
      demoUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Featured <span className="text-blue-600 font-medium">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions showcasing expertise in AI/ML and full-stack development
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 h-[600px]">
          {/* Project List */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto pr-4">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedProject.id === project.id
                      ? 'bg-white shadow-lg border-2 border-blue-200 scale-102'
                      : 'bg-white/70 hover:bg-white hover:shadow-md border border-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient}`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 line-clamp-2">{project.title}</h3>
                      <span className="text-sm text-gray-500 capitalize">{project.category.replace('-', ' ')}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
              <div className={`h-2 bg-gradient-to-r ${selectedProject.gradient}`}></div>
              
              <div className="flex-1 p-8 overflow-y-auto">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedProject.gradient}`}>
                    <selectedProject.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                    <span className="text-gray-500 capitalize">{selectedProject.category.replace('-', ' ')}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{selectedProject.longDescription}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Project Metrics</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(([key, value], index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-lg text-gray-900">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  <button 
                    onClick={() => handleGithubClick(selectedProject.githubUrl)}
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
