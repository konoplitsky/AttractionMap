import { useQuery } from '@tanstack/react-query';
import { mainRequests } from '@/pages/Main/api/mainRequerts.ts';

export const useGetAttractionByIdQuery = (id: string) =>
  useQuery({
    queryKey: ['getAttractionById', id],
    queryFn: () => mainRequests.getAttractionById(id)
  });
