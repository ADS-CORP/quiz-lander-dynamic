import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            
            /* Reset and base styles */
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html { overflow-x: hidden; max-width: 100vw; -webkit-font-smoothing: antialiased; }
            body { 
              overflow-x: hidden; 
              position: relative; 
              max-width: 100vw; 
              margin: 0; 
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-size: 1.125rem;
              line-height: 1.75;
              color: #111827;
              background-color: #ffffff;
            }
            
            /* Font variables */
            .font-montserrat {
              font-family: var(--font-montserrat), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            /* Header styles */
            header { position: fixed; width: 100%; top: 0; z-index: 1000; background-color: #ffffff; }
            .fixed { position: fixed; }
            .z-\\[100\\] { z-index: 100; }
            .top-\\[60px\\] { top: 60px; }
            .border-b { border-bottom: 1px solid #e5e7eb; }
            .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
            
            /* LCP element styles - H1 headline */
            h1 {
              font-family: var(--font-montserrat), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-weight: 800;
              color: #111827;
              margin: 0;
            }
            
            /* Critical layout classes */
            .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
            .font-extrabold { font-weight: 800; }
            .text-gray-900 { color: #111827; }
            .text-center { text-align: center; }
            .tracking-tight { letter-spacing: -0.025em; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
            .pt-3 { padding-top: 0.75rem; }
            .mt-\\[90px\\] { margin-top: 90px; }
            .relative { position: relative; }
            .w-full { width: 100%; }
            .h-full { height: 100%; }
            .max-w-screen-xl { max-width: 1280px; }
            .min-h-screen { min-height: 100vh; }
            .bg-white { background-color: #ffffff; }
            .overflow-x-hidden { overflow-x: hidden; }
            
            /* Quiz container to prevent layout shift */
            #quiz-widget-container {
              min-height: 320px;
              background-color: #ffffff;
              position: relative;
              overflow: visible;
            }
            
            @media (min-width: 640px) {
              .sm\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            }
            @media (min-width: 768px) {
              .md\\:text-5xl { font-size: 3rem; line-height: 1; }
              .md\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
            }
            @media (min-width: 1024px) {
              .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
            }
          `
        }} />
        
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Load non-critical CSS asynchronously */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Load non-critical styles after page load
            if ('requestIdleCallback' in window) {
              requestIdleCallback(() => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '/_next/static/css/app/layout.css';
                document.head.appendChild(link);
              });
            }
          `
        }} />
      </body>
    </Html>
  )
}