import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Sun, Zap, Building2, Award } from 'lucide-react';
import companyLogo from '../assets/company-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Industrial Solutions' },
    { path: '/about', label: 'About Us' },
    { path: '/achievements', label: 'Project Portfolio' },
    { path: '/contact', label: 'Smera Contact' },
    { path: '/privacy-policy', label: 'Privacy Policy' }
  ];

  const services = [
    { path: '/products', label: 'Utility-Scale Solar', icon: <Sun className="h-4 w-4" /> },
    { path: '/products', label: 'Energy Storage Systems', icon: <Zap className="h-4 w-4" /> },
    { path: '/products', label: 'Commercial Installations', icon: <Building2 className="h-4 w-4" /> },
    { path: '/products', label: 'Smart Monitoring', icon: <Award className="h-4 w-4" /> },
    { path: '/products', label: 'EPC Services', icon: <Sun className="h-4 w-4" /> },
    { path: '/products', label: 'O&M Contracts', icon: <Zap className="h-4 w-4" /> }
  ];

  const socialLinks = [
    { href: '#', icon: <Facebook size={20} />, label: 'Facebook' },
    { href: '#', icon: <Twitter size={20} />, label: 'Twitter' },
    { href: '#', icon: <Linkedin size={20} />, label: 'LinkedIn' },
    { href: '#', icon: <Instagram size={20} />, label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-steel-blue-800 via-steel-blue-900 to-steel-blue-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-burnt-yellow-500/10 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="block group mb-6">
                <img 
                  src={companyLogo} 
                  alt="Company Logo" 
                  className="h-12 md:h-16 w-auto max-w-[200px] mb-4 group-hover:scale-105 transition-transform" 
                />
              </Link>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Leading EPC contractor specializing in utility-scale solar installations and industrial energy solutions since 2015. ISO certified with 18+ MW of successful installations.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="group bg-white/10 hover:bg-burnt-yellow-500 text-gray-300 hover:text-steel-blue-800 p-3 rounded-xl transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-burnt-yellow-400 flex items-center">
                <ArrowRight className="h-5 w-5 mr-2" />
                Smera Solutions
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-burnt-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-burnt-yellow-400 flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Industrial Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path} 
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center group"
                    >
                      <span className="text-burnt-yellow-500 mr-3 group-hover:scale-125 transition-transform">
                        {service.icon}
                      </span>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-burnt-yellow-400 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="bg-burnt-yellow-500/20 p-2 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-burnt-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Headquarters</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      1/1 Ground Floor, Raj Tower, Opp. Sant Nirankari Satsang Bhawan, Kargi Chowk, Dehradun(UK)-248001.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4">
                  <div className="bg-burnt-yellow-500/20 p-2 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 text-burnt-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <div className="space-y-1">
                      <a href="tel:+919719295383" className="block text-gray-300 hover:text-burnt-yellow-400 transition-colors text-sm">
                        +91 9719295383
                      </a>
                      <a href="tel:+918126475070" className="block text-gray-300 hover:text-burnt-yellow-400 transition-colors text-sm">
                        +91 8126475070
                      </a>
                    </div>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4">
                  <div className="bg-burnt-yellow-500/20 p-2 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 text-burnt-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a href="mailto:smerasolar@gmail.com" className="text-gray-300 hover:text-burnt-yellow-400 transition-colors text-sm">
                      smerasolar@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gradient-to-r from-burnt-yellow-500/10 to-steel-blue-700/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Smera</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest updates on solar technology, industry insights, and our project achievements delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-burnt-yellow-500 focus:border-transparent"
                />
                <button className="bg-burnt-yellow-500 hover:bg-burnt-yellow-600 text-steel-blue-800 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p>&copy; {currentYear} SMERA PVT LTD. All rights reserved.</p>
                <p className="mt-1">ISO Certified EPC Contractor | Powering India's Renewable Future</p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-burnt-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link to="/contact" className="text-gray-400 hover:text-burnt-yellow-400 transition-colors">
                  Terms of Service
                </Link>
                <span className="text-gray-600">|</span>
                <span className="text-gray-400">Made with ❤️ in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;