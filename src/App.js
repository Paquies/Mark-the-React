import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout_navigation from './components/Layout_navigation';
import GettingStarted from './pages/GettingStarted.mdx';
import SettingUp from './pages/SettingUp.mdx';
import UnderstandingJSX from './pages/UnderstandingJSX.mdx';
import ComponentsAndProps from './pages/ComponentsAndProps.mdx';
import Home from './components/Home';
import StateAndLifecycle from './pages/StateAndLifecycle.mdx';
import HandlingEveents from './pages/HandlingEvents.mdx';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
          <Home>
            <div className="col-md-3">
              <Layout_navigation />
            </div>
            <div className="col-md-6">
              <MDXProvider>
              <div className="App">
                <div className="mt-5"></div>
                  <Routes>
                    <Route path="/" element={<GettingStarted />} />
                    <Route path="/setting-up" element={<SettingUp />} />
                    <Route path="/understanding-jsx" element={<UnderstandingJSX />} />
                    <Route path="/components-and-props" element={<ComponentsAndProps />} />
                    <Route path="/state-and-lifecycle" element={<StateAndLifecycle />} />
                    <Route path="/handling-events" element={<HandlingEveents />} />
                  </Routes>
                  <div></div>
              </div>
              </MDXProvider>
            </div>
          </Home>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}