/**
 * Utility to load third-party scripts with performance optimizations
 */

interface ScriptConfig {
  src: string;
  id?: string;
  async?: boolean;
  defer?: boolean;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

const loadedScripts = new Set<string>();

export function loadScript(config: ScriptConfig): Promise<void> {
  const { src, id, async = true, defer = true, onLoad, onError } = config;

  // Check if script is already loaded
  if (loadedScripts.has(src)) {
    onLoad?.();
    return Promise.resolve();
  }

  // Check if script element already exists
  const existingScript = document.querySelector(`script[src="${src}"]`);
  if (existingScript) {
    loadedScripts.add(src);
    onLoad?.();
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    if (id) script.id = id;

    script.onload = () => {
      loadedScripts.add(src);
      onLoad?.();
      resolve();
    };

    script.onerror = () => {
      const error = new Error(`Failed to load script: ${src}`);
      onError?.(error);
      reject(error);
    };

    document.head.appendChild(script);
  });
}

/**
 * Load scripts after user interaction to improve initial page load
 */
export function loadScriptOnInteraction(config: ScriptConfig): void {
  let loaded = false;
  
  const loadOnce = () => {
    if (!loaded) {
      loaded = true;
      loadScript(config);
      // Remove listeners after loading
      document.removeEventListener('scroll', loadOnce);
      document.removeEventListener('click', loadOnce);
      document.removeEventListener('touchstart', loadOnce);
    }
  };

  // Load on first user interaction
  document.addEventListener('scroll', loadOnce, { once: true, passive: true });
  document.addEventListener('click', loadOnce, { once: true });
  document.addEventListener('touchstart', loadOnce, { once: true, passive: true });
  
  // Also load after a delay as fallback
  setTimeout(loadOnce, 5000);
}