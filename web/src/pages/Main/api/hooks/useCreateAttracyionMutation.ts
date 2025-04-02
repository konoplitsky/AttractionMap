import { mainRequests } from '@/pages/Main/api/mainRequerts.ts';
import { useMutation } from '@tanstack/react-query';

export const useCreateAttraction = () =>
  useMutation({
    mutationKey: ['createAttraction'],
    mutationFn: (dto: FormData) => mainRequests.creatAttraction(dto)
  });
