import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

function TestPage({ title, description }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Card className="bg-black border border-gray-800">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 text-cyan-400">{title}</h1>
              <p className="text-xl text-gray-300 mb-8">{description}</p>
              
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-8">
                <h2 className="text-green-400 font-semibold mb-2">✅ Navegación Funcionando</h2>
                <p className="text-gray-300">Esta página demuestra que la navegación a subpáginas está funcionando correctamente.</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-gray-900 border border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">Navegación Principal</h3>
                  <div className="space-y-3">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/">🏠 Home</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/dashboard">📊 Dashboard</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/platform">🖥️ Platform</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/assets">💎 Assets</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">Subpáginas</h3>
                  <div className="space-y-3">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/protocol/architecture">🏗️ Architecture</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/protocol/legalvault">⚖️ LegalVault</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/platform/dashboards">📈 Dashboards</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/assets/brazil">🇧🇷 Brazil Pilot</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-4">Usa el menú superior para navegar entre páginas y subpáginas</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="gradient">
                  <Link to="/">Volver al Home</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/dashboard">Ir al Dashboard</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TestPage;