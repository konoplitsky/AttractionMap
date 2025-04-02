import { mainRequests } from '@/pages/Main/api/mainRequerts.ts';
import { useQuery } from '@tanstack/react-query';

export const useGetAttractionsRequest = () =>
  useQuery({
    queryKey: ['getAttractions'],
    queryFn: () => mainRequests.getAttractions()
  });
