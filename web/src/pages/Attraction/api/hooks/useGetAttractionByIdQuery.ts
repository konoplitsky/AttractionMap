import { useQuery } from '@tanstack/react-query';
import { getAttractionById } from '../getByIdAttraction.ts';

export const useGetAttractionByIdQuery = (id: string) =>
  useQuery({
    queryKey: ['getAttractionById', id],
    queryFn: () => getAttractionById(id)
  });
