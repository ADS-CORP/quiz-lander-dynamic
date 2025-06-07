'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    qw?: (command: string, config?: any) => void;
    __quizConfig?: any;
  }
}

export default function TestQuizPage() {
  const [logs, setLogs] = useState<string[]>([]);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [widgetInitialized, setWidgetInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addLog = (message: string) => {
    const timestamp = new Date().toISOString();
    setLogs(prev => [...prev, `[${timestamp}] ${message}`]);
    console.log(`[Quiz Debug] ${message}`);
  };

  useEffect(() => {
    addLog('Component mounted');

    // Check if container exists
    const container = document.getElementById('quiz-widget-container');
    if (!container) {
      addLog('ERROR: Container element not found');
      setError('Container element not found');
      return;
    }
    addLog('Container element found');

    // Create quiz widget div
    const widgetDiv = document.createElement('div');
    widgetDiv.id = 'quiz-widget';
    container.appendChild(widgetDiv);
    addLog('Quiz widget div created');

    // Set up quiz config
    const quizConfig = {
      quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03',
      apiUrl: '/api',
      debug: true,
      hideFooter: true,
      preventDefaultStyles: true,
      container: '#quiz-widget',
      apiConfig: {
        baseURL: window.location.origin,
        withCredentials: false,
        proxyConfig: {
          enabled: true,
          prefix: '/api',
          overrides: {
            ipapi: '/api/proxy-webhook/ipapi',
            npiRegistry: '/api/proxy-webhook/npi-registry'
          }
        }
      }
    };

    window.__quizConfig = quizConfig;
    addLog('Quiz config set on window');

    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://quiz-widget.netlify.app/embed.js"]');
    if (existingScript) {
      addLog('Script already exists in DOM');
      if (window.qw) {
        addLog('window.qw is available, initializing widget');
        try {
          window.qw('init', quizConfig);
          setWidgetInitialized(true);
          addLog('Widget initialization called');
        } catch (err) {
          addLog(`ERROR during init: ${err}`);
          setError(`Init error: ${err}`);
        }
      } else {
        addLog('ERROR: window.qw not available despite script being loaded');
        setError('window.qw not available');
      }
      return;
    }

    // Load the script
    addLog('Loading quiz widget script...');
    const script = document.createElement('script');
    script.src = 'https://quiz-widget.netlify.app/embed.js';
    script.async = true;

    script.onload = () => {
      addLog('Script loaded successfully');
      setScriptLoaded(true);

      // Check for window.qw
      if (window.qw && typeof window.qw === 'function') {
        addLog('window.qw is available');
        try {
          window.qw('init', quizConfig);
          setWidgetInitialized(true);
          addLog('Widget initialization called');
        } catch (err) {
          addLog(`ERROR during init: ${err}`);
          setError(`Init error: ${err}`);
        }
      } else {
        addLog('ERROR: window.qw not found after script load');
        setError('window.qw not found');
      }
    };

    script.onerror = (e) => {
      addLog(`ERROR: Script failed to load - ${e}`);
      setError('Script failed to load');
    };

    document.head.appendChild(script);
    addLog('Script appended to head');

    // Cleanup
    return () => {
      if (widgetDiv.parentNode) {
        widgetDiv.parentNode.removeChild(widgetDiv);
      }
      delete window.__quizConfig;
    };
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Quiz Widget Debug Page</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Status</h2>
        <div className="space-y-1">
          <p>Script Loaded: <span className={scriptLoaded ? 'text-green-600' : 'text-red-600'}>{scriptLoaded ? 'Yes' : 'No'}</span></p>
          <p>Widget Initialized: <span className={widgetInitialized ? 'text-green-600' : 'text-red-600'}>{widgetInitialized ? 'Yes' : 'No'}</span></p>
          <p>window.qw available: <span className={typeof window.qw === 'function' ? 'text-green-600' : 'text-red-600'}>{typeof window.qw === 'function' ? 'Yes' : 'No'}</span></p>
          {error && <p className="text-red-600">Error: {error}</p>}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Quiz Container</h2>
        <div 
          id="quiz-widget-container" 
          className="border-2 border-dashed border-gray-300 p-4 min-h-[500px] bg-gray-50"
        >
          <p className="text-gray-500">Quiz widget should appear here</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Debug Logs</h2>
        <div className="bg-black text-green-400 p-4 rounded font-mono text-sm max-h-96 overflow-y-auto">
          {logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}