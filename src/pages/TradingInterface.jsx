import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function TradingInterface() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            Trading Interface
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional-grade trading interface for tokenized real-world assets with advanced analytics and risk management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-violet-400">Order Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Advanced order types including limit, market, and algorithmic trading strategies.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Risk Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Real-time risk assessment and portfolio analytics with ESG scoring and compliance monitoring.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-indigo-400">Market Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Live market data, price feeds, and fundamental analysis for informed trading decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TradingInterface;


