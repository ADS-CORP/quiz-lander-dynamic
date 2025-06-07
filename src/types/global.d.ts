interface Window {
  qw?: {
    (command: 'init' | 'destroy', containerId?: string, config?: any): void;
    q?: any[];
  };
}
