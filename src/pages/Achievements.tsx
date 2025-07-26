import { Building2, Droplets, Lightbulb, Factory, Zap, Award, TrendingUp, Filter, Grid, List, Search, MapPin, Calendar, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import p7 from '../assets/Product/p7.jpg';
import a1 from '../assets/achivements/a1.jpg';
import a2 from '../assets/achivements/a2.jpg';
import a3 from '../assets/achivements/a3.jpg';
import a4 from '../assets/achivements/a4.jpg';
import PhotoCarousel from '../components/PhotoCarousel';

const Achievements = () => {
  const [counts, setCounts] = useState({
    capacity: 0,
    projects: 0,
    clients: 0,
    savings: 0
  });

  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projects = [
    {
      id: 1,
      title: "Industrial Manufacturing Complex - 5.2 MW",
      category: "industrial",
      location: "Gujarat, India",
      capacity: "5.2 MW",
      year: "2024",
      client: "Manufacturing Industries Ltd.",
      image: a1,
      description: "State-of-the-art rooftop solar installation powering a major manufacturing facility, reducing operational costs by 45% annually.",
      features: ["Advanced monitoring systems", "Grid-tie capability", "25-year warranty"],
      savings: "₹2.5 Cr annually"
    },
    {
      id: 2,
      title: "Premium Hotel Chain - 2.8 MW",
      category: "commercial",
      location: "Rajasthan, India",
      capacity: "2.8 MW",
      year: "2024",
      client: "Luxury Hotels Group",
      image: a2,
      description: "Integrated solar solution for luxury hospitality sector, featuring advanced energy storage and smart grid connectivity.",
      features: ["Energy storage integration", "Smart grid connectivity", "Remote monitoring"],
      savings: "₹1.8 Cr annually"
    },
    {
      id: 3,
      title: "Government Utility Project - 8.5 MW",
      category: "industrial",
      location: "Uttarakhand, India",
      capacity: "8.5 MW",
      year: "2023",
      client: "State Government",
      image: a3,
      description: "Large-scale ground-mounted solar farm contributing to state renewable energy targets with grid stabilization capabilities.",
      features: ["Grid stabilization", "Utility-scale design", "Government partnership"],
      savings: "₹4.2 Cr annually"
    },
    {
      id: 4,
      title: "Utility-Scale Solar Farm - 12 MW",
      category: "industrial",
      location: "Haryana, India",
      capacity: "12 MW",
      year: "2023",
      client: "Power Generation Company",
      image: a4,
      description: "Multi-megawatt solar installation with single-axis tracking systems, delivering clean energy to thousands of homes.",
      features: ["Single-axis tracking", "Multi-megawatt capacity", "Grid integration"],
      savings: "₹6.5 Cr annually"
    },
    {
      id: 5,
      title: "Commercial Complex - 3.5 MW",
      category: "commercial",
      location: "Delhi NCR, India",
      capacity: "3.5 MW",
      year: "2024",
      client: "Office Complex Ltd.",
      image: p7,
      description: "High-capacity rooftop installation for office complex, featuring integrated monitoring systems and performance optimization.",
      features: ["Performance optimization", "Integrated monitoring", "High-capacity design"],
      savings: "₹2.1 Cr annually"
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

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
      {/* Enhanced Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${p7})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block bg-burnt-yellow-500/20 text-burnt-yellow-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-burnt-yellow-500/30">
                Our Portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Industrial & Commercial 
              <span className="text-burnt-yellow-400"> Achievements</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl leading-relaxed opacity-90">
              Celebrating our success in transforming India's industrial energy landscape through innovative solar solutions and sustainable infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-steel-blue-100 text-steel-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Impact Metrics
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">INDUSTRIAL IMPACT METRICS</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { count: counts.capacity, suffix: "+ MW", label: "Solar Capacity Installed", icon: <Zap className="h-8 w-8" /> },
              { count: counts.projects, suffix: "+", label: "Industrial Projects", icon: <Factory className="h-8 w-8" /> },
              { count: counts.clients, suffix: "+", label: "Smera Clients", icon: <Users className="h-8 w-8" /> },
              { count: counts.savings === 1000 ? '1000+' : counts.savings, suffix: "", label: "Tons CO₂ Reduced Annually", icon: <Award className="h-8 w-8" /> }
            ].map((stat, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="bg-gradient-to-br from-steel-blue-500 to-steel-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-steel-blue-800 mb-2">{stat.count}{stat.suffix}</div>
                <div className="text-sm font-medium text-charcoal uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src={a4} alt="Industrial Solar Installation" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Powering India's Industrial Future</h3>
              <p className="text-lg opacity-90">Leading the renewable energy transformation across industrial sectors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Photo Carousel */}
      <section className="py-20 bg-gradient-to-br from-steel-blue-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-steel-blue-100 text-steel-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Project Gallery
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Our Solar Installations Portfolio</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-charcoal max-w-4xl mx-auto leading-relaxed">
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

      {/* Enhanced Project Portfolio with Filtering */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-forest-green-100 text-forest-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Project Portfolio
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Our Recent Projects</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          {/* Filter and View Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-charcoal" />
              <div className="flex bg-gray-100 rounded-lg p-1">
                {[
                  { key: 'all', label: 'All Projects' },
                  { key: 'industrial', label: 'Industrial' },
                  { key: 'commercial', label: 'Commercial' }
                ].map((filterOption) => (
                  <button
                    key={filterOption.key}
                    onClick={() => setFilter(filterOption.key)}
                    className={`px-4 py-2 rounded-md font-medium transition-all ${
                      filter === filterOption.key
                        ? 'bg-steel-blue-600 text-white'
                        : 'text-charcoal hover:bg-gray-200'
                    }`}
                  >
                    {filterOption.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-steel-blue-600 text-white' : 'text-charcoal hover:bg-gray-100'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-steel-blue-600 text-white' : 'text-charcoal hover:bg-gray-100'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Projects Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  viewMode === 'list' ? 'flex flex-col md:flex-row' : 'hover:-translate-y-2'
                }`}
              >
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-1/3' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                      viewMode === 'list' ? 'h-64 md:h-full' : 'h-64'
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === 'industrial' 
                        ? 'bg-steel-blue-100 text-steel-blue-700' 
                        : 'bg-forest-green-100 text-forest-green-700'
                    }`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-steel-blue-800">{project.capacity}</span>
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3 flex flex-col justify-between' : ''}`}>
                  <div>
                    <h3 className="text-xl font-bold text-steel-blue-800 mb-3 group-hover:text-steel-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-charcoal mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-charcoal">
                        <MapPin className="h-4 w-4 mr-2 text-steel-blue-600" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-charcoal">
                        <Calendar className="h-4 w-4 mr-2 text-steel-blue-600" />
                        {project.year}
                      </div>
                      <div className="flex items-center text-sm text-charcoal">
                        <Building2 className="h-4 w-4 mr-2 text-steel-blue-600" />
                        {project.client}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-xs text-charcoal rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-charcoal">Annual Savings: </span>
                        <span className="font-bold text-forest-green-600">{project.savings}</span>
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-steel-blue-600 hover:text-steel-blue-700 font-semibold text-sm flex items-center"
                      >
                        View Details
                        <TrendingUp className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Sector Achievements */}
      <section className="py-20 bg-gradient-to-br from-steel-blue-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-steel-blue-100 text-steel-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Sector Expertise
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Achievements by Sector</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="space-y-16">
            {/* Manufacturing & Industrial Sector */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-12">
                  <div className="flex items-center mb-6">
                    <div className="bg-steel-blue-100 p-4 rounded-2xl mr-4">
                      <Factory className="h-10 w-10 text-steel-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-steel-blue-800">Manufacturing & Industrial Excellence</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "15+ MW of solar installations across manufacturing facilities, reducing operational costs by 40-60%",
                      "Integrated energy storage systems providing 24/7 power security for critical manufacturing processes",
                      "Advanced monitoring systems ensuring 99.5%+ uptime for industrial solar installations"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-steel-blue-500 w-2 h-2 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                        <span className="text-lg text-charcoal leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <img src={a1} alt="Manufacturing Solar Solutions" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Commercial & Hospitality Sector */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative order-2 lg:order-1">
                  <img src={a2} alt="Commercial Solar Projects" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <div className="p-12 order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="bg-forest-green-100 p-4 rounded-2xl mr-4">
                      <Building2 className="h-10 w-10 text-forest-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-steel-blue-800">Commercial & Hospitality Leadership</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Premium hotel chains including ITC Hotels, Marriott, and Lemon Tree Hotels powered by our solar solutions",
                      "3+ MW of commercial rooftop installations across office complexes and retail centers",
                      "Integrated solar thermal systems providing hot water solutions for hospitality sector, saving 2+ million units annually"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-forest-green-500 w-2 h-2 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                        <span className="text-lg text-charcoal leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Government & Utility Projects */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-12">
                  <div className="flex items-center mb-6">
                    <div className="bg-burnt-yellow-100 p-4 rounded-2xl mr-4">
                      <Award className="h-10 w-10 text-burnt-yellow-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-steel-blue-800">Government & Utility Partnerships</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Strategic partnerships with government bodies including HIMURJA and UJVNL for renewable energy projects",
                      "Utility-scale solar installations contributing to state renewable energy targets and grid stability",
                      "Advanced grid integration solutions supporting India's renewable energy transition goals"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-burnt-yellow-500 w-2 h-2 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                        <span className="text-lg text-charcoal leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <img src={a3} alt="Government Solar Projects" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Performance Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-burnt-yellow-100 text-burnt-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Excellence
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Performance Excellence</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-12 w-12" />,
                title: "System Performance",
                description: "99.5%+ average system uptime with predictive maintenance protocols",
                color: "steel-blue"
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Energy Efficiency",
                description: "20%+ higher energy yield through advanced tracking and optimization systems",
                color: "forest-green"
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Client Satisfaction",
                description: "100% project delivery on time with guaranteed performance warranties",
                color: "burnt-yellow"
              }
            ].map((metric, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className={`bg-${metric.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${metric.color}-600`}>
                    {metric.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-steel-blue-800 mb-4">{metric.title}</h3>
                <p className="text-charcoal leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-charcoal w-10 h-10 rounded-full flex items-center justify-center"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-steel-blue-800 mb-4">{selectedProject.title}</h3>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-steel-blue-800 mb-3">Project Details</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-charcoal">Capacity:</span>
                      <span className="font-semibold">{selectedProject.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal">Location:</span>
                      <span className="font-semibold">{selectedProject.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal">Year:</span>
                      <span className="font-semibold">{selectedProject.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal">Client:</span>
                      <span className="font-semibold">{selectedProject.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal">Annual Savings:</span>
                      <span className="font-semibold text-forest-green-600">{selectedProject.savings}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-steel-blue-800 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-forest-green-500 w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-charcoal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;