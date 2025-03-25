import React, { useState, useEffect, FormEvent } from 'react';
import { Lock, Server, Globe, Users, FileCheck, Zap, Trophy, Target } from 'lucide-react';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollAnimation } from './components/ScrollAnimation';
import { Hero } from './components/Hero';
import { ZeroLogo } from './components/ZeroLogo';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: "Zero Knowledge Security",
          from_name: formData.company,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
          to_email: "mithat@zeroknowledges.com"
        }
      );

      toast.success('Message sent successfully!');
      setFormData({ company: '', email: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Toaster position="top-right" />
      {/* Navigation */}
      <div className="fixed w-full z-50 px-4 top-6 animate-fade-in">
        <nav className="max-w-7xl mx-auto bg-gray-900/30 backdrop-blur-sm rounded-3xl border-2 border-gray-800/30 shadow-xl shadow-black/10">
          <div className="px-6 sm:px-8 lg:px-10">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <ZeroLogo className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl company-name bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  Zero Knowledge Security
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a 
                  href="#about" 
                  className="text-gray-300 hover:bg-gradient-to-r hover:from-primary hover:to-primary-hover hover:bg-clip-text hover:text-transparent transition-all hover:scale-105"
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className="text-gray-300 hover:bg-gradient-to-r hover:from-primary hover:to-primary-hover hover:bg-clip-text hover:text-transparent transition-all hover:scale-105"
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:bg-gradient-to-r hover:from-primary hover:to-primary-hover hover:bg-clip-text hover:text-transparent transition-all hover:scale-105"
                >
                  Contact
                </a>
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-primary to-primary-hover text-gray-900 px-6 py-2 rounded-full hover:scale-105 transition-all font-semibold"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(#cc73f8_2px,transparent_2px),linear-gradient(to_right,#cc73f8_2px,transparent_2px)] bg-[size:48px_48px] [opacity:0.03] animate-grid"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollAnimation className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-[#cc73f8] rounded-3xl blur-[100px] opacity-20 animate-pulse"></div>
              <h2 className="relative text-4xl font-bold text-white mb-6 bg-gradient-to-r from-[#cc73f8] to-[#b85de4] bg-clip-text text-transparent">
                About Zero Knowledge Security
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to revolutionize cybersecurity through innovative solutions and unparalleled expertise.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollAnimation>
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/60 p-8 transition-all hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We are dedicated to democratizing access to world-class cybersecurity expertise, ensuring businesses of all sizes can operate securely in an ever-evolving digital landscape.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/60 p-8 transition-all hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the go-to cybersecurity partner for enterprises, empowering organizations with cutting-edge security solutions that are proactive, scalable, and innovative.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ZeroLogo className="h-8 w-8 text-primary" />,
                title: "Expert Team",
                description: "Industry-leading security professionals"
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Client Focus",
                description: "Tailored solutions for your needs"
              },
              {
                icon: <Trophy className="h-8 w-8 text-primary" />,
                title: "Excellence",
                description: "Committed to the highest standards"
              },
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Innovation",
                description: "Cutting-edge security solutions"
              }
            ].map((value, index) => (
              <ScrollAnimation key={index}>
                <div className="relative group">
                  <div className="absolute -inset-3 bg-primary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative p-6 rounded-xl border border-gray-800/60 hover:border-primary/30 transition-all hover:scale-105 bg-gray-900/80 backdrop-blur-sm text-center">
                    <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit mx-auto group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(#cc73f8_1.5px,transparent_1.5px),linear-gradient(to_right,#cc73f8_1.5px,transparent_1.5px)] bg-[size:44px_44px] [opacity:0.03] animate-grid"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Strategic Services</h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="h-8 w-8 text-primary" />,
                title: "Security Assessment",
                description: "Comprehensive evaluation of your security posture with actionable insights."
              },
              {
                icon: <Server className="h-8 w-8 text-primary" />,
                title: "Infrastructure Security",
                description: "Protect your critical infrastructure with advanced security measures."
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "Cloud Security",
                description: "Secure cloud solutions for modern enterprise environments."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Security Training",
                description: "Employee security awareness and technical training programs."
              },
              {
                icon: <FileCheck className="h-8 w-8 text-primary" />,
                title: "Compliance & Audit",
                description: "Meet regulatory requirements with our compliance expertise."
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Incident Response",
                description: "24/7 security incident detection and response capabilities."
              }
            ].map((service, index) => (
              <ScrollAnimation key={index}>
                <div className="group relative">
                  <div className="absolute -inset-3 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative p-6 rounded-xl border border-gray-800/60 hover:border-primary/30 transition-all hover:scale-105 bg-gray-900/80 backdrop-blur-sm">
                    <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-all group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "100%", label: "Commitment to Security" },
              { value: "99.9%", label: "Threat Detection Rate" },
              { value: "24/7", label: "Security Monitoring" }
            ].map((stat, index) => (
              <ScrollAnimation key={index}>
                <div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-[#cc73f8] rounded-3xl blur-[100px] opacity-20 animate-pulse"></div>
              <h2 className="relative text-3xl font-bold mb-4 bg-gradient-to-r from-[#cc73f8] to-[#b85de4] bg-clip-text text-transparent">
                Ready to Secure Your Business?
              </h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Contact us today for a free security assessment and discover how we can protect your organization.
            </p>
          </ScrollAnimation>
          <ScrollAnimation className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="transform transition-all hover:scale-[1.01]">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div className="transform transition-all hover:scale-[1.01]">
                <input
                  type="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div className="transform transition-all hover:scale-[1.01]">
                <textarea
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary text-gray-900 px-8 py-3 rounded-lg transition-all font-semibold ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-hover hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Get in Touch'}
              </button>
            </form>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ZeroLogo className="h-6 w-6 text-primary" />
                <span className="ml-2 company-name text-white">Zero Knowledge Security</span>
              </div>
              <p className="text-gray-400 text-sm">
                Leading the way in enterprise cybersecurity solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary transition-colors cursor-pointer">Security Assessment</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Infrastructure Security</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Cloud Security</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Compliance & Audit</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Support</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2025 Zero Knowledge Security. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;