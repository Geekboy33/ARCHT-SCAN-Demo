import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
            About ARCHT Protocol
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of real-world asset tokenization with sovereign-grade infrastructure and institutional compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-pink-400">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                To democratize access to real-world assets through secure, compliant, and liquid tokenization infrastructure.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-rose-400">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                A world where every physical asset can be instantly tokenized, traded, and accessed globally with full transparency.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Security, transparency, compliance, and innovation at the core of everything we build and deliver.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;


