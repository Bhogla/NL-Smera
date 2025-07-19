import { CheckCircle, Lightbulb, Handshake, TrendingUp, Zap, BatteryCharging, Sun, Settings, Shield, DollarSign, Bolt, Factory, Building2, Award } from 'lucide-react';
import aboutBg from '../assets/about.jpg';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 bg-cover bg-center" style={{ backgroundImage: `url(${aboutBg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Smera - Powering Industrial Excellence Through Solar Innovation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Leading EPC contractor specializing in utility-scale solar installations, industrial energy storage, and comprehensive renewable energy solutions for enterprise clients.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">About Smera</h2>
          <p className="mb-4">
            Established in 2015 in Dehradun, Uttarakhand, Aasna Smera Pvt. Ltd. has evolved into a premier EPC (Engineering, Procurement, and Construction) contractor specializing in large-scale solar installations for industrial and commercial clients. With over a decade of collective expertise in renewable energy infrastructure, we have successfully delivered 18+ MW of solar capacity across diverse industrial sectors.
          </p>
          <p className="mb-4">
            Our comprehensive portfolio spans utility-scale solar farms, industrial rooftop installations, energy storage systems, and smart grid integration solutions. Operating from our headquarters in Dehradun with strategic offices in New Delhi and Chandigarh, we serve manufacturing facilities, commercial complexes, government institutions, and utility companies across India.
          </p>
          <p className="mb-4">
            As an ISO-certified organization, we maintain the highest standards in project execution, safety protocols, and quality assurance, ensuring reliable and efficient solar energy solutions that drive industrial competitiveness and sustainability goals.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Mission & Vision for Industrial Excellence</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl leading-relaxed mx-auto" style={{ maxWidth: '64rem' }}>
            We are committed to transforming India's industrial energy landscape by delivering scalable, reliable, and cost-effective solar energy infrastructure. Our mission is to enable industrial enterprises to achieve energy independence, reduce operational costs, and meet sustainability targets through innovative renewable energy solutions. We strive to be the preferred partner for utility-scale solar projects, driving India's transition to clean energy while enhancing industrial competitiveness in the global market.
          </p>
        </div>
      </section>

      {/* Why Choose Smera Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Industrial Leaders Choose Smera</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Factory className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Utility-Scale Expertise</h3>
              <p>Specialized in multi-megawatt installations with advanced grid integration, energy storage systems, and smart monitoring solutions for industrial applications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Industrial Track Record</h3>
              <p>18+ MW of successful installations across manufacturing, hospitality, and government sectors with guaranteed performance and minimal downtime.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Partnerships</h3>
              <p>Strategic alliances with tier-1 manufacturers like WAAREE, Luminous, TATA, Adani, and Sungrow ensuring premium components and extended warranties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive O&M Services</h3>
              <p>Long-term maintenance contracts with 24/7 monitoring, predictive maintenance, and guaranteed performance levels for maximum ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Solar Solutions Deep Dive */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Enterprise Solar Infrastructure: Powering Industrial Growth</h2>
          <p className="mb-4 text-center max-w-3xl mx-auto">
            Our industrial solar solutions are engineered for high-performance applications, designed to meet the demanding energy requirements of manufacturing facilities, commercial complexes, and utility-scale projects.
          </p>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            From ground-mounted solar farms to integrated energy storage systems, we deliver comprehensive solutions that optimize energy costs, enhance grid stability, and support industrial sustainability initiatives.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-center">Core Components of Industrial Solar Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Sun className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Utility-Scale Solar Arrays</h4>
              <p>High-efficiency mono-crystalline modules with advanced tracking systems, optimized for maximum energy yield in industrial applications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Grid-Scale Inverters</h4>
              <p>Central and string inverters with advanced grid support functions, reactive power control, and seamless utility integration capabilities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <BatteryCharging className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Energy Storage Systems</h4>
              <p>Lithium-ion battery systems for peak shaving, load balancing, and grid stability, with advanced battery management systems for optimal performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Settings className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">SCADA & Monitoring</h4>
              <p>Advanced supervisory control and data acquisition systems with real-time monitoring, predictive analytics, and remote diagnostics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Protection Systems</h4>
              <p>Comprehensive electrical protection including surge arresters, arc fault detection, and advanced relay protection for industrial safety standards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Factory className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Grid Integration</h4>
              <p>Seamless integration with existing electrical infrastructure, including power factor correction and harmonic filtering for industrial loads.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-center">Industrial Solar Implementation Process</h3>
          <div className="relative flex flex-col items-center">
            <div className="absolute h-full w-1 bg-blue-300 rounded-full" style={{ left: '50%', transform: 'translateX(-50%)' }}></div>
            {[{
              title: "Phase 1: Energy Audit & Feasibility",
              description: "Comprehensive load analysis, site assessment, and financial modeling to determine optimal system configuration and ROI projections.",
              icon: <Settings className="h-8 w-8 text-white" />
            }, {
              title: "Phase 2: System Design & Engineering",
              description: "Detailed engineering design with 3D modeling, electrical schematics, structural analysis, and grid impact studies.",
              icon: <Lightbulb className="h-8 w-8 text-white" />
            }, {
              title: "Phase 3: Regulatory Approvals",
              description: "Complete handling of permits, environmental clearances, grid connection approvals, and utility coordination.",
              icon: <Shield className="h-8 w-8 text-white" />
            }, {
              title: "Phase 4: Procurement & Logistics",
              description: "Strategic sourcing of premium components, quality assurance testing, and coordinated delivery to minimize project timeline.",
              icon: <Factory className="h-8 w-8 text-white" />
            }, {
              title: "Phase 5: Construction & Commissioning",
              description: "Professional installation by certified technicians with rigorous testing, commissioning, and performance validation.",
              icon: <CheckCircle className="h-8 w-8 text-white" />
            }].map((step, index) => (
              <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2 p-4">
                  <div className={`relative ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="absolute top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-3 z-10"
                         style={index % 2 === 0 ? { right: '-2.5rem' } : { left: '-2.5rem' }}>
                      {step.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-center">Industrial Solar Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Significant Cost Reduction</h4>
              <p>Reduce electricity costs by 30-70% with long-term price stability and protection against utility rate increases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Enhanced Energy Security</h4>
              <p>Reduce dependence on grid electricity with reliable, predictable energy generation and optional backup power capabilities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Sustainability Leadership</h4>
              <p>Achieve carbon neutrality goals, enhance corporate ESG ratings, and demonstrate environmental responsibility to stakeholders.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Handshake className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Competitive Advantage</h4>
              <p>Lower operational costs, improved profit margins, and enhanced market positioning through sustainable business practices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;