
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'deepikaksramesh@gmail.com',
      href: 'mailto:deepikaksramesh@gmail.com',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      hoverGradient: 'hover:from-green-600 hover:to-green-700',
      textColor: 'text-green-600',
      hoverTextColor: 'group-hover:text-white'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9176362643',
      href: 'tel:+919176362643',
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      hoverGradient: 'hover:from-orange-600 hover:to-orange-700',
      textColor: 'text-orange-600',
      hoverTextColor: 'group-hover:text-white'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'deepikaksr',
      href: 'https://github.com/deepikaksr',
      gradient: 'from-slate-600 to-slate-700',
      bgGradient: 'from-slate-50 to-slate-100',
      hoverGradient: 'hover:from-slate-700 hover:to-slate-800',
      textColor: 'text-slate-600',
      hoverTextColor: 'group-hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Deepika KSR',
      href: 'https://www.linkedin.com/in/deepika-ksr-9a3330254',
      gradient: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-50 to-blue-100',
      hoverGradient: 'hover:from-blue-700 hover:to-blue-800',
      textColor: 'text-blue-600',
      hoverTextColor: 'group-hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-medium">Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Open to discussing opportunities in AI/ML, full-stack development, 
            and innovative technology projects. Let's connect and explore possibilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {contactInfo.map((contact, index) => (
            <a 
              key={index} 
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group flex items-center space-x-4 p-6 bg-gradient-to-br ${contact.bgGradient} rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 backdrop-blur-sm ${contact.hoverGradient} hover:scale-105 transform`}
            >
              <div className={`p-4 rounded-xl bg-gradient-to-br ${contact.gradient} ${contact.textColor} group-hover:bg-gradient-to-br ${contact.hoverTextColor} transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                <contact.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-500 mb-1 group-hover:text-gray-300 transition-colors duration-300">
                  {contact.label}
                </p>
                <p className={`${contact.textColor} font-semibold text-lg group-hover:text-white transition-colors duration-300`}>
                  {contact.value}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
