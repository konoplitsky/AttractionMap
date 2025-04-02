import { useMutation } from '@tanstack/react-query';
import { mainRequests } from '@/pages/Main/api/mainRequerts.ts';

export const useDeleteAttractionMutation = () =>
  useMutation({
    mutationKey: ['deleteAttraction'],
    mutationFn: (id: string) => mainRequests.deleteAttraction(id)
  });
