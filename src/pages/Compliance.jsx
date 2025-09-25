import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Compliance() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Compliance & Regulation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automated compliance with global regulatory frameworks including MiCA, FATF, and Basel III standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-yellow-400">MiCA Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Full compliance with EU Markets in Crypto-Assets regulation for institutional-grade tokenization.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">FATF Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Anti-money laundering and counter-terrorism financing compliance with automated reporting.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">Basel III</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Banking regulation compliance with capital adequacy and liquidity requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Compliance;


