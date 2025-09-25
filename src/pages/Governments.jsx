import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Governments() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Government Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sovereign-grade infrastructure for national asset tokenization, fiscal optimization, and economic sovereignty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-cyan-400">Fiscal Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Transform illiquid national assets into liquid digital tokens for enhanced fiscal management and economic growth.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">ESG Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Complete traceability and ESG reporting for all tokenized assets with automated compliance monitoring.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Economic Sovereignty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Maintain control over national resources while enabling global market access and liquidity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Governments;


