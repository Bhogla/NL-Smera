import React from 'react';
import p8 from '../assets/Product/p8.jpg';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Building2, Factory, Zap } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* Contact Header */}
      <section className="relative bg-cover bg-center text-white py-32" style={{ backgroundImage: `url(${p8})` }}>
        <div className="absolute inset-0 bg-blue-900 opacity-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner with Smera</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ready to transform your industrial energy infrastructure? Connect with our Smera solar specialists for comprehensive renewable energy solutions.
          </p>
        </div>
      </section>

      {/* Smera Services Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Smera Solar Consultation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Factory className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Manufacturing Facilities</h3>
              <p className="text-gray-600">Utility-scale solar solutions for industrial manufacturing, reducing operational costs and enhancing energy security.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Commercial Complexes</h3>
              <p className="text-gray-600">High-capacity rooftop installations for office buildings, retail centers, and hospitality sector.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Utility-Scale Projects</h3>
              <p className="text-gray-600">Multi-megawatt solar farms with energy storage integration and grid stabilization capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8 p-8 md:p-12 min-h-[600px]">
            {/* Contact Form */}
            <div className="lg:pr-8 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Request Smera Consultation</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to explore industrial solar solutions? Our Smera specialists will conduct a comprehensive energy audit and provide customized recommendations for your facility.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8 mt-12 lg:mt-0">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Smera Solutions Center</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Corporate Headquarters</h3>
                    <p className="text-gray-700 text-lg">Ground Floor, Raj Tower, Opp. Sant Nirankari Satsang Bhawan, Kargi Chowk, Dehradun(UK)-248001.</p>
                    <p className="text-gray-600 mt-2">Serving industrial clients across North India with regional offices in New Delhi and Chandigarh.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Smera Hotline</h3>
                    <p className="text-gray-700 text-lg">
                      <a href="tel:+919719295383" className="hover:underline">+91 9719295383</a> (Primary)
                    </p>
                    <p className="text-gray-700 text-lg">
                      <a href="tel:+918126475070" className="hover:underline">+91 8126475070</a> (Projects)
                    </p>
                    <p className="text-gray-600 mt-2">24/7 support for existing industrial installations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Business Development</h3>
                    <p className="text-gray-700 text-lg">
                      <a href="mailto:smerasolar@gmail.com" className="hover:underline">smerasolar@gmail.com</a>
                    </p>
                    <p className="text-gray-600 mt-2">For project inquiries, partnerships, and technical consultations</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Service Coverage</h3>
                <p className="text-gray-700">
                  Pan-India project delivery with specialized focus on North Indian industrial corridors including Delhi NCR, Punjab, Haryana, Uttarakhand, and Uttar Pradesh.
                </p>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.9984630000007!2d78.0419599150779!3d30.31649498179499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c5f0000001%3A0x1234567890abcdef!2sRaj%20Tower%2C%20Haridwar%20Bypass%20Road%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smera Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Smera Clients Choose Smera</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">18+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">MW Installed</h3>
              <p className="text-gray-600">Proven track record in utility-scale installations</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">99.5%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">System Uptime</h3>
              <p className="text-gray-600">Industry-leading reliability and performance</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">25+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smera Clients</h3>
              <p className="text-gray-600">Trusted by leading industrial companies</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">24/7</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <p className="text-gray-600">Round-the-clock monitoring and maintenance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;