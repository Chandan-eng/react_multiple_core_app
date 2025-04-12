import React, { useEffect, useState } from 'react';

const EventBubblingDemo = () => {
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs(prev => [...prev, message]);
  };

  const handleDocumentClick = (e) => {
    addLog(`Document clicked: ${e.target.tagName}`);
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const handleOuterClick = (e) => {
    addLog('Outer div clicked');
  };

  const handleInnerClick = (e) => {
    addLog('Inner button clicked');
  };

  return (
    <div className="outer" onClick={handleOuterClick}>
      <h2>Event Bubbling Demo</h2>
      <button onClick={handleInnerClick}>Click Me</button>
      
      <div className="logs">
        <h3>Event Log:</h3>
        <ul>
          {logs.map((log, i) => <li key={i}>{log}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default EventBubblingDemo;