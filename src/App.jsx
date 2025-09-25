import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { NotificationProvider } from './components/ui/NotificationSystem';
import { ThemeProvider } from './components/ui/ThemeSystem';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Protocol from './pages/Protocol';
import Platform from './pages/Platform';
import Assets from './pages/Assets';
import ComingSoon from './pages/ComingSoon';
import ProtocolArchitecture from './pages/ProtocolArchitecture';
import LegalVault from './pages/LegalVault';
import SkyLinkBridge from './pages/SkyLinkBridge';
import MRVESG from './pages/MRVESG';
import PlatformDashboards from './pages/PlatformDashboards';
import PlatformIndices from './pages/PlatformIndices';
import PlatformDataAPI from './pages/PlatformDataAPI';
import ARCHTScan from './pages/ARCHTScan';
import AssetExplorer from './pages/AssetExplorer';
import Economics from './pages/Economics';
import BrazilPilot from './pages/BrazilPilot';

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <div className="App">
          <Routes>
            {/* Rutas principales */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/protocol" element={<Layout><Protocol /></Layout>} />
            <Route path="/platform" element={<Layout><Platform /></Layout>} />
            <Route path="/assets" element={<Layout><Assets /></Layout>} />
            <Route path="/economics" element={<Layout><Economics /></Layout>} />
            
            {/* Páginas Coming Soon */}
            <Route path="/governance" element={<Layout><ComingSoon title="Governance" description="DAO structure and veARCHT" /></Layout>} />
            <Route path="/onboarding" element={<Layout><ComingSoon title="Onboarding" description="7-phase framework" /></Layout>} />
            <Route path="/roadmap" element={<Layout><ComingSoon title="Roadmap" description="36-month timeline" /></Layout>} />
            <Route path="/risk" element={<Layout><ComingSoon title="Risk & Security" description="Security measures and risk management" /></Layout>} />
            <Route path="/impact" element={<Layout><ComingSoon title="Impact" description="KPIs and metrics" /></Layout>} />
            <Route path="/contact" element={<Layout><ComingSoon title="Contact" description="Get in touch with us" /></Layout>} />
            
            {/* Subpáginas del Protocol */}
            <Route path="/protocol/architecture" element={<Layout><ProtocolArchitecture /></Layout>} />
            <Route path="/protocol/legalvault" element={<Layout><LegalVault /></Layout>} />
            <Route path="/protocol/skylink" element={<Layout><SkyLinkBridge /></Layout>} />
            <Route path="/protocol/mrv-esg" element={<Layout><MRVESG /></Layout>} />
            
            {/* Subpáginas de Platform */}
            <Route path="/platform/archt-scan" element={<Layout><ARCHTScan /></Layout>} />
            <Route path="/platform/dashboards" element={<Layout><PlatformDashboards /></Layout>} />
            <Route path="/platform/indices" element={<Layout><PlatformIndices /></Layout>} />
            <Route path="/platform/data-api" element={<Layout><PlatformDataAPI /></Layout>} />
            
            {/* Subpáginas de Assets */}
            <Route path="/assets/brazil" element={<Layout><BrazilPilot /></Layout>} />
            <Route path="/assets/explorer" element={<Layout><AssetExplorer /></Layout>} />
            
            {/* Ruta por defecto */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;