import React from 'react';


interface HomeProps {
  children: React.ReactNode;
}

export default function Home(props: HomeProps) {
  return (
    <div className="container">
      <div className="row">
        {props.children}    
      </div>
    </div>
  );
}