import { CheckCircle, Lightbulb, Handshake, TrendingUp, Zap, BatteryCharging, Sun, Settings, Shield, DollarSign, Bolt, Factory, Building2, Award, Users, Target, Eye, Heart } from 'lucide-react';
import aboutBg from '../assets/about.jpg';

const About = () => {
  const companyValues = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Excellence",
      description: "We strive for the highest standards in every project, ensuring quality that exceeds expectations and delivers lasting value to our clients."
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Sustainability",
      description: "Our commitment to environmental responsibility drives us to create solutions that benefit both our clients and the planet for generations to come."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Partnership",
      description: "We build long-term relationships with our clients, working as trusted partners to achieve their energy goals and business objectives."
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Smera Associates LLP established with a vision to champion environmental sustainability and foster economic development through solar energy."
    },
    {
      year: "2023",
      title: "First Major Installation",
      description: "Completed our first utility-scale solar installation, marking the beginning of our journey in large-scale renewable energy projects."
    },
    {
      year: "2024",
      title: "ISO Certification",
      description: "Achieved ISO certification, demonstrating our commitment to quality management and industry best practices."
    },
    {
      year: "2025",
      title: "18+ MW Milestone",
      description: "Successfully installed over 18 MW of solar capacity across industrial and commercial sectors, powering sustainable growth."
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Enhanced Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${aboutBg})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block bg-burnt-yellow-500/20 text-burnt-yellow-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-burnt-yellow-500/30">
                About Smera
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Smera - Powering Industrial Excellence Through 
              <span className="text-burnt-yellow-400"> Solar Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90">
              Leading EPC contractor specializing in utility-scale solar installations, industrial energy storage, and comprehensive renewable energy solutions for Smera clients.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-steel-blue-100 text-steel-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Story
              </span>
              <h2 className="text-4xl font-bold mb-8 text-steel-blue-800">About Smera Associates LLP</h2>
              <div className="space-y-6 text-lg leading-relaxed text-charcoal">
                <p>
                  Founded in 2022, Smera Associates LLP emerged with a resolute vision to champion environmental sustainability and foster economic development. The firm is committed to building a greener earth by harnessing the potential of solar energy across multiple sectors.
                </p>
                <p>
                  Our comprehensive portfolio spans utility-scale solar farms, industrial rooftop installations, energy storage systems, and smart grid integration solutions. Operating from our headquarters in Dehradun with strategic offices in New Delhi and Chandigarh, we serve manufacturing facilities, commercial complexes, government institutions, and utility companies across India.
                </p>
                <p>
                  As an ISO-certified organization, we maintain the highest standards in project execution, safety protocols, and quality assurance, ensuring reliable and efficient solar energy solutions that drive industrial competitiveness and sustainability goals.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-steel-blue-100 to-burnt-yellow-100 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-steel-blue-800 mb-2">18+</div>
                    <div className="text-sm text-charcoal">MW Installed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-steel-blue-800 mb-2">25+</div>
                    <div className="text-sm text-charcoal">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-steel-blue-800 mb-2">99.5%</div>
                    <div className="text-sm text-charcoal">System Uptime</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-steel-blue-800 mb-2">24/7</div>
                    <div className="text-sm text-charcoal">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision Section */}
      <section className="bg-gradient-to-br from-steel-blue-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-steel-blue-100 text-steel-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-steel-blue-800 mb-6">
              Mission & Vision for Industrial Excellence
            </h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-steel-blue-500 to-steel-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-steel-blue-800 mb-4">Our Mission</h3>
                <p className="text-charcoal leading-relaxed">
                  To transform the energy landscape by integrating advanced solar systems into energy-intensive sectors, making a substantial impact in reducing carbon footprints and enhancing operational efficiency.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-burnt-yellow-500 to-burnt-yellow-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-steel-blue-800 mb-4">Our Vision</h3>
                <p className="text-charcoal leading-relaxed">
                  To be the leading force in India's renewable energy transition, creating sustainable solutions that support broader climate goals while fostering economic resilience and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Company Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-forest-green-100 text-forest-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Values
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">What Drives Us Forward</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="bg-gradient-to-br from-steel-blue-500 to-steel-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-steel-blue-800 mb-4">{value.title}</h3>
                <p className="text-charcoal leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Company Timeline */}
      <section className="py-24 bg-gradient-to-br from-steel-blue-900 to-steel-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Milestones & Achievements</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20 hidden lg:block"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8`}>
                  <div className="lg:w-1/2 w-full">
                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} text-center lg:text-left`}>
                      <div className="text-6xl font-bold text-burnt-yellow-400 mb-4">{milestone.year}</div>
                      <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                      <p className="text-lg opacity-90 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                      <div className="w-16 h-16 bg-burnt-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-steel-blue-800" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm opacity-75">Milestone {index + 1}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Smera Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-burnt-yellow-100 text-burnt-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Why Industrial Leaders Choose Smera</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Factory className="h-12 w-12" />,
                title: "Utility-Scale Expertise",
                description: "Specialized in multi-megawatt installations with advanced grid integration, energy storage systems, and smart monitoring solutions for industrial applications.",
                color: "steel-blue"
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Proven Industrial Track Record",
                description: "18+ MW of successful installations across manufacturing, hospitality, and government sectors with guaranteed performance and minimal downtime.",
                color: "forest-green"
              },
              {
                icon: <Building2 className="h-12 w-12" />,
                title: "Smera Partnerships",
                description: "Strategic alliances with tier-1 manufacturers like WAAREE, Luminous, TATA, Adani, and Sungrow ensuring premium components and extended warranties.",
                color: "burnt-yellow"
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Comprehensive O&M Services",
                description: "Long-term maintenance contracts with 24/7 monitoring, predictive maintenance, and guaranteed performance levels for maximum ROI.",
                color: "burnt-orange"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className={`bg-${feature.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${feature.color}-600`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-steel-blue-800 mb-4">{feature.title}</h3>
                <p className="text-charcoal leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Industrial Solar Solutions Deep Dive */}
      <section className="bg-gradient-to-br from-steel-blue-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-steel-blue-100 text-steel-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Solutions
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Smera Solar Infrastructure: Powering Industrial Growth</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-charcoal leading-relaxed">
              <p>
                Beyond environmental benefits, Smera Associates LLP places significant emphasis on stimulating the local and national economy. By implementing solar solutions, the firm generates employment opportunities, nurtures technical expertise, and encourages sustainable industrial growth.
              </p>
              <p>
                This holistic approach not only addresses pressing environmental concerns but also contributes to long-term economic resilience, making solar power a cornerstone for progress and sustainability.
              </p>
            </div>
          </div>

          {/* Core Components Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-steel-blue-800 mb-12">Core Components of Industrial Solar Systems</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sun className="h-12 w-12" />,
                  title: "Utility-Scale Solar Arrays",
                  description: "High-efficiency mono-crystalline modules with advanced tracking systems, optimized for maximum energy yield in industrial applications.",
                  color: "burnt-yellow"
                },
                {
                  icon: <Zap className="h-12 w-12" />,
                  title: "Grid-Scale Inverters",
                  description: "Central and string inverters with advanced grid support functions, reactive power control, and seamless utility integration capabilities.",
                  color: "steel-blue"
                },
                {
                  icon: <BatteryCharging className="h-12 w-12" />,
                  title: "Energy Storage Systems",
                  description: "Lithium-ion battery systems for peak shaving, load balancing, and grid stability, with advanced battery management systems for optimal performance.",
                  color: "forest-green"
                },
                {
                  icon: <Settings className="h-12 w-12" />,
                  title: "SCADA & Monitoring",
                  description: "Advanced supervisory control and data acquisition systems with real-time monitoring, predictive analytics, and remote diagnostics.",
                  color: "burnt-orange"
                },
                {
                  icon: <Shield className="h-12 w-12" />,
                  title: "Protection Systems",
                  description: "Comprehensive electrical protection including surge arresters, arc fault detection, and advanced relay protection for industrial safety standards.",
                  color: "steel-blue"
                },
                {
                  icon: <Factory className="h-12 w-12" />,
                  title: "Grid Integration",
                  description: "Seamless integration with existing electrical infrastructure, including power factor correction and harmonic filtering for industrial loads.",
                  color: "forest-green"
                }
              ].map((component, index) => (
                <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className={`bg-${component.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <div className={`text-${component.color}-600`}>
                      {component.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-steel-blue-800 mb-4">{component.title}</h4>
                  <p className="text-charcoal leading-relaxed">{component.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industrial Solar Benefits */}
          <div>
            <h3 className="text-3xl font-bold text-center text-steel-blue-800 mb-12">Industrial Solar Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <DollarSign className="h-12 w-12" />,
                  title: "Significant Cost Reduction",
                  description: "Reduce electricity costs by 30-70% with long-term price stability and protection against utility rate increases.",
                  color: "forest-green"
                },
                {
                  icon: <TrendingUp className="h-12 w-12" />,
                  title: "Enhanced Energy Security",
                  description: "Reduce dependence on grid electricity with reliable, predictable energy generation and optional backup power capabilities.",
                  color: "steel-blue"
                },
                {
                  icon: <Award className="h-12 w-12" />,
                  title: "Sustainability Leadership",
                  description: "Achieve carbon neutrality goals, enhance corporate ESG ratings, and demonstrate environmental responsibility to stakeholders.",
                  color: "burnt-yellow"
                },
                {
                  icon: <Handshake className="h-12 w-12" />,
                  title: "Competitive Advantage",
                  description: "Lower operational costs, improved profit margins, and enhanced market positioning through sustainable business practices.",
                  color: "burnt-orange"
                }
              ].map((benefit, index) => (
                <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className={`bg-${benefit.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <div className={`text-${benefit.color}-600`}>
                      {benefit.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-steel-blue-800 mb-4">{benefit.title}</h4>
                  <p className="text-charcoal leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;