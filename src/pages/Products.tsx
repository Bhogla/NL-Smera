import { Sun, Lightbulb, Shield, Settings, Wind, Thermometer, Bolt, Car, Home, Factory, Sprout, Building2, Zap, Battery, Monitor, Grid3x3 } from 'lucide-react';
import p1 from '../assets/Product/p1.jpg';
import p2 from '../assets/Product/p2.jpg';
import p3 from '../assets/Product/p3.jpg';
import p4 from '../assets/Product/p4.jpg';
import p5 from '../assets/Product/p5.jpg';
import p6 from '../assets/Product/p6.jpg';

const Products = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-32 relative overflow-hidden">
        <img src={p5} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial & Commercial Solar Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive renewable energy infrastructure for manufacturing facilities, commercial complexes, and utility-scale projects. From multi-megawatt solar farms to integrated energy storage systems.
          </p>
        </div>
      </section>

      {/* Utility-Scale Solar Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">1. Utility-Scale Solar Infrastructure</h2>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            Large-scale solar installations designed for industrial manufacturing, commercial businesses, and utility companies. Our solutions deliver reliable, cost-effective clean energy with advanced grid integration capabilities.
          </p>
          <div className="mb-12">
            <img src={p1} alt="Utility Scale Solar" className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
          </div>

          {/* Ground-Mounted Solar Farms */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Sun className="mr-3" /> Ground-Mounted Solar Farms (5MW+)</h3>
            <p className="mb-4">Utility-scale solar installations optimized for maximum energy generation and grid stability, suitable for industrial parks, manufacturing facilities, and independent power producers.</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><span className="font-semibold">Fixed-Tilt Systems:</span> Cost-effective ground-mounted arrays with optimal tilt angles for maximum annual energy yield.</li>
              <li><span className="font-semibold">Single-Axis Tracking:</span> Advanced tracking systems that increase energy generation by 15-25% compared to fixed systems.</li>
              <li><span className="font-semibold">Floating Solar:</span> Innovative floating photovoltaic systems for water bodies, reducing land requirements and water evaporation.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-3">Technical Specifications:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>High-efficiency mono-crystalline modules (450W+ per panel)</li>
              <li>Central inverters with 99%+ efficiency and grid support functions</li>
              <li>Advanced monitoring systems with SCADA integration</li>
              <li>Comprehensive electrical protection and safety systems</li>
            </ul>
          </div>

          {/* Commercial Rooftop Systems */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Building2 className="mr-3" /> Commercial Rooftop Systems</h3>
            <p className="mb-4">High-capacity rooftop installations for office complexes, warehouses, manufacturing facilities, and retail centers, designed to maximize available roof space and energy generation.</p>
            <h4 className="text-xl font-semibold mb-3">Available Configurations:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Capacity range: 100kW to 10MW+ per installation</li>
              <li><span className="font-semibold">Ballasted Systems:</span> Non-penetrating mounting for membrane roofs with wind uplift calculations</li>
              <li><span className="font-semibold">Penetrating Systems:</span> Structurally attached systems for metal and concrete roofs with weatherproofing</li>
              <li><span className="font-semibold">Canopy Systems:</span> Elevated installations providing shade for parking areas and equipment</li>
            </ul>
          </div>

          {/* Agri-Voltaic Systems */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Sprout className="mr-3" /> Agri-Voltaic Systems</h3>
            <p className="mb-4">Innovative dual-use systems that combine solar energy generation with agricultural activities, maximizing land utilization while providing additional revenue streams for farmers and agribusinesses.</p>
            <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Elevated solar panels allowing continued farming underneath</li>
              <li>Optimized spacing for agricultural equipment access</li>
              <li>Integrated irrigation systems powered by solar energy</li>
              <li>Crop protection from extreme weather conditions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Energy Storage Systems */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">2. Industrial Energy Storage Systems</h2>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            Advanced battery energy storage solutions for grid-scale applications, peak shaving, load balancing, and backup power for critical industrial operations.
          </p>
          <div className="mb-12">
            <img src={p4} alt="Energy Storage Systems" className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
          </div>

          {/* Grid-Scale Battery Storage */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Battery className="mr-3" /> Grid-Scale Battery Storage</h3>
            <p className="mb-4">Utility-scale lithium-ion battery systems designed for grid stabilization, renewable energy integration, and industrial load management.</p>
            <h4 className="text-xl font-semibold mb-3">System Capabilities:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><span className="font-semibold">Capacity Range:</span> 1MWh to 100MWh+ configurations</li>
              <li><span className="font-semibold">Response Time:</span> Sub-second response for grid frequency regulation</li>
              <li><span className="font-semibold">Efficiency:</span> 95%+ round-trip efficiency with advanced thermal management</li>
            </ul>
            <h4 className="text-xl font-semibold mb-3">Applications:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Peak shaving and demand charge reduction</li>
              <li>Grid frequency regulation and voltage support</li>
              <li>Renewable energy time-shifting and smoothing</li>
              <li>Emergency backup power for critical loads</li>
            </ul>
          </div>

          {/* Microgrid Solutions */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Grid3x3 className="mr-3" /> Microgrid Integration</h3>
            <p className="mb-4">Comprehensive microgrid solutions combining solar generation, energy storage, and intelligent control systems for industrial facilities requiring high reliability and energy independence.</p>
            <h4 className="text-xl font-semibold mb-3">Key Components:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Advanced energy management systems (EMS)</li>
              <li>Seamless grid-tie and islanding capabilities</li>
              <li>Load prioritization and automatic switching</li>
              <li>Real-time optimization algorithms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Smart Monitoring & Control Systems */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">3. Smart Monitoring & Control Systems</h2>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            Advanced SCADA systems, IoT sensors, and AI-powered analytics for optimal performance monitoring, predictive maintenance, and remote system management.
          </p>
          <div className="mb-12">
            <img src={p6} alt="Smart Monitoring Systems" className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Monitor className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SCADA Integration</h3>
              <p>Comprehensive supervisory control and data acquisition systems with real-time monitoring, alarm management, and remote control capabilities.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Settings className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
              <p>AI-powered performance analysis, fault detection, and maintenance scheduling to maximize system uptime and energy yield.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p>Industrial-grade cybersecurity protocols protecting critical infrastructure from cyber threats and unauthorized access.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Comprehensive EPC Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">4. Turnkey EPC & Long-term O&M Services</h2>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            Complete project lifecycle management from initial feasibility studies to long-term operations and maintenance contracts, ensuring optimal performance throughout the system lifetime.
          </p>
          <div className="mb-12">
            <img src={p3} alt="EPC Services" className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Bolt className="mr-3" /> Engineering, Procurement & Construction (EPC)</h3>
            <p className="mb-4">Comprehensive project delivery services for utility-scale and commercial solar installations:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><span className="font-semibold">Feasibility Studies:</span> Detailed technical and financial analysis including energy yield modeling and grid impact studies</li>
              <li><span className="font-semibold">System Design:</span> Advanced 3D modeling, electrical design, and structural engineering optimized for site conditions</li>
              <li><span className="font-semibold">Procurement:</span> Strategic sourcing of tier-1 components with quality assurance and supply chain management</li>
              <li><span className="font-semibold">Construction:</span> Professional installation by certified technicians with rigorous safety and quality protocols</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Settings className="mr-3" /> Operations & Maintenance (O&M)</h3>
            <p className="mb-4">Comprehensive long-term service contracts ensuring optimal system performance and maximum return on investment:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>24/7 remote monitoring and performance analysis</li>
              <li>Preventive and corrective maintenance programs</li>
              <li>Performance guarantees and energy yield warranties</li>
              <li>Spare parts management and emergency response services</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Lightbulb className="mr-3" /> Project Development Services</h3>
            <p>End-to-end project development including land acquisition, regulatory approvals, financing assistance, and grid connection coordination for large-scale solar projects.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;