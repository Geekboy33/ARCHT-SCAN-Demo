import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, BarChart3, Shield, Globe, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function CookiePolicy() {
  const cookieTypes = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Essential Cookies",
      description: "Required for basic platform functionality and security",
      color: "text-cyan-400",
      required: true
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Cookies",
      description: "Help us understand how users interact with our platform",
      color: "text-white",
      required: false
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Functional Cookies",
      description: "Remember your preferences and personalize your experience",
      color: "text-gray-300",
      required: false
    }
  ];

  const cookieDetails = [
    {
      category: "Authentication",
      cookies: [
        { name: "auth_token", purpose: "User authentication", duration: "30 days", type: "Essential" },
        { name: "session_id", purpose: "Session management", duration: "Session", type: "Essential" }
      ]
    },
    {
      category: "Analytics",
      cookies: [
        { name: "analytics_id", purpose: "User behavior tracking", duration: "2 years", type: "Analytics" },
        { name: "performance_metrics", purpose: "Platform performance", duration: "1 year", type: "Analytics" }
      ]
    },
    {
      category: "Preferences",
      cookies: [
        { name: "language_pref", purpose: "Language selection", duration: "1 year", type: "Functional" },
        { name: "theme_pref", purpose: "Theme preferences", duration: "1 year", type: "Functional" }
      ]
    }
  ];

  const cookieSettings = [
    { setting: "Essential Cookies", description: "Required for platform operation", enabled: true, disabled: true },
    { setting: "Analytics Cookies", description: "Help improve our services", enabled: true, disabled: false },
    { setting: "Marketing Cookies", description: "Personalized content and ads", enabled: false, disabled: false },
    { setting: "Functional Cookies", description: "Enhanced user experience", enabled: true, disabled: false }
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
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-archetyp-400 via-archetyp-500 to-archetyp-600 bg-clip-text text-transparent tracking-tight">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Learn how we use cookies and similar technologies to enhance your experience on ARCHT Protocol.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">GDPR Compliant</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">User Control</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Types of Cookies</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Different types of cookies we use and their purposes on our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cookieTypes.map((type, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`${type.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {type.icon}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{type.title}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      type.required 
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {type.required ? 'Required' : 'Optional'}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cookie Details</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed information about specific cookies used on our platform.
            </p>
          </div>

          <div className="space-y-8">
            {cookieDetails.map((category, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-3 text-gray-300 font-semibold">Cookie Name</th>
                          <th className="text-left py-3 text-gray-300 font-semibold">Purpose</th>
                          <th className="text-left py-3 text-gray-300 font-semibold">Duration</th>
                          <th className="text-left py-3 text-gray-300 font-semibold">Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.cookies.map((cookie, cookieIndex) => (
                          <tr key={cookieIndex} className="border-b border-gray-800">
                            <td className="py-3 text-white font-mono text-sm">{cookie.name}</td>
                            <td className="py-3 text-gray-300">{cookie.purpose}</td>
                            <td className="py-3 text-gray-300">{cookie.duration}</td>
                            <td className="py-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                cookie.type === 'Essential' 
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : cookie.type === 'Analytics'
                                  ? 'bg-blue-500/20 text-blue-400'
                                  : 'bg-gray-500/20 text-gray-400'
                              }`}>
                                {cookie.type}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Settings */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cookie Preferences</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Manage your cookie preferences and control what data we collect.
            </p>
          </div>

          <Card className="bg-black/50 border border-gray-800 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Cookie Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {cookieSettings.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{setting.setting}</h4>
                      <p className="text-gray-400 text-sm">{setting.description}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        disabled={setting.disabled}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          setting.enabled 
                            ? 'bg-cyan-500' 
                            : 'bg-gray-600'
                        } ${setting.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            setting.enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="gradient" size="lg">
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Cookie Questions?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us if you have questions about our cookie policy or data practices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="gradient" size="lg">
              Contact Privacy Team
            </Button>
            <Button variant="outline" size="lg">
              Manage All Preferences
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CookiePolicy;