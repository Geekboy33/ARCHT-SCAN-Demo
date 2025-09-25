import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Insights() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            Market Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time analytics, market intelligence, and research insights on tokenized real-world assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-teal-400">Market Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Comprehensive market analysis and trend reports on tokenized asset performance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-cyan-400">Research Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                In-depth research on regulatory developments, technology trends, and market opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">Data Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                AI-powered insights and predictive analytics for informed decision making.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Insights;


