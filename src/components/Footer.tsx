import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import companyLogo from '../assets/company-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-steel-blue-600 to-steel-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">


        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link to="/" className="block">
              <img 
  src={companyLogo} 
  alt="Company Logo" 
  className="h-8 md:h-10 lg:h-12 w-auto max-w-[150px] md:max-w-[200px] lg:max-w-[250px] mb-4" 
/>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading EPC contractor specializing in utility-scale solar installations and industrial energy solutions since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-500">Enterprise Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Industrial Solutions</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/achievements" className="text-gray-300 hover:text-white transition-colors">Project Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Enterprise Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-500">Industrial Services</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Utility-Scale Solar</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Energy Storage Systems</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Commercial Installations</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Smart Monitoring</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">EPC Services</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">O&M Contracts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 w-5 h-5 text-yellow-500 mt-1" />
                <span className="text-gray-300 text-sm">Ground Floor, Raj Tower, Opp. Sant Nirankari Satsang Bhawan, Kargi Chowk, Dehradun(UK)-248001.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 w-5 h-5 text-yellow-500" />
                <div className="space-y-1">
                  <a href="tel:+919719295383" className="block text-gray-300 hover:text-white transition-colors text-sm">+91 9719295383</a>
                  <a href="tel:+918126475070" className="block text-gray-300 hover:text-white transition-colors text-sm">+91 8126475070</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 w-5 h-5 text-yellow-500" />
                <a href="mailto:info@urzaindia.com" className="text-gray-300 hover:text-white transition-colors text-sm">info@urzaindia.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Smera Pvt Ltd. All rights reserved. | ISO Certified EPC Contractor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;