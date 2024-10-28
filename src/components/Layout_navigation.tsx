import React from "react";


export default function Layout_navigation() {

    return (
        <div className="navigation_layout " style={{ overflowY: 'scroll', maxHeight: '60vh', scrollbarWidth: 'thin', scrollbarColor: '#444 transparent', color: '#fff' }}> 
            <div className="navigation_categories mt-5" >
                <div className="navigation_category">
                    <h5 className="text-light">Getting started</h5>
                    <ul className="navbar-nav">
                        <li className="nav-item"> <a className="nav-link text-secondary" href="/">Introduction</a></li>
                        <li className="nav-item"> <a className="nav-link text-secondary" href="/Installation">Installation</a></li>
                    </ul>
                </div>
                <div className="navigation_category">
                    <h5 className="text-light">Animation</h5>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"> <a className="nav-link text-secondary" href="/Animation">Simple action</a></li>
                        <li className="nav-item"> <a className="nav-link text-secondary" href="/Animation/Transition">Transition</a></li>
                    </ul>
                </div>
                <div className="navigation_category">
                    <h5 className="text-light">Components</h5>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"> <a className="nav-link text-secondary" href="/Components">Introduction</a></li>
                        <li className="nav-item"> <a className="nav-link text-secondary" href="/Components/State">State</a></li>
                        <li className="nav-item"> <a className="nav-link text-secondary" href="/Components/Props">Props</a></li>
                    </ul>
                </div>
                <div className="navigation_category">
                    <h5 className="text-light">Hooks</h5>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"> <a className="nav-link text-secondary" href="/Hooks">Introduction</a></li>
                        <li className="nav-item"> <a className="nav-link text-secondary" href="/Hooks/useState">useState</a></li>
                        <li className="nav-item"> <a className="nav-link text-secondary" href="/Hooks/useEffect">useEffect</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}