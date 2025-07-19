import { Building2, Droplets, Lightbulb, Factory, Zap, Award, TrendingUp } from 'lucide-react';
import p7 from '../assets/Product/p7.jpg';
import a1 from '../assets/achivements/a1.jpg';
import a2 from '../assets/achivements/a2.jpg';
import a3 from '../assets/achivements/a3.jpg';
import a4 from '../assets/achivements/a4.jpg';
import PhotoCarousel from '../components/PhotoCarousel';
import { useEffect, useState } from 'react';

const Achievements = () => {
  const [counts, setCounts] = useState({
    capacity: 0,
    projects: 0,
    clients: 0,
    savings: 0
  });

  const targetCounts = {
    capacity: 10,
    projects: 20,
    clients: 15,
    savings: 1000
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    const incrementCounts = (step: number) => {
      setCounts({
        capacity: Math.min(Math.floor((targetCounts.capacity * step) / steps), targetCounts.capacity),
        projects: Math.min(Math.floor((targetCounts.projects * step) / steps), targetCounts.projects),
        clients: Math.min(Math.floor((targetCounts.clients * step) / steps), targetCounts.clients),
        savings: Math.min(Math.floor((targetCounts.savings * step) / steps), targetCounts.savings)
      });
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      incrementCounts(currentStep);
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Solar plant photos for the carousel
  const solarPlantPhotos = [
    {
      src: a1,
      alt: "Manufacturing Solar Installation",
      title: "Industrial Manufacturing Complex - 5.2 MW",
      description: "State-of-the-art rooftop solar installation powering a major manufacturing facility, reducing operational costs by 45% annually."
    },
    {
      src: a2,
      alt: "Commercial Solar Project",
      title: "Premium Hotel Chain - 2.8 MW",
      description: "Integrated solar solution for luxury hospitality sector, featuring advanced energy storage and smart grid connectivity."
    },
    {
      src: a3,
      alt: "Government Solar Installation",
      title: "Government Utility Project - 8.5 MW",
      description: "Large-scale ground-mounted solar farm contributing to state renewable energy targets with grid stabilization capabilities."
    },
    {
      src: a4,
      alt: "Utility Scale Solar Farm",
      title: "Utility-Scale Solar Farm - 12 MW",
      description: "Multi-megawatt solar installation with single-axis tracking systems, delivering clean energy to thousands of homes."
    },
    {
      src: p7,
      alt: "Commercial Rooftop System",
      title: "Commercial Complex - 3.5 MW",
      description: "High-capacity rooftop installation for office complex, featuring integrated monitoring systems and performance optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="relative bg-blue-900 text-white py-32 bg-cover bg-center" style={{ backgroundImage: `url(${p7})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial & Commercial Achievements</h1>
          <p className="text-xl max-w-4xl mx-auto">
            Celebrating our success in transforming India's industrial energy landscape through innovative solar solutions and sustainable infrastructure development.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">INDUSTRIAL IMPACT METRICS</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>

          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <img src={a4} alt="Industrial Solar Installation" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-900">{counts.capacity}+ MW</div>
              <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">Solar Capacity Installed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900">{counts.projects}+</div>
              <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">Industrial Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900">{counts.clients}+</div>
              <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900">{counts.savings === 1000 ? '1000+' : counts.savings}</div>
              <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">Tons CO₂ Reduced Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Photo Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Solar Installations Portfolio</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of industrial and commercial solar installations across India, 
              showcasing cutting-edge technology and exceptional engineering excellence.
            </p>
          </div>
          
          <PhotoCarousel 
            photos={solarPlantPhotos}
            autoPlay={true}
            interval={6000}
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Manufacturing & Industrial Sector */}
        <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4">
              <img src={a1} alt="Manufacturing Solar Solutions" className="w-full h-40 object-cover rounded-lg shadow" />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center mb-4">
                <Factory className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Manufacturing & Industrial Excellence</h2>
              </div>
              <ul className="space-y-3">
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  15+ MW of solar installations across manufacturing facilities, reducing operational costs by 40-60%
                </li>
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  Integrated energy storage systems providing 24/7 power security for critical manufacturing processes
                </li>
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  Advanced monitoring systems ensuring 99.5%+ uptime for industrial solar installations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Commercial & Hospitality Sector */}
        <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="md:w-1/3 p-4">
              <img src={a2} alt="Commercial Solar Projects" className="w-full h-40 object-cover rounded-lg shadow" />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Commercial & Hospitality Leadership</h2>
              </div>
              <ul className="space-y-3">
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-green-600 mr-2 text-lg">•</span>
                  Premium hotel chains including ITC Hotels, Marriott, and Lemon Tree Hotels powered by our solar solutions
                </li>
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-green-600 mr-2 text-lg">•</span>
                  3+ MW of commercial rooftop installations across office complexes and retail centers
                </li>
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-green-600 mr-2 text-lg">•</span>
                  Integrated solar thermal systems providing hot water solutions for hospitality sector, saving 2+ million units annually
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Government & Utility Projects */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4">
              <img src={a3} alt="Government Solar Projects" className="w-full h-40 object-cover rounded-lg shadow" />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Government & Utility Partnerships</h2>
              </div>
              <ul className="space-y-3">
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-yellow-600 mr-2 text-lg">•</span>
                  Strategic partnerships with government bodies including HIMURJA and UJVNL for renewable energy projects
                </li>
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-yellow-600 mr-2 text-lg">•</span>
                  Utility-scale solar installations contributing to state renewable energy targets and grid stability
                </li>
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-yellow-600 mr-2 text-lg">•</span>
                  Advanced grid integration solutions supporting India's renewable energy transition goals
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Performance Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">System Performance</h3>
              <p className="text-gray-600">99.5%+ average system uptime with predictive maintenance protocols</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Energy Efficiency</h3>
              <p className="text-gray-600">20%+ higher energy yield through advanced tracking and optimization systems</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">100% project delivery on time with guaranteed performance warranties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;