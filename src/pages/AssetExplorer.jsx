import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function AssetExplorer() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
            Asset Explorer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover and explore all tokenized real-world assets across mining, agriculture, energy, and carbon markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-emerald-400">Mining Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Explore tokenized mining assets including precious metals, base metals, and strategic minerals.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">Agricultural Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Discover agricultural commodities and food security assets from around the world.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">Energy Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Access renewable energy projects and green hydrogen initiatives globally.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AssetExplorer;


