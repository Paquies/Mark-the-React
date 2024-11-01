import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OnThisPage from './OnThisPage';

const titlesMap = {
  '/': [
    { title: 'Overview of React', link: '#overview-of-react' },
    { title: 'What is MDX?', link: '#what-is-mdx' },
    { title: 'Why Combine React and MDX?', link: '#why-combine-react-and-mdx' }
  ],
  '/setting-up': [
    { title: 'Prerequisites', link: '#prerequisites' },
    { title: 'Installing Node.js and npm', link: '#installing-nodejs-and-npm' },
    { title: 'Creating a React Project', link: '#creating-a-react-project' },
    { title: 'Adding MDX Support', link: '#adding-mdx-support' },
    { title: 'Running the Development Server', link: '#running-the-development-server' }
  ],
  '/configurinMDX': [
    { title: 'Adding MDX to Webpack/Bundler', link: '#adding-mdx-to-webpack-bundler' },
    { title: 'Setting up MDX Provider', link: '#setting-up-mdx-provider' },
    { title: 'Using Custom Components', link: '#using-custom-components' }
  ],
  '/writing-mdx-content': [
    { title: 'Basic Markdown Syntax', link: '#basic-markdown-syntax' },
    { title: 'Embedding React Components in MDX', link: '#embedding-react-components-in-mdx' },
    { title: 'Using Custom Components', link: '#using-custom-components' }
  ],
  '/pratical-examples': [
    { title: 'Interactive Documentation with React in MDX', link: '#interactive-documentation-with-react-in-mdx' },
    { title: 'Live Code Examples in MDX', link: '#live-code-examples-in-mdx' },
    { title: 'Dynamic Blog Post in MDX', link: '#dynamic-blog-post-in-mdx' }
  ],
  '/styling-mdx-components': [
    { title: 'Using CSS Modules', link: '#using-css-modules' },
    { title: 'Inline Styles', link: '#inline-styles' },
    { title: 'Global Styles', link: '#global-styles' }
  ],
  '/advanced-techniques': [
    { title: 'Building Custom Shortcodes', link: '#building-custom-shortcodes' },
    { title: 'Using MDX with React Router', link: '#using-mdx-with-react-router' },
    { title: 'Creating a Component Library', link: '#creating-a-component-library' }
  ],
  '/deploying': [
    { title: 'Deploying the React-MDX Project', link: '#deploying-the-react-mdx-project' },
    { title: 'Building for Production', link: '#building-for-production' },
    { title: 'Hosting Options', link: '#hosting-options' },
    { title: 'Vercel', link: '#vercel' },
    { title: 'Netlify', link: '#netlify' },
    { title: 'GitHub Pages', link: '#github-pages' }
  ]
};

const OnThisPageWrapper = () => (
  <Routes>
    <Route path="/" element={<OnThisPage titles={titlesMap['/']} />} />
    <Route path="/setting-up" element={<OnThisPage titles={titlesMap['/setting-up']} />} />
    <Route path="/configurinMDX" element={<OnThisPage titles={titlesMap['/configurinMDX']} />} />
    <Route path="/writing-mdx-content" element={<OnThisPage titles={titlesMap['/writing-mdx-content']} />} />
    <Route path="/pratical-examples" element={<OnThisPage titles={titlesMap['/pratical-examples']} />} />
    <Route path="/styling-mdx-components" element={<OnThisPage titles={titlesMap['/styling-mdx-components']} />} />
    <Route path="/advanced-techniques" element={<OnThisPage titles={titlesMap['/advanced-techniques']} />} />
    <Route path="/deploying" element={<OnThisPage titles={titlesMap['/deploying']} />} />
  </Routes>
);

export default OnThisPageWrapper;