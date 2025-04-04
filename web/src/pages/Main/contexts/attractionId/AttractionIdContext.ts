import { createContext, Dispatch, SetStateAction } from 'react';

interface AttractionIdContextProps {
  attractionId: string | null;
  setAttractionId: Dispatch<SetStateAction<string | null>>;
}

export const AttractionIdContext = createContext<AttractionIdContextProps>({
  attractionId: null,
  setAttractionId: () => {}
});
