import React, { ReactNode } from 'react';

interface CopyableCodeProps {
  children: ReactNode;
}

const CopyableCode: React.FC<CopyableCodeProps> = ({ children }) => {
    const handleCopy = () => {
        if (typeof children === 'string') {
            navigator.clipboard.writeText(children);
            alert('Code copied to clipboard!');
        }
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block', margin: '0', width: '60%'}}>
            {/* <button
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    padding: '5px 10px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    background: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '3px',
                    zIndex: 1,
                }}
            >
                Copy
            </button> */}
            <pre style={{ 
                background: 'rgb(44, 44, 44)', 
                borderRadius: '10px', 
                textAlign: 'left', 
                color: '#ffffff', 
                paddingTop: '15px',
                paddingLeft: '10px',
                marginRight: '40px',// Ensure the button does not overlap the text
            }}>
                <code>{children}</code>
            </pre>
        </div>
    );
};

export default CopyableCode;