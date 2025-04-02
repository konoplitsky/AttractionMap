import { useMutation } from '@tanstack/react-query';
import { mainRequests } from '@/pages/Main/api/mainRequerts.ts';

export const useUpdateAttractionMutation = () =>
  useMutation({
    mutationKey: ['updateAttraction'],
    mutationFn: (dto: FormData) => mainRequests.updateAttraction(dto)
  });
