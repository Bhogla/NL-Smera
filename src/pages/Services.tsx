

import servicesBg from '../assets/services.jpg';

const Services = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 bg-cover bg-center" style={{ backgroundImage: `url(${servicesBg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Comprehensive Solar Services</h1>
          <p className="text-xl max-w-3xl">
            Delivering end-to-end renewable energy solutions, from feasibility studies and system design to installation, commissioning, and long-term operations & maintenance.
          </p>
        </div>
      </section>

      {/* Placeholder for Services Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Services Content Coming Soon!</h2>
          <p>We are currently developing detailed content for our services. Please check back soon for more information.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;