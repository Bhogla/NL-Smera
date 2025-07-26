import { Sun, Lightbulb, Shield, Settings, Wind, Thermometer, Bolt, Car, Home, Factory, Sprout, Building2, Zap, Battery, Monitor, Grid3x3, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import p1 from '../assets/Product/p1.jpg';
import p2 from '../assets/Product/p2.jpg';
import p3 from '../assets/Product/p3.jpg';
import p4 from '../assets/Product/p4.jpg';
import p5 from '../assets/Product/p5.jpg';
import p6 from '../assets/Product/p6.jpg';

const Products = () => {
  const [activeTab, setActiveTab] = useState('utility-scale');

  const productCategories = {
    'utility-scale': {
      title: 'Utility-Scale Solar Infrastructure',
      description: 'Large-scale solar installations designed for industrial manufacturing, commercial businesses, and utility companies.',
      image: p1,
      solutions: [
        {
          title: 'Ground-Mounted Solar Farms (5MW+)',
          description: 'Utility-scale solar installations optimized for maximum energy generation and grid stability.',
          features: [
            'Fixed-Tilt Systems: Cost-effective ground-mounted arrays with optimal tilt angles',
            'Single-Axis Tracking: Advanced tracking systems increasing energy generation by 15-25%',
            'Floating Solar: Innovative floating photovoltaic systems for water bodies'
          ],
          specs: [
            'High-efficiency mono-crystalline modules (450W+ per panel)',
            'Central inverters with 99%+ efficiency and grid support functions',
            'Advanced monitoring systems with SCADA integration',
            'Comprehensive electrical protection and safety systems'
          ]
        },
        {
          title: 'Commercial Rooftop Systems',
          description: 'High-capacity rooftop installations for office complexes, warehouses, manufacturing facilities, and retail centers.',
          features: [
            'Capacity range: 100kW to 10MW+ per installation',
            'Ballasted Systems: Non-penetrating mounting for membrane roofs',
            'Penetrating Systems: Structurally attached systems for metal and concrete roofs',
            'Canopy Systems: Elevated installations providing shade for parking areas'
          ]
        },
        {
          title: 'Agri-Voltaic Systems',
          description: 'Innovative dual-use systems combining solar energy generation with agricultural activities.',
          features: [
            'Elevated solar panels allowing continued farming underneath',
            'Optimized spacing for agricultural equipment access',
            'Integrated irrigation systems powered by solar energy',
            'Crop protection from extreme weather conditions'
          ]
        }
      ]
    },
    'energy-storage': {
      title: 'Industrial Energy Storage Systems',
      description: 'Advanced battery energy storage solutions for grid-scale applications, peak shaving, and backup power.',
      image: p4,
      solutions: [
        {
          title: 'Grid-Scale Battery Storage',
          description: 'Utility-scale lithium-ion battery systems for grid stabilization and industrial load management.',
          features: [
            'Capacity Range: 1MWh to 100MWh+ configurations',
            'Response Time: Sub-second response for grid frequency regulation',
            'Efficiency: 95%+ round-trip efficiency with advanced thermal management'
          ],
          applications: [
            'Peak shaving and demand charge reduction',
            'Grid frequency regulation and voltage support',
            'Renewable energy time-shifting and smoothing',
            'Emergency backup power for critical loads'
          ]
        },
        {
          title: 'Microgrid Integration',
          description: 'Comprehensive microgrid solutions combining solar generation, energy storage, and intelligent control systems.',
          features: [
            'Advanced energy management systems (EMS)',
            'Seamless grid-tie and islanding capabilities',
            'Load prioritization and automatic switching',
            'Real-time optimization algorithms'
          ]
        }
      ]
    },
    'smart-monitoring': {
      title: 'Smart Monitoring & Control Systems',
      description: 'Advanced SCADA systems, IoT sensors, and AI-powered analytics for optimal performance monitoring.',
      image: p6,
      solutions: [
        {
          title: 'SCADA Integration',
          description: 'Comprehensive supervisory control and data acquisition systems with real-time monitoring and remote control capabilities.'
        },
        {
          title: 'Predictive Analytics',
          description: 'AI-powered performance analysis, fault detection, and maintenance scheduling to maximize system uptime and energy yield.'
        },
        {
          title: 'Cybersecurity',
          description: 'Industrial-grade cybersecurity protocols protecting critical infrastructure from cyber threats and unauthorized access.'
        }
      ]
    },
    'epc-services': {
      title: 'Turnkey EPC & Long-term O&M Services',
      description: 'Complete project lifecycle management from initial feasibility studies to long-term operations and maintenance.',
      image: p3,
      solutions: [
        {
          title: 'Engineering, Procurement & Construction (EPC)',
          description: 'Comprehensive project delivery services for utility-scale and commercial solar installations.',
          features: [
            'Feasibility Studies: Detailed technical and financial analysis including energy yield modeling',
            'System Design: Advanced 3D modeling, electrical design, and structural engineering',
            'Procurement: Strategic sourcing of tier-1 components with quality assurance',
            'Construction: Professional installation by certified technicians with rigorous safety protocols'
          ]
        },
        {
          title: 'Operations & Maintenance (O&M)',
          description: 'Comprehensive long-term service contracts ensuring optimal system performance and maximum ROI.',
          features: [
            '24/7 remote monitoring and performance analysis',
            'Preventive and corrective maintenance programs',
            'Performance guarantees and energy yield warranties',
            'Spare parts management and emergency response services'
          ]
        },
        {
          title: 'Project Development Services',
          description: 'End-to-end project development including land acquisition, regulatory approvals, financing assistance, and grid connection coordination.'
        }
      ]
    }
  };

  const technologyHighlights = [
    {
      icon: <Sun className="h-8 w-8" />,
      title: "High-Efficiency Modules",
      description: "Latest generation solar panels with 22%+ efficiency ratings",
      color: "burnt-yellow"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Inverters",
      description: "Grid-interactive inverters with advanced power electronics",
      color: "steel-blue"
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Energy Storage",
      description: "Lithium-ion battery systems with 15+ year lifespan",
      color: "forest-green"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "AI Monitoring",
      description: "Machine learning algorithms for predictive maintenance",
      color: "burnt-orange"
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Reduce electricity costs by 30-70% with long-term price stability",
      percentage: "30-70%"
    },
    {
      title: "System Uptime",
      description: "Industry-leading reliability with minimal downtime",
      percentage: "99.5%"
    },
    {
      title: "ROI Timeline",
      description: "Typical payback period for industrial installations",
      percentage: "3-5 Years"
    },
    {
      title: "Carbon Reduction",
      description: "Average CO₂ emissions reduction per MW installed",
      percentage: "1,500 Tons/Year"
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Enhanced Hero Section */}
      <section className="bg-blue-900 text-white py-32 relative overflow-hidden">
        <img src={p5} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block bg-burnt-yellow-500/20 text-burnt-yellow-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-burnt-yellow-500/30">
                Our Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Industrial & Commercial 
              <span className="text-burnt-yellow-400"> Solar Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90">
              Comprehensive renewable energy infrastructure for manufacturing facilities, commercial complexes, and utility-scale projects. From multi-megawatt solar farms to integrated energy storage systems.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Tabbed Interface */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-steel-blue-100 text-steel-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Product Categories
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Comprehensive Solar Solutions</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-lg max-w-4xl mx-auto">
            {Object.entries(productCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 m-1 ${
                  activeTab === key
                    ? 'bg-steel-blue-600 text-white shadow-lg'
                    : 'text-steel-blue-600 hover:bg-steel-blue-50'
                }`}
              >
                {category.title.split(' ')[0]} {category.title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12">
                <h3 className="text-3xl font-bold text-steel-blue-800 mb-6">
                  {productCategories[activeTab].title}
                </h3>
                <p className="text-xl text-charcoal mb-8 leading-relaxed">
                  {productCategories[activeTab].description}
                </p>
                
                <div className="space-y-8">
                  {productCategories[activeTab].solutions.map((solution, index) => (
                    <div key={index} className="border-l-4 border-burnt-yellow-500 pl-6">
                      <h4 className="text-xl font-bold text-steel-blue-800 mb-3">{solution.title}</h4>
                      <p className="text-charcoal mb-4 leading-relaxed">{solution.description}</p>
                      
                      {solution.features && (
                        <div className="mb-4">
                          <h5 className="font-semibold text-steel-blue-700 mb-2">Key Features:</h5>
                          <ul className="space-y-2">
                            {solution.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-forest-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-charcoal">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {solution.specs && (
                        <div className="mb-4">
                          <h5 className="font-semibold text-steel-blue-700 mb-2">Technical Specifications:</h5>
                          <ul className="space-y-2">
                            {solution.specs.map((spec, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-steel-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-charcoal">{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {solution.applications && (
                        <div>
                          <h5 className="font-semibold text-steel-blue-700 mb-2">Applications:</h5>
                          <ul className="space-y-2">
                            {solution.applications.map((app, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-burnt-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-charcoal">{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={productCategories[activeTab].image} 
                  alt={productCategories[activeTab].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technology Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-forest-green-100 text-forest-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Technology
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Cutting-Edge Technology Stack</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-charcoal max-w-3xl mx-auto leading-relaxed">
              We leverage the latest advancements in solar technology to deliver maximum efficiency and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyHighlights.map((tech, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className={`bg-${tech.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${tech.color}-600`}>
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-steel-blue-800 mb-4">{tech.title}</h3>
                <p className="text-charcoal leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-steel-blue-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-steel-blue-100 text-steel-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Benefits
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Measurable Business Impact</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-bold text-steel-blue-800 mb-4">{benefit.percentage}</div>
                <h3 className="text-xl font-bold text-steel-blue-800 mb-3">{benefit.title}</h3>
                <p className="text-charcoal leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Product Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-burnt-yellow-100 text-burnt-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Gallery
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Our Solar Installations</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: p1, title: "Utility-Scale Solar Farm", description: "5MW ground-mounted installation" },
              { image: p2, title: "Commercial Rooftop", description: "2MW office complex system" },
              { image: p3, title: "EPC Construction", description: "Professional installation process" },
              { image: p4, title: "Energy Storage", description: "Grid-scale battery system" },
              { image: p5, title: "Industrial Installation", description: "Manufacturing facility solar" },
              { image: p6, title: "Smart Monitoring", description: "Advanced control systems" }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-steel-blue-800 to-steel-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Power Your Business with Solar?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Get a customized solar solution designed specifically for your industrial or commercial facility. 
            Our experts will conduct a comprehensive energy audit and provide detailed ROI projections.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-burnt-yellow-500 hover:bg-burnt-yellow-600 text-steel-blue-800 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center">
              Request Free Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white hover:bg-white hover:text-steel-blue-800 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center">
              Download Brochure
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;