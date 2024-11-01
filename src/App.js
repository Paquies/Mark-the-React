import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Layout_navigation from './components/Layout_navigation';
import GettingStarted from './pages/GettingStarted.mdx';
import SettingUp from './pages/SettingUp.mdx';
import ConfiguringMDX from './pages/ConfiguringMDX.mdx';
import WritingMDXContent from './pages/WritingMDXContent.mdx';
import PracticalExamples from './pages/PracticalExamples.mdx';
import StylingMDXComponents from './pages/StylingMDXComponents.mdx';
import AdvancedTechniques from './pages/AdvancedTechniques.mdx';
import Deploying from './pages/Deploying.mdx';
import OnThisPageWrapper from './components/OnThisPageWrapper';


export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <Home>
          <div className="col-md-2" style={{ position: 'fixed', top: '75px', left: '30px', height: '100vh', overflowY: 'auto' }}>
            <Layout_navigation />
          </div>
          <div className="col-md-8" style={{ marginLeft: '16.66%', marginRight: '16.66%', paddingTop: '75px' }}>
            <MDXProvider>
              <div className="App">
                <div className="mt-5"></div>
                <Routes>
                  <Route path="/" element={<GettingStarted />} />
                  <Route path="/setting-up" element={<SettingUp />} />
                  <Route path="/configurinMDX" element={<ConfiguringMDX />} />
                  <Route path="/writing-mdx-content" element={<WritingMDXContent />} />
                  <Route path="/pratical-examples" element={<PracticalExamples />} />
                  <Route path="/styling-mdx-components" element={<StylingMDXComponents />} />
                  <Route path="/advanced-techniques" element={<AdvancedTechniques />} />
                  <Route path="/deploying" element={<Deploying />} />
                </Routes>
              </div>
            </MDXProvider>
          </div>
          <div className="col-md-2" style={{ position: 'fixed', top: '75px', right: '30px', height: '100vh', overflowY: 'auto' }}>
            <div className="mt-5">
              <OnThisPageWrapper />
            </div>
          </div>
        </Home>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}