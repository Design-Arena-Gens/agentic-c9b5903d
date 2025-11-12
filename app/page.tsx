'use client';

import {
  ShoppingCart,
  Globe,
  Server,
  Wrench,
  Code,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "WordPress Development",
      description: "Custom WordPress websites tailored to your business needs with modern design and functionality."
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      title: "WooCommerce E-commerce",
      description: "Complete e-commerce solutions with WooCommerce, payment gateways, and inventory management."
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Domain Registration",
      description: "Secure your perfect domain name with competitive pricing and easy management."
    },
    {
      icon: <Server className="w-12 h-12 text-blue-600" />,
      title: "Web Hosting",
      description: "Fast, reliable, and secure hosting solutions with 99.9% uptime guarantee."
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Website Maintenance",
      description: "Regular updates, backups, security monitoring, and technical support for your website."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic to your site."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Secure Solutions",
      description: "Industry-standard security practices and SSL certificates"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      title: "Quality Assured",
      description: "Thorough testing and quality checks on every project"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$499",
      features: [
        "5-Page WordPress Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "1 Month Free Support"
      ]
    },
    {
      name: "Business",
      price: "$999",
      popular: true,
      features: [
        "10-Page WordPress Website",
        "Custom Theme Design",
        "Advanced SEO",
        "Social Media Integration",
        "3 Months Free Support",
        "Free Domain (1 Year)"
      ]
    },
    {
      name: "E-commerce",
      price: "$1,499",
      features: [
        "Full WooCommerce Setup",
        "Unlimited Products",
        "Payment Gateway Integration",
        "Inventory Management",
        "6 Months Free Support",
        "Free SSL Certificate"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">
              CHOWDHURY GLOBAL SOLUTIONS
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#packages" className="text-gray-700 hover:text-blue-600 transition">Packages</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 py-2">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 py-2">Services</a>
              <a href="#packages" className="block text-gray-700 hover:text-blue-600 py-2">Packages</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 py-2">Contact</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business Online
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Professional WordPress development, e-commerce solutions, and comprehensive web services to grow your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                {feature.icon}
                <div>
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive web solutions for your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 ${
                  pkg.popular
                    ? 'bg-blue-600 text-white shadow-2xl transform scale-105'
                    : 'bg-gray-50 text-gray-900'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {pkg.price}
                  <span className="text-lg font-normal opacity-75">/project</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        pkg.popular ? 'text-yellow-400' : 'text-blue-600'
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition ${
                    pkg.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Choose CHOWDHURY GLOBAL SOLUTIONS?</h2>
            <p className="text-xl mb-12">
              We deliver professional, reliable, and innovative web solutions that help businesses succeed online.
              With years of experience in WordPress development and e-commerce, we understand what it takes to
              create websites that not only look great but also drive results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-xl opacity-90">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-xl opacity-90">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-xl opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">Ready to start your project? Contact us today!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Service</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none">
                      <option>WordPress Development</option>
                      <option>WooCommerce E-commerce</option>
                      <option>Domain & Hosting</option>
                      <option>Website Maintenance</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                  <Mail className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@chowdhuryglobal.com</p>
                    <p className="text-gray-600">support@chowdhuryglobal.com</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                  <Phone className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      123 Business Avenue<br />
                      Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="bg-blue-600 p-6 rounded-xl text-white">
                  <h3 className="font-bold text-xl mb-2">Business Hours</h3>
                  <p className="mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CHOWDHURY GLOBAL SOLUTIONS</h3>
              <p className="text-gray-400">
                Your trusted partner for WordPress development and e-commerce solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">WordPress Development</a></li>
                <li><a href="#services" className="hover:text-white transition">WooCommerce</a></li>
                <li><a href="#services" className="hover:text-white transition">Domain & Hosting</a></li>
                <li><a href="#services" className="hover:text-white transition">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">About Us</a></li>
                <li><a href="#packages" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CHOWDHURY GLOBAL SOLUTIONS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
