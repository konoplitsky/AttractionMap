import { useContext } from 'react';
import { AttractionIdContext } from './AttractionIdContext';

export const useAttractionId = () => useContext(AttractionIdContext);
