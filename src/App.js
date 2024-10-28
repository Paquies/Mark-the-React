import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import GettingStarted from './pages/GettingStarted.mdx';
import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Nav from './components/Nav.tsx';
import Layout_navigation from './components/Layout_navigation.tsx';
import Home from './pages/Home.tsx';

export default function App() {
  return (
    <ErrorBoundary>
      <Header />
      <Home>
        <div className="col-md-3 ">
          <Layout_navigation />
        </div>
        <div className="col-md-9">
          <MDXProvider>
            <div className="App">
              <div className="mt-5"></div>
              <GettingStarted />
              <div ></div>
            </div>
          </MDXProvider>
        </div>
      </Home>
      <Footer />
    </ErrorBoundary>
  );
}