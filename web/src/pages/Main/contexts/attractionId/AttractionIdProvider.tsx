import { ReactNode, useMemo, useState } from 'react';
import { AttractionIdContext } from './AttractionIdContext';

interface AttractionIdProviderProps {
  children: ReactNode;
}

export const AttractionIdProvider = ({ children }: AttractionIdProviderProps) => {
  const [attractionId, setAttractionId] = useState<string | null>(null);

  const value = useMemo(() => ({ attractionId, setAttractionId }), [attractionId, setAttractionId]);

  return <AttractionIdContext value={value}>{children}</AttractionIdContext>;
};
