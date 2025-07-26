import { ArrowRight, Sun, Zap, Power, Timer, ChevronRight, Droplet, PenTool, Building2, Factory, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 transition-opacity duration-1000 hero-background-industrial" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-off-white to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
            Powering Industrial Excellence Through Advanced Solar Infrastructure
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-100 drop-shadow-xl">
            Leading EPC contractor delivering utility-scale solar installations, energy storage systems, and smart grid solutions for manufacturing facilities and commercial businesses across India
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-forest-green-600 hover:bg-forest-green-700 text-white px-12 py-3 rounded-md font-semibold flex items-center transition-all hover:scale-105 shadow-xl"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white text-white hover:text-steel-blue-800 px-8 py-3 rounded-md font-semibold transition-all hover:scale-105 shadow-xl backdrop-blur-sm"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-steel-blue-800 text-center mb-4">Transforming Industrial Energy Infrastructure</h2>
          <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl leading-relaxed mx-auto text-charcoal" style={{ maxWidth: '64rem' }}>
            We partner with industrial manufacturers, commercial businesses, and utility-scale developers to deliver comprehensive solar energy solutions that reduce operational costs, enhance energy security, and meet sustainability goals. Our expertise spans from multi-megawatt solar installations to integrated energy storage systems and smart grid solutions.
          </p>
        </div>
      </section>

      {/* Industry Partners Section */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-steel-blue-800 text-center mb-4">Trusted by Industry Leaders</h2>
          <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-charcoal text-center mb-12">Powering operations for manufacturing giants, commercial complexes, and government institutions</p>
          
          <div className="flex overflow-hidden relative w-full">
            <div className="flex animate-carousel space-x-8 py-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17].map((num) => (
                <div 
                  key={num}
                  className={`h-20 w-auto object-contain min-w-[150px] company-logo-${num}`}
                />
              ))}
            </div>
            <div className="flex animate-carousel space-x-8 py-4" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17].map((num) => (
                <div 
                  key={`clone-${num}`}
                  className={`h-20 w-auto object-contain min-w-[150px] company-logo-${num}`}
                />
              ))}
            </div>
          </div>
          <p className="text-charcoal text-center mt-12 italic">18+ MW installed across industrial and commercial sectors</p>
        </div>
      </section>

      {/* Industrial Solar Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-forest-green-600">Scale Your Operations.</span>
                <br />
                <span className="text-steel-blue-800">Optimize Your Energy Costs</span>
              </h2>
              <p className="text-charcoal mb-8">
                Smera delivers Smera solar solutions designed for industrial manufacturing, 
                commercial facilities, and utility-scale projects. Our comprehensive approach includes 
                energy audits, custom system design, and long-term performance optimization.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-burnt-yellow-100 p-3 rounded-lg">
                    <Factory className="h-6 w-6 text-burnt-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-steel-blue-800">UTILITY-SCALE SOLAR FARMS</h3>
                    <p className="text-charcoal">Multi-megawatt installations with advanced tracking systems and grid integration</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-steel-blue-100 p-3 rounded-lg">
                    <Building2 className="h-6 w-6 text-steel-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-steel-blue-800">COMMERCIAL ROOFTOP SYSTEMS</h3>
                    <p className="text-charcoal">High-capacity rooftop installations for office complexes, warehouses, and retail centers</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-forest-green-100 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-forest-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-steel-blue-800">ENERGY STORAGE INTEGRATION</h3>
                    <p className="text-charcoal">Battery energy storage systems for load balancing and grid stability</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-burnt-orange-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-burnt-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-steel-blue-800">SMART MONITORING & CONTROL</h3>
                    <p className="text-charcoal">Advanced SCADA systems for real-time performance monitoring and predictive maintenance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-96 scale-background">
              <div className="absolute bottom-4 right-4 bg-burnt-yellow-500 text-steel-blue-800 px-6 py-3 rounded-lg font-semibold">
                <p className="text-lg">Industrial Scale</p>
                <p className="text-sm">Energy Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smera Services Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-blue-800 mb-4">
              Comprehensive Industrial & Commercial Solutions
            </h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              From feasibility studies to long-term O&M contracts, we provide end-to-end solar energy solutions for Smera clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Utility-Scale Solar */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="h-8 w-8 text-burnt-yellow-600" />
                <h3 className="text-xl font-bold text-steel-blue-800">Utility-Scale Solar</h3>
              </div>
              <ul className="space-y-3 mb-6 text-charcoal">
                <li>Ground-mounted solar farms (5MW+)</li>
                <li>Floating solar installations</li>
                <li>Agri-voltaic systems</li>
              </ul>
              <Link to="/products" className="text-forest-green-600 hover:text-forest-green-700 font-semibold flex items-center transition-colors">
                Learn more <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>

            {/* Industrial Energy Storage */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-steel-blue-600" />
                <h3 className="text-xl font-bold text-steel-blue-800">Energy Storage Systems</h3>
              </div>
              <ul className="space-y-3 mb-6 text-charcoal">
                <li>Grid-scale battery storage</li>
                <li>Peak shaving solutions</li>
                <li>Microgrid integration</li>
              </ul>
              <Link to="/products" className="text-forest-green-600 hover:text-forest-green-700 font-semibold flex items-center transition-colors">
                Learn more <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>

            {/* Commercial Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-8 w-8 text-steel-blue-600" />
                <h3 className="text-xl font-bold text-steel-blue-800">Commercial Systems</h3>
              </div>
              <ul className="space-y-3 mb-6 text-charcoal">
                <li>Office complex installations</li>
                <li>Warehouse & logistics centers</li>
                <li>Retail & hospitality sector</li>
              </ul>
              <Link to="/products" className="text-forest-green-600 hover:text-forest-green-700 font-semibold flex items-center transition-colors">
                Learn more <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>

            {/* EPC & O&M Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Power className="h-8 w-8 text-steel-blue-600" />
                <h3 className="text-xl font-bold text-steel-blue-800">EPC & O&M Services</h3>
              </div>
              <ul className="space-y-3 mb-6 text-charcoal">
                <li>Turnkey project delivery</li>
                <li>Long-term maintenance contracts</li>
                <li>Performance optimization</li>
              </ul>
              <Link to="/products" className="text-forest-green-600 hover:text-forest-green-700 font-semibold flex items-center transition-colors">
                Learn more <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-steel-blue-800 mb-4">
              Smera Solar Implementation Process
            </h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Our structured approach ensures seamless project delivery from initial assessment to long-term operations
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-steel-blue-200"></div>

            <div className="space-y-20">
              {/* Energy Audit & Feasibility */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16 text-right">
                  <h3 className="text-xl font-bold text-steel-blue-800 mb-2">Energy Audit & Feasibility Study</h3>
                  <p className="text-charcoal">Comprehensive site assessment, load analysis, and financial modeling to determine optimal solar solution for your facility</p>
                </div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-steel-blue-200">
                  <PenTool className="h-8 w-8 text-steel-blue-600" />
                </div>
                <div className="w-1/2 pl-16"></div>
              </div>

              {/* Custom System Design */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16"></div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-steel-blue-200">
                  <Building2 className="h-8 w-8 text-steel-blue-600" />
                </div>
                <div className="w-1/2 pl-16">
                  <h3 className="text-xl font-bold text-steel-blue-800 mb-2">Custom System Design & Engineering</h3>
                  <p className="text-charcoal">Detailed engineering design with 3D modeling, electrical schematics, and structural analysis tailored to your industrial requirements</p>
                </div>
              </div>

              {/* Regulatory Approvals */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16 text-right">
                  <h3 className="text-xl font-bold text-steel-blue-800 mb-2">Regulatory Approvals & Financing</h3>
                  <p className="text-charcoal">Complete handling of permits, grid connection approvals, and assistance with financing options including green bonds and subsidies</p>
                </div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-steel-blue-200">
                  <Shield className="h-8 w-8 text-steel-blue-600" />
                </div>
                <div className="w-1/2 pl-16"></div>
              </div>

              {/* Project Execution */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16"></div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-steel-blue-200">
                  <Factory className="h-8 w-8 text-steel-blue-600" />
                </div>
                <div className="w-1/2 pl-16">
                  <h3 className="text-xl font-bold text-steel-blue-800 mb-2">Project Execution & Commissioning</h3>
                  <p className="text-charcoal">Professional installation by certified technicians with minimal disruption to your operations, followed by comprehensive testing and commissioning</p>
                </div>
              </div>

              {/* Grid Integration */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16 text-right">
                  <h3 className="text-xl font-bold text-steel-blue-800 mb-2">Grid Integration & Synchronization</h3>
                  <p className="text-charcoal">Seamless integration with existing electrical infrastructure and utility grid connection with advanced protection systems</p>
                </div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-steel-blue-200">
                  <Zap className="h-8 w-8 text-burnt-yellow-600" />
                </div>
                <div className="w-1/2 pl-16"></div>
              </div>

              {/* Performance Monitoring */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16"></div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-steel-blue-200">
                  <TrendingUp className="h-8 w-8 text-forest-green-600" />
                </div>
                <div className="w-1/2 pl-16">
                  <h3 className="text-xl font-bold text-steel-blue-800 mb-2">Performance Monitoring & Analytics</h3>
                  <p className="text-charcoal">Real-time monitoring dashboard with AI-powered analytics for performance optimization and predictive maintenance</p>
                </div>
              </div>

              {/* Long-term O&M */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16 text-right">
                  <h3 className="text-xl font-bold text-steel-blue-800 mb-2">Long-term O&M Partnership</h3>
                  <p className="text-charcoal">Comprehensive maintenance contracts with guaranteed performance levels, regular inspections, and 24/7 technical support</p>
                </div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-steel-blue-200">
                  <Power className="h-8 w-8 text-steel-blue-600" />
                </div>
                <div className="w-1/2 pl-16"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;