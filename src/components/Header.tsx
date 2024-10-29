import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
  return (
    <header id="_header" className='ui_header' style={{borderBottom : '1px solid rgb(42, 42, 42)'}}>
      <nav id="_nav" className="ui_nav navbar navbar-expand-md navbar-dark navbar-inverse bg-dark">
            <div className="collapse navbar-collapse navbar-nav" id="navbarNav">
                <a className="navbar-brand mr-auto nav-link" href="/"><i className="bi bi-gear-wide-connected"></i> Mark the React</a>      
            </div>
      </nav>
    </header>
  );
}