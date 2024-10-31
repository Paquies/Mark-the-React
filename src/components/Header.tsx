import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
  return (
    <header id="_header" className='ui_header' style={{borderBottom : '1px solid rgb(42, 42, 42)'}}>
      <nav id="_nav" className="ui_nav navbar navbar-expand-md navbar-dark navbar-inverse bg-dark pt-3" style={{height: '75px'}}>
        <div className="navbar-nav w-100 d-flex justify-content-between">
          <a className="navbar-brand nav-link" href="/"><i className="bi bi-gear-wide-connected"></i> Mark the React</a>
          <a className="navbar-brand nav-link" href="/about"><i className="bi bi-info-circle"></i> About</a>
        </div>
      </nav>
    </header>
  );
}