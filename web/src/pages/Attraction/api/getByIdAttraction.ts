import { http } from '@/shared/config/api';

export const getAttractionById = async (id: string) => {
  return await http.get(`/attraction/${id}`);
};
