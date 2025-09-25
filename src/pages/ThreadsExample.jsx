import React from 'react';
import Threads from '../components/Threads';

const ThreadsExample = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Threads 3D Effect
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Efecto de hilos animados en 3D usando WebGL y OGL
          </p>
        </div>

        {/* Ejemplo básico */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-cyan-400">Ejemplo Básico</h2>
          <div style={{ width: '100%', height: '600px', position: 'relative', border: '1px solid #374151', borderRadius: '8px' }}>
            <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction={true}
            />
          </div>
        </div>

        {/* Ejemplo con diferentes configuraciones */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Alta Amplitud</h3>
            <div style={{ width: '100%', height: '300px', position: 'relative', border: '1px solid #374151', borderRadius: '8px' }}>
              <Threads
                amplitude={2}
                distance={0.5}
                enableMouseInteraction={true}
                color={[0.06, 0.71, 0.51]}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">Efecto Mouse</h3>
            <div style={{ width: '100%', height: '300px', position: 'relative', border: '1px solid #374151', borderRadius: '8px' }}>
              <Threads
                amplitude={0.5}
                distance={1}
                enableMouseInteraction={true}
                color={[0.55, 0.36, 0.97]}
              />
            </div>
          </div>
        </div>

        {/* Código de ejemplo */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Código de Uso</h3>
          <div className="bg-gray-800 p-6 rounded-lg">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`import Threads from './Threads';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
    color={[0.024, 0.71, 0.83]}
  />
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadsExample;
