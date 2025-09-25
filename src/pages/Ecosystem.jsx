import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Ecosystem() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            ARCHT Ecosystem
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive ecosystem of partners, integrators, and developers building the future of real-world asset tokenization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-indigo-400">Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Strategic partnerships with governments, enterprises, and financial institutions worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Integrators</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Technology integrators and service providers building solutions on ARCHT Protocol.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-cyan-400">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Active developer community contributing to open-source tools and integrations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;


