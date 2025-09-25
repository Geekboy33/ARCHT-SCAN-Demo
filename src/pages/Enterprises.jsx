import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Enterprises() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your physical assets into liquid digital tokens with institutional-grade security and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">Asset Tokenization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Convert physical assets into tradeable digital tokens with instant liquidity and global market access.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">Supply Chain</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                End-to-end traceability and transparency across your entire supply chain with real-time monitoring.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Automated regulatory compliance with MiCA, FATF, and Basel III standards built-in.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Enterprises;


