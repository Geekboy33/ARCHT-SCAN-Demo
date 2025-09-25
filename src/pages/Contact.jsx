import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "contact@archetypworld.org",
        "contact@aureongquantum.com"
      ],
      color: "text-cyan-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: [
        "+1 (555) 123-4567",
        "+971 4 123 4567"
      ],
      color: "text-white"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Offices",
      details: [
        "São Paulo, Brazil",
        "Dubai, UAE",
        "Singapore"
      ],
      color: "text-gray-300"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: [
        "24/7 Support",
        "Global Coverage"
      ],
      color: "text-gray-400"
    }
  ];

  const departments = [
    {
      title: "Government Relations",
      description: "Sovereign onboarding and institutional partnerships",
      email: "government@archetypworld.org"
    },
    {
      title: "Enterprise Solutions",
      description: "Corporate tokenization and asset management",
      email: "enterprise@archetypworld.org"
    },
    {
      title: "Technical Support",
      description: "Developer resources and technical assistance",
      email: "support@archetypworld.org"
    },
    {
      title: "Media & Press",
      description: "Press inquiries and media relations",
      email: "press@archetypworld.org"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get in touch with our team for institutional requests, partnerships, and technical support.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">24/7 Support</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">Global Coverage</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">Institutional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Contact our team for institutional partnerships and technical support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`${info.color} mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto w-fit`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-300 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Departments</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized teams for different types of inquiries and partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{dept.title}</CardTitle>
                  <p className="text-gray-400">{dept.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-mono text-sm">{dept.email}</span>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Send us a Message</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <Card className="bg-black/50 border border-gray-800">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your organization"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Inquiry Type
                </label>
                <select className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option value="">Select inquiry type</option>
                  <option value="government">Government Partnership</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="technical">Technical Support</option>
                  <option value="media">Media & Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <div className="text-center">
                <Button variant="gradient" size="lg" className="w-full md:w-auto">
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of tokenized real-world assets with ARCHT Protocol.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              Download Whitepaper
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;