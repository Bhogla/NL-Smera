import React from 'react';
import p8 from '../assets/Product/p8.jpg';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Building2, Factory, Zap, Clock, Users, Award, Shield } from 'lucide-react';

const Contact = () => {
  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency Support", hours: "24/7 Available" }
  ];

  const serviceAreas = [
    "Delhi NCR", "Punjab", "Haryana", "Uttarakhand", "Uttar Pradesh", "Rajasthan", "Gujarat", "Maharashtra"
  ];

  const contactReasons = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing Facilities",
      description: "Utility-scale solar solutions for industrial manufacturing, reducing operational costs and enhancing energy security.",
      color: "steel-blue"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Commercial Complexes",
      description: "High-capacity rooftop installations for office buildings, retail centers, and hospitality sector.",
      color: "forest-green"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Utility-Scale Projects",
      description: "Multi-megawatt solar farms with energy storage integration and grid stabilization capabilities.",
      color: "burnt-yellow"
    }
  ];

  const whyChooseUs = [
    { metric: "18+", label: "MW Installed", description: "Proven track record in utility-scale installations" },
    { metric: "99.5%", label: "System Uptime", description: "Industry-leading reliability and performance" },
    { metric: "25+", label: "Smera Clients", description: "Trusted by leading industrial companies" },
    { metric: "24/7", label: "Support", description: "Round-the-clock monitoring and maintenance" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Enhanced Contact Header */}
      <section className="relative bg-cover bg-center text-white py-32 overflow-hidden" style={{ backgroundImage: `url(${p8})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block bg-burnt-yellow-500/20 text-burnt-yellow-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-burnt-yellow-500/30">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Partner with 
              <span className="text-burnt-yellow-400"> Smera</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90">
              Ready to transform your industrial energy infrastructure? Connect with our Smera solar specialists for comprehensive renewable energy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-steel-blue-100 text-steel-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Smera Solar Consultation</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactReasons.map((reason, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className={`bg-${reason.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`text-${reason.color}-600`}>
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-steel-blue-800 mb-4">{reason.title}</h3>
                <p className="text-charcoal leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information & Form */}
      <section className="py-20 bg-gradient-to-br from-steel-blue-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Contact Form Section */}
              <div className="p-12 lg:p-16">
                <div className="mb-8">
                  <span className="inline-block bg-forest-green-100 text-forest-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Request Consultation
                  </span>
                  <h2 className="text-4xl font-bold text-steel-blue-800 mb-4">Request Smera Consultation</h2>
                  <p className="text-lg text-charcoal leading-relaxed">
                    Ready to explore industrial solar solutions? Our Smera specialists will conduct a comprehensive energy audit and provide customized recommendations for your facility.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Contact Information Section */}
              <div className="bg-gradient-to-br from-steel-blue-800 to-steel-blue-900 text-white p-12 lg:p-16">
                <div className="mb-8">
                  <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                    Contact Details
                  </span>
                  <h2 className="text-4xl font-bold mb-6">Smera Solutions Center</h2>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-burnt-yellow-500 p-3 rounded-2xl mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-steel-blue-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Corporate Headquarters</h3>
                      <p className="text-gray-200 leading-relaxed mb-2">
                        Ground Floor, Raj Tower, Opp. Sant Nirankari Satsang Bhawan, Kargi Chowk, Dehradun(UK)-248001.
                      </p>
                      <p className="text-gray-300 text-sm">
                        Serving industrial clients across North India with regional offices in New Delhi and Chandigarh.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-burnt-yellow-500 p-3 rounded-2xl mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-steel-blue-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Smera Hotline</h3>
                      <div className="space-y-1">
                        <p className="text-gray-200">
                          <a href="tel:+919719295383" className="hover:text-burnt-yellow-300 transition-colors">
                            +91 9719295383
                          </a> (Primary)
                        </p>
                        <p className="text-gray-200">
                          <a href="tel:+918126475070" className="hover:text-burnt-yellow-300 transition-colors">
                            +91 8126475070
                          </a> (Projects)
                        </p>
                      </div>
                      <p className="text-gray-300 text-sm mt-2">
                        24/7 support for existing industrial installations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-burnt-yellow-500 p-3 rounded-2xl mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-steel-blue-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Business Development</h3>
                      <p className="text-gray-200">
                        <a href="mailto:smerasolar@gmail.com" className="hover:text-burnt-yellow-300 transition-colors">
                          smerasolar@gmail.com
                        </a>
                      </p>
                      <p className="text-gray-300 text-sm mt-2">
                        For project inquiries, partnerships, and technical consultations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Coverage */}
                <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Service Coverage
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Pan-India project delivery with specialized focus on North Indian industrial corridors including Delhi NCR, Punjab, Haryana, Uttarakhand, and Uttar Pradesh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Business Hours & Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-steel-blue-100 p-3 rounded-2xl mr-4">
                  <Clock className="h-8 w-8 text-steel-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-steel-blue-800">Business Hours</h3>
              </div>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-charcoal">{schedule.day}</span>
                    <span className={`font-semibold ${schedule.day === "Emergency Support" ? "text-forest-green-600" : "text-steel-blue-600"}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-forest-green-100 p-3 rounded-2xl mr-4">
                  <MapPin className="h-8 w-8 text-forest-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-steel-blue-800">Service Areas</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                    <span className="text-charcoal font-medium">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-charcoal mt-4 text-center">
                Expanding coverage across India with regional partnerships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Google Maps */}
      <section className="py-20 bg-gradient-to-br from-steel-blue-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-steel-blue-100 text-steel-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Visit Us
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Find Our Office</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.9984630000007!2d78.0419599150779!3d30.31649498179499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c5f0000001%3A0x1234567890abcdef!2sRaj%20Tower%2C%20Haridwar%20Bypass%20Road%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Smera */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-burnt-yellow-100 text-burnt-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-6">Why Smera Clients Choose Smera</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="bg-gradient-to-br from-steel-blue-500 to-steel-blue-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold">{item.metric}</span>
                </div>
                <h3 className="text-xl font-bold text-steel-blue-800 mb-3">{item.label}</h3>
                <p className="text-charcoal leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-forest-green-600 to-forest-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Take the first step towards energy independence and sustainability. Our team of experts is ready to help you design and implement the perfect solar solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+919719295383"
              className="group bg-white text-forest-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl flex items-center justify-center"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call Now: +91 9719295383
            </a>
            <a
              href="mailto:smerasolar@gmail.com"
              className="group border-2 border-white text-white hover:bg-white hover:text-forest-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;