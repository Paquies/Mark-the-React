import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface OnThisPageProps {
  titles: { title: string, link: string }[];
}

const OnThisPage: React.FC<OnThisPageProps> = ({ titles }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span');
    elements.forEach(element => {
        console.log('Observing:', element.id);
        observer.observe(element)
    });

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="on-this-page">
      <h5 className="text-light">On This Page</h5>
      <ul className="navbar-nav mx-auto">
        {titles.map((item, index) => (
          <li key={index} className={`nav-item ${activeId === item.link.substring(1) ? 'active' : ''}`}>
            <Link className="nav-link text-secondary" to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;