import React, { ReactNode } from 'react';
import CodeBlock from './CodeBlock';

interface CopyableCodeProps {
    children: ReactNode;
    language?: string;
}

const CopyableCode: React.FC<CopyableCodeProps> = ({ children, language }) => {
    const handleCopy = () => {
        const textToCopy = typeof children === 'string' ? children : '';
        navigator.clipboard.writeText(textToCopy);
        alert('Code copied to clipboard!');
    };

    return (
        <div className='copyable_code' style={{ position: 'relative', display: 'inline-block', margin: '0', width: '70%', height:'40%' }}>
            <button
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '5px',
                    right: '50px',
                    padding: '3px 7px',
                    fontSize: '10px',
                    cursor: 'pointer',
                    background: 'rgb(54, 54, 54)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    zIndex: 1,
                    opacity: 0,
                    transition: 'opacity 0.3s',
                }}
            >
                <i className="bi bi-copy"></i> Copy
            </button>
            <pre style={{ 
                background: 'rgb(44, 44, 44)', 
                borderRadius: '10px', 
                textAlign: 'left', 
                color: '#ffffff', 
                paddingTop: '15px',
                paddingLeft: '10px',
                marginRight: '40px', // Ensure the button does not overlap the text
            }}>
                {/* <code className={`language-${language}`}>{children}</code> */}
            <CodeBlock language={language || 'javascript'} code={typeof children === 'string' ? children : ''} />
            </pre>
            <style>{`
                .copyable_code:hover button {
                    opacity: 1 !important;
                }
            `}</style>
        </div>
    );
};

export default CopyableCode;