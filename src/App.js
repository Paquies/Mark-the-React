import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout_navigation from './components/Layout_navigation';
import GettingStarted from './pages/GettingStarted.mdx';
import SettingUp from './pages/SettingUp.mdx';
import ConfiguringMDX from './pages/ConfiguringMDX.mdx';
import WritingMDXContent from './pages/WritingMDXContent.mdx';
import Home from './components/Home';
import PracticalExamples from './pages/PracticalExamples.mdx';
import StylingMDXComponents from './pages/StylingMDXComponents.mdx';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
          <Home>
            <div className="col-md-2">
              <Layout_navigation />
            </div>
            <div className="col-md-8">
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
                  </Routes>
                  <div></div>
              </div>
              </MDXProvider>
            </div>
            <div className="col-md-2">
              <div className="mt-5">
                <h4>Ads</h4>
                <div className="ads">Ads</div>
              </div>
            </div>
          </Home>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}