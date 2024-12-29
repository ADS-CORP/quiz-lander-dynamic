export interface RouteConfig {
  offer: string;
  brand: string;
  source: string;
  path: string;
}

export const sources = ['fb', 'tt', 'ig', 'gg'] as const;
export type Source = typeof sources[number];

export const routes: Record<string, Record<string, Source[]>> = {
  'hairrelaxer': {
    'pj': ['fb', 'tt', 'ig', 'gg'],
    'a4d': ['fb', 'tt', 'ig', 'gg']
  }
};

export function generateRoutes(): RouteConfig[] {
  const routeConfigs: RouteConfig[] = [];
  
  Object.entries(routes).forEach(([offer, brands]) => {
    Object.entries(brands).forEach(([brand, sources]) => {
      sources.forEach(source => {
        routeConfigs.push({
          offer,
          brand,
          source,
          path: `${offer}-${brand}-${source}`
        });
      });
    });
  });
  
  return routeConfigs;
}

export function getRouteConfig(path: string): RouteConfig | null {
  const [offer, brand, source] = path.split('-');
  
  if (!offer || !brand || !source) {
    return null;
  }
  
  if (!routes[offer]?.[brand]?.includes(source as Source)) {
    return null;
  }
  
  return {
    offer,
    brand,
    source,
    path
  };
}
