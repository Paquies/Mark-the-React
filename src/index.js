import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss';
import $ from 'jquery';

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("Root element not found");
}