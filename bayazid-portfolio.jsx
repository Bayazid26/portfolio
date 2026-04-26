import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Bayazid Ahmed
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors ${
                  activeSection === item ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-sm font-medium text-slate-300 hover:text-white py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Bayazid
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Ahmed</span>
              </h1>
              <p className="text-xl text-cyan-400 font-medium mb-2">Backend Developer | CSE Student</p>
              <p className="text-lg text-slate-300">Open Mapping Contributor | Community Leader</p>
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
              Building scalable systems and impactful solutions through code and data. Passionate about backend architecture, geospatial technologies, and community-driven initiatives.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-slate-600 text-white font-medium rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="https://github.com/Bayazid26" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bayazid-ahmed-49490625b/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:232400017@easternuni.edu.bd" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-full h-full rounded-full border-4 border-blue-400/30 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
                <img
                  src="https://i.postimg.cc/zvQ0tKMN/My-avater.jpg"
                  alt="Bayazid Ahmed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="text-slate-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Who I Am</h3>
                <p className="text-slate-300 leading-relaxed">
                  I'm a Computer Science & Engineering student at Eastern University, Bangladesh, with a strong passion for backend development and scalable system architecture.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">My Focus</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">→</span>
                    <span>Building robust RESTful APIs with Spring Boot and Node.js</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">→</span>
                    <span>Contributing to open mapping and geospatial data initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">→</span>
                    <span>Leading community-driven tech initiatives and mentorship</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Career Goal</h3>
                <p className="text-slate-300 leading-relaxed">
                  Focused on creating scalable, real-world software systems that solve meaningful problems and contribute to impactful technology ecosystems.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Education</h3>
                <div>
                  <h4 className="font-bold text-white mb-2">Bachelor of Science in Computer Science & Engineering</h4>
                  <p className="text-slate-400 mb-4">Eastern University, Bangladesh</p>
                  <p className="text-slate-300 text-sm">
                    <span className="text-cyan-400 font-medium">Relevant Coursework:</span> Data Communication, Microprocessor & Microcontroller, Numerical Methods, Digital Logic Design
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Location</h3>
                <div className="flex items-center gap-3">
                  <MapPin className="text-cyan-400" size={20} />
                  <span className="text-slate-300">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Programming Languages',
                skills: ['Java', 'JavaScript', 'C++']
              },
              {
                title: 'Backend Technologies',
                skills: ['Spring Boot', 'Node.js', 'Express', 'REST APIs', 'MongoDB']
              },
              {
                title: 'Frontend Basics',
                skills: ['React', 'JavaScript', 'Tailwind CSS']
              },
              {
                title: 'Core Competencies',
                skills: ['Data Structures', 'Algorithms', 'API Development', 'Database Design']
              },
              {
                title: 'Tools & Platforms',
                skills: ['Git', 'Postman', 'MongoDB Atlas', 'Vercel', 'Render']
              },
              {
                title: 'Soft Skills',
                skills: ['Technical Communication', 'Leadership', 'Team Collaboration', 'Problem Solving']
              }
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/30 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-blue-400 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-sm rounded-full hover:bg-blue-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'My-Expense',
                description: 'Personal expense tracking system with RESTful backend',
                tech: ['Spring Boot', 'Java', 'REST APIs', 'Data Management'],
                highlights: 'CRUD operations, Clean architecture, Data handling'
              },
              {
                title: 'TripMapper',
                description: 'Travel and mapping-based web application',
                tech: ['React', 'Node.js', 'Express', 'MongoDB'],
                highlights: 'Full-stack MERN application, Deployed on Vercel & Render'
              },
              {
                title: 'Open Mapping Contributions',
                description: 'Active participation in geospatial data projects',
                tech: ['GIS', 'Data Analysis', 'Mapping APIs'],
                highlights: 'Real-world datasets, Community-driven initiatives'
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-slate-700/50 text-cyan-300 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-400 border-t border-slate-700 pt-3">
                  <span className="text-cyan-400">Key highlights:</span> {project.highlights}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Leadership */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience & Leadership</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                role: 'General Secretary',
                organization: 'Eastern University Public Health Club',
                period: 'January 2026 – Present',
                color: 'blue'
              },
              {
                role: 'Vice President',
                organization: 'YouthMappers at Eastern University',
                period: '2026 – Present',
                color: 'cyan'
              },
              {
                role: 'General Secretary',
                organization: 'YouthMappers at Eastern University',
                period: 'January 2024 – December 2025',
                color: 'blue'
              },
              {
                role: 'Campus Ambassador',
                organization: 'TECHDATA SQUARES',
                period: 'March 2024 – Present',
                color: 'cyan'
              },
              {
                role: 'Contributor',
                organization: 'Open Mapping Hub - Asia-Pacific',
                period: 'November 2024',
                color: 'blue'
              }
            ].map((exp, idx) => (
              <div
                key={idx}
                className="border-l-4 border-blue-400 pl-6 py-4 hover:pl-8 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-blue-400 font-medium mb-1">{exp.organization}</p>
                <p className="text-slate-400 text-sm">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Backend API Development (Spring Boot)',
              'Basic Frontend Development (React)',
              'Database Design and Integration (MongoDB)',
              'Mapping & GIS Contributions',
              'Technical Concept Simplification',
              'REST API Development'
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-200">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-slate-400 text-center mb-12">Let's connect and discuss opportunities for collaboration</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:232400017@easternuni.edu.bd"
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-400/50 transition-colors group"
            >
              <Mail className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-bold text-white mb-2">Email</h3>
              <p className="text-slate-400 text-sm break-all">232400017@easternuni.edu.bd</p>
            </a>

            <a
              href="https://www.linkedin.com/in/bayazid-ahmed-49490625b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-400/50 transition-colors group"
            >
              <Linkedin className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-slate-400 text-sm">Connect with me on LinkedIn</p>
            </a>

            <a
              href="https://github.com/Bayazid26"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-400/50 transition-colors group"
            >
              <Github className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-bold text-white mb-2">GitHub</h3>
              <p className="text-slate-400 text-sm">Check out my repositories</p>
            </a>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6">
              <MapPin className="text-cyan-400 mb-3" size={28} />
              <h3 className="font-bold text-white mb-2">Location</h3>
              <p className="text-slate-400 text-sm">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>&copy; 2024 Bayazid Ahmed. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
