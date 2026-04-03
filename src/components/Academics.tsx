
import React from 'react';
import { Award, BookOpen, Calendar, Trophy, Star, Target } from 'lucide-react';

const Academics = () => {
  const achievements = [
    {
      title: 'OnSpot-Ideathon',
      position: 'Second Runner-up',
      icon: Trophy,
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      title: 'HackRush Hackathon',
      position: 'Runner-up (AI/ML)',
      icon: Award,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      title: 'Logo Design Contest',
      position: 'Winner',
      icon: Star,
      color: 'text-green-600 bg-green-100'
    },
    {
      title: 'VisionX Object Detection',
      position: 'Winner',
      icon: Target,
      color: 'text-blue-600 bg-blue-100'
    }
  ];

  const certifications = [
    {
      title: 'Cyber Security',
      provider: 'NPTEL',
      status: 'Completed',
      level: 'Advanced'
    },
    {
      title: 'Full-Stack (MERN) Development',
      provider: 'Maiyyam',
      status: 'Completed',
      level: 'Professional'
    },
    {
      title: 'UI/UX Design',
      provider: 'Maiyyam',
      status: 'Completed',
      level: 'Intermediate'
    }
  ];

  const activities = [
    'Editor at FOSS Club (2022-2023)',
    'Active participant in technical workshops',
    'Regular attendee of intra/inter-college events',
    'Contributor to open-source projects'
  ];

  return (
    <section id="academics" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Academic <span className="text-blue-600 font-medium">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A journey of continuous learning, achievements, and academic distinction
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Education Card */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Current Education</h3>
                    <p className="text-white/80">Academic Pursuit</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      M.Sc. Artificial Intelligence and Machine Learning (Integrated)
                    </h4>
                    <p className="text-white/90">Coimbatore Institute of Technology</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold mb-1">9.316</div>
                      <div className="text-white/80 text-sm">Current CGPA</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">2022-Present</div>
                      <div className="text-white/80 text-sm">Academic Period</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">Top 5%</div>
                <div className="text-gray-600">Class Ranking</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5th</div>
                <div className="text-gray-600">Current Semester</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">3+</div>
                <div className="text-gray-600">Certifications</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
              <Trophy className="w-8 h-8 text-yellow-600" />
              <span>Achievements</span>
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${achievement.color}`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Activities */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Award className="w-8 h-8 text-blue-600" />
                <span>Certifications</span>
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{cert.provider}</p>
                    <span className="text-xs text-gray-500">{cert.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-green-600" />
                <span>Extra Curricular</span>
              </h3>
              
              <div className="space-y-3">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{activity}</span>
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

export default Academics;
