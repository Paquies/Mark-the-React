import React from "react";
import { Link } from 'react-router-dom';

export default function Layout_navigation() {
    return (
        <div className="navigation_layout" style={{ overflowY: 'scroll', maxHeight: '60vh', scrollbarWidth: 'thin', scrollbarColor: '#444 transparent', color: '#fff' }}> 
            <nav className="navigation_categories mt-5">
                <div className="navigation_category mb-4">
                    <h5 className="text-light">Getting started</h5>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/">Introduction</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/setting-up">Setting up a React Project</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/understanding-jsx">Understanding JSX</Link></li>
                    </ul>
                </div>
                <div className="navigation_category mb-4">
                    <h5 className="text-light">Components and Props</h5>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/components-and-props">Components and Props</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/state-and-lifecycle">State and Lifecycle</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/handling-events">Handling Events</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/conditional-rendering">Conditional Rendering</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/lists-and-keys">Lists and Keys</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/forms">Forms</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/lifting-state-up">Lifting State Up</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/composition-vs-inheritance">Composition vs Inheritance</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/thinking-in-react">Thinking in React</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
