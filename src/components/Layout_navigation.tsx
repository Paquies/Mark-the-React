import React from "react";
import { Link } from 'react-router-dom';

export default function Layout_navigation() {
    return (
        <div className="navigation_layout" style={{ overflowY: 'scroll', maxHeight: '70vh', scrollbarWidth: 'thin', scrollbarColor: '#444 transparent', color: '#fff' }}> 
            <nav className="navigation_categories mt-5">
                <div className="navigation_category mb-4">
                    <h5 className="text-light">Getting started</h5>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/">Introduction</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/setting-up">Setting up a React Project</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/configurinMDX">Configuring MDX</Link></li>
                    </ul>
                </div>
                <div className="navigation_category mb-4">
                    <h5 className="text-light">Writing and Structuring Content</h5>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/writing-mdx-content">Writing MDX Content</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/pratical-examples">Practical Examples</Link></li>
                    </ul>
                </div>
                <div className="navigation_category mb-4">
                    <h5 className="text-light">Styling and Customization</h5>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/styling-mdx-components">Styling MDX Components</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/advanced-techniques">Advanced Techniques</Link></li>
                    </ul>
                </div>
                <div className="navigation_category mb-4">
                    <h5 className="text-light">Deployment and Beyond</h5>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/deploying">Deploying the React-MDX Project</Link></li>
                        <li className="nav-item"> <Link className="nav-link text-secondary" to="/hooks">Conclusion</Link></li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}
