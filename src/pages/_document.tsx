import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for LCP element */
            @font-face {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 800;
              font-display: optional;
              src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'),
                   url('/_next/static/media/montserrat-latin-800.woff2') format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            
            /* Reset and base styles */
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html { overflow-x: hidden; max-width: 100vw; -webkit-font-smoothing: antialiased; }
            body { 
              overflow-x: hidden; 
              position: relative; 
              max-width: 100vw; 
              margin: 0; 
              font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.5;
            }
            
            /* Header styles */
            header { position: fixed; width: 100%; top: 0; z-index: 1000; background-color: #ffffff; }
            .border-b { border-bottom: 1px solid #e5e7eb; }
            
            /* LCP element styles */
            h1 {
              font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-weight: 800;
              color: rgb(17 24 39);
              margin: 0;
            }
            
            /* Critical layout classes */
            .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
            .font-extrabold { font-weight: 800; }
            .text-gray-900 { color: rgb(17 24 39); }
            .text-center { text-align: center; }
            .tracking-tight { letter-spacing: -0.025em; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
            .mt-\\[90px\\] { margin-top: 90px; }
            .relative { position: relative; }
            .w-full { width: 100%; }
            .max-w-screen-xl { max-width: 1280px; }
            .min-h-screen { min-height: 100vh; }
            .bg-white { background-color: #ffffff; }
            
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
        
        {/* Preload critical font */}
        <link
          rel="preload"
          href="/_next/static/media/montserrat-latin-800.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
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