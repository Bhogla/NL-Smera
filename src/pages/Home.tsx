import { ArrowRight, Sun, Zap, Power, Timer, ChevronRight, Droplet, PenTool, Building2, Factory, TrendingUp, Shield, Star, Quote, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Manufacturing Industries Ltd.",
      text: "Smera's solar installation reduced our energy costs by 45% and provided excellent ROI within 3 years.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Hotel Chain Group",
      text: "Professional service and reliable solar solutions. Our hotel operations are now more sustainable.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Government Facility",
      text: "Outstanding project delivery and ongoing support. Highly recommend for large-scale installations.",
      rating: 5
    }
  ];

  const keyFeatures = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "18+ MW Installed",
      description: "Proven track record in utility-scale installations"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "99.5% Uptime",
      description: "Industry-leading reliability and performance"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "25+ Clients",
      description: "Trusted by leading industrial companies"
    },
    {
      icon: <Power className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and maintenance"
    }
  ];

  return (
    <div className="bg-off-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000 hero-background-industrial" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-off-white to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block bg-forest-green-600/20 text-forest-green-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-forest-green-500/30">
                ISO Certified EPC Contractor
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl leading-tight">
              Powering Industrial Excellence Through 
              <span className="text-burnt-yellow-400"> Advanced Solar</span> Infrastructure
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl text-gray-100 drop-shadow-xl leading-relaxed">
              Leading EPC contractor delivering utility-scale solar installations, energy storage systems, and smart grid solutions for manufacturing facilities and commercial businesses across India
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/products"
                className="group bg-forest-green-600 hover:bg-forest-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all hover:scale-105 shadow-2xl text-lg"
              >
                Explore Solutions
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group bg-transparent border-2 border-white hover:bg-white text-white hover:text-steel-blue-800 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-2xl backdrop-blur-sm text-lg flex items-center justify-center"
              >
                Request Consultation
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-20 right-8 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-white/20">
            <div className="text-3xl font-bold text-burnt-yellow-400">18+ MW</div>
            <div className="text-sm opacity-90">Solar Capacity Installed</div>
          </div>
        </div>
      </section>

      {/* Enhanced Value Proposition Section */}
      <section className="bg-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-steel-blue-800 mb-6">
              Transforming Industrial Energy Infrastructure
            </h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-charcoal mb-12">
              We partner with industrial manufacturers, commercial businesses, and utility-scale developers to deliver comprehensive solar energy solutions that reduce operational costs, enhance energy security, and meet sustainability goals. Our expertise spans from multi-megawatt solar installations to integrated energy storage systems and smart grid solutions.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-steel-blue-500 to-steel-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-steel-blue-800 mb-3">{feature.title}</h3>
                <p className="text-charcoal leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Industry Partners Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-4">Trusted by Industry Leaders</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Powering operations for manufacturing giants, commercial complexes, and government institutions across India
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex overflow-hidden relative w-full">
              <div className="flex animate-carousel space-x-12 py-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17].map((num) => (
                  <div 
                    key={num}
                    className={`h-20 w-auto object-contain min-w-[180px] company-logo-${num} opacity-70 hover:opacity-100 transition-opacity`}
                  />
                ))}
              </div>
              <div className="flex animate-carousel space-x-12 py-8" aria-hidden="true">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17].map((num) => (
                  <div 
                    key={`clone-${num}`}
                    className={`h-20 w-auto object-contain min-w-[180px] company-logo-${num} opacity-70 hover:opacity-100 transition-opacity`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-charcoal font-semibold text-lg">18+ MW installed across industrial and commercial sectors</p>
          </div>
        </div>
      </section>

      {/* Enhanced Industrial Solar Infrastructure Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <span className="inline-block bg-forest-green-100 text-forest-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Industrial Solutions
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-forest-green-600">Scale Your Operations.</span>
                  <br />
                  <span className="text-steel-blue-800">Optimize Your Energy Costs</span>
                </h2>
                <p className="text-xl text-charcoal mb-8 leading-relaxed">
                  Smera delivers comprehensive solar solutions designed for industrial manufacturing, 
                  commercial facilities, and utility-scale projects. Our comprehensive approach includes 
                  energy audits, custom system design, and long-term performance optimization.
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Factory className="h-7 w-7" />,
                    title: "UTILITY-SCALE SOLAR FARMS",
                    description: "Multi-megawatt installations with advanced tracking systems and grid integration",
                    color: "burnt-yellow"
                  },
                  {
                    icon: <Building2 className="h-7 w-7" />,
                    title: "COMMERCIAL ROOFTOP SYSTEMS",
                    description: "High-capacity rooftop installations for office complexes, warehouses, and retail centers",
                    color: "steel-blue"
                  },
                  {
                    icon: <Zap className="h-7 w-7" />,
                    title: "ENERGY STORAGE INTEGRATION",
                    description: "Battery energy storage systems for load balancing and grid stability",
                    color: "forest-green"
                  },
                  {
                    icon: <Shield className="h-7 w-7" />,
                    title: "SMART MONITORING & CONTROL",
                    description: "Advanced SCADA systems for real-time performance monitoring and predictive maintenance",
                    color: "burnt-orange"
                  }
                ].map((item, index) => (
                  <div key={index} className="group flex items-start gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                    <div className={`bg-${item.color}-100 p-4 rounded-xl group-hover:scale-110 transition-transform`}>
                      <div className={`text-${item.color}-600`}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-steel-blue-800 mb-2">{item.title}</h3>
                      <p className="text-charcoal leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden h-[600px] scale-background shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 right-8 bg-burnt-yellow-500 text-steel-blue-800 px-8 py-4 rounded-2xl font-bold shadow-xl">
                  <p className="text-xl">Industrial Scale</p>
                  <p className="text-sm opacity-90">Energy Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-br from-steel-blue-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block bg-steel-blue-100 text-steel-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-steel-blue-800 mb-6">
              Comprehensive Industrial & Commercial Solutions
            </h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-charcoal max-w-4xl mx-auto leading-relaxed">
              From feasibility studies to long-term O&M contracts, we provide end-to-end solar energy solutions for Smera clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sun className="h-10 w-10" />,
                title: "Utility-Scale Solar",
                items: ["Ground-mounted solar farms (5MW+)", "Floating solar installations", "Agri-voltaic systems"],
                color: "burnt-yellow"
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Energy Storage Systems",
                items: ["Grid-scale battery storage", "Peak shaving solutions", "Microgrid integration"],
                color: "steel-blue"
              },
              {
                icon: <Building2 className="h-10 w-10" />,
                title: "Commercial Systems",
                items: ["Office complex installations", "Warehouse & logistics centers", "Retail & hospitality sector"],
                color: "forest-green"
              },
              {
                icon: <Power className="h-10 w-10" />,
                title: "EPC & O&M Services",
                items: ["Turnkey project delivery", "Long-term maintenance contracts", "Performance optimization"],
                color: "burnt-orange"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`bg-${service.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${service.color}-600`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-steel-blue-800 mb-4">{service.title}</h3>
                <ul className="space-y-3 mb-8 text-charcoal">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-forest-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/products" 
                  className="group/link text-forest-green-600 hover:text-forest-green-700 font-semibold flex items-center transition-colors"
                >
                  Learn more 
                  <ChevronRight className="h-5 w-5 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block bg-burnt-yellow-100 text-burnt-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Client Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-steel-blue-800 mb-6">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute top-6 right-6">
                  <Quote className="h-8 w-8 text-burnt-yellow-400 opacity-50" />
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-burnt-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-steel-blue-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Implementation Process */}
      <section className="py-24 bg-gradient-to-br from-steel-blue-900 to-steel-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Smera Solar Implementation Process
            </h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
              Our structured approach ensures seamless project delivery from initial assessment to long-term operations
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20 hidden lg:block"></div>

            <div className="space-y-16">
              {[
                {
                  icon: <PenTool className="h-8 w-8" />,
                  title: "Energy Audit & Feasibility Study",
                  description: "Comprehensive site assessment, load analysis, and financial modeling to determine optimal solar solution for your facility"
                },
                {
                  icon: <Building2 className="h-8 w-8" />,
                  title: "Custom System Design & Engineering",
                  description: "Detailed engineering design with 3D modeling, electrical schematics, and structural analysis tailored to your industrial requirements"
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Regulatory Approvals & Financing",
                  description: "Complete handling of permits, grid connection approvals, and assistance with financing options including green bonds and subsidies"
                },
                {
                  icon: <Factory className="h-8 w-8" />,
                  title: "Project Execution & Commissioning",
                  description: "Professional installation by certified technicians with minimal disruption to your operations, followed by comprehensive testing and commissioning"
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Grid Integration & Synchronization",
                  description: "Seamless integration with existing electrical infrastructure and utility grid connection with advanced protection systems"
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Performance Monitoring & Analytics",
                  description: "Real-time monitoring dashboard with AI-powered analytics for performance optimization and predictive maintenance"
                },
                {
                  icon: <Power className="h-8 w-8" />,
                  title: "Long-term O&M Partnership",
                  description: "Comprehensive maintenance contracts with guaranteed performance levels, regular inspections, and 24/7 technical support"
                }
              ].map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8`}>
                  <div className="lg:w-1/2 w-full">
                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} text-center lg:text-left`}>
                      <div className="bg-burnt-yellow-500 text-steel-blue-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-xl">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-lg opacity-90 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                      <div className="text-6xl font-bold text-burnt-yellow-400 mb-2">0{index + 1}</div>
                      <div className="text-sm opacity-75">Step {index + 1} of 7</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-forest-green-600 to-forest-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Energy Infrastructure?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Join industry leaders who have already made the switch to sustainable solar energy. 
            Get a customized consultation for your facility today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group bg-white text-forest-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/achievements"
              className="group border-2 border-white text-white hover:bg-white hover:text-forest-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center"
            >
              View Our Projects
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;