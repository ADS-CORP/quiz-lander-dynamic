'use client';
import { WebsiteUrlParams } from '@/components/controls/TrackedLink';
import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface DomainSettingsContextProps {
  urlParams: WebsiteUrlParams;
  startUrl?: string;
}

const DomainSettingsContext = createContext<DomainSettingsContextProps | undefined>(undefined);

interface DomainSettingsProviderProps {
  children: ReactNode;
  value: DomainSettingsContextProps;
}

export const DomainSettingsProvider: React.FC<DomainSettingsProviderProps> = ({
  children,
  value,
}) => {
  return (
    <DomainSettingsContext.Provider value={value}>
      {children}
    </DomainSettingsContext.Provider>
  );
};

export const useDomainSettings = (): DomainSettingsContextProps => {
  const context = useContext(DomainSettingsContext);
  if (!context) {
    throw new Error('useDomainSettings must be used within a DomainSettingsProvider');
  }
  return context;
};
