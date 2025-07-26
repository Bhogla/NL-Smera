import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="company-logo transition-transform group-hover:scale-105"></div>
              <div className="ml-3 hidden sm:block">
                <span className={`text-base md:text-lg font-bold block transition-colors ${
                  isScrolled ? 'text-burnt-yellow-600' : 'text-burnt-yellow-400'
                }`}>
                  An ISO Certified
                </span>
                <span className={`text-xs md:text-sm block transition-colors ${
                  isScrolled ? 'text-steel-blue-700' : 'text-white/90'
                }`}>
                  EPC Contractor
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 relative group ${
                  location.pathname === item.path
                    ? isScrolled
                      ? 'text-steel-blue-800 bg-steel-blue-50'
                      : 'text-burnt-yellow-400 bg-white/10'
                    : isScrolled
                      ? 'text-charcoal hover:text-steel-blue-800 hover:bg-gray-50'
                      : 'text-white hover:text-burnt-yellow-400 hover:bg-white/10'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                    isScrolled ? 'bg-steel-blue-800' : 'bg-burnt-yellow-400'
                  }`}></div>
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className={`ml-4 px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
                isScrolled
                  ? 'bg-forest-green-600 hover:bg-forest-green-700 text-white shadow-lg'
                  : 'bg-burnt-yellow-500 hover:bg-burnt-yellow-600 text-steel-blue-800 shadow-xl'
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled 
                  ? 'text-charcoal hover:text-steel-blue-800 hover:bg-gray-100' 
                  : 'text-white hover:text-burnt-yellow-400 hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-100">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-steel-blue-800 bg-steel-blue-50 border-l-4 border-steel-blue-600'
                      : 'text-charcoal hover:text-steel-blue-800 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <Link
                to="/contact"
                className="block mt-4 px-4 py-3 bg-forest-green-600 hover:bg-forest-green-700 text-white text-center rounded-lg font-semibold transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;