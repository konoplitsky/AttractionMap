import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCreateAttraction, useUpdateAttractionMutation } from '../../../api/hooks';
import { attractionSchema } from '../../AttractionForm/validationSchema.ts';
import { useModal } from '../../../contexts/modal';
import { useGetAttractionByIdQuery } from '@/pages/Attraction/api/hooks';
import { useAttractionId } from '../../../contexts/attractionId';
import { useEffect } from 'react';

type AttractionFormData = z.infer<typeof attractionSchema>;

interface UseAttractionFormProps {
  type: TypeForm;
}

export const useAttractionForm = ({ type }: UseAttractionFormProps) => {
  const queryClient = useQueryClient();
  const createAttraction = useCreateAttraction();
  const updateAttraction = useUpdateAttractionMutation();

  const { closeModal, closeUpdateModal } = useModal();
  const { attractionId } = useAttractionId();
  const getByIdAttraction = useGetAttractionByIdQuery(attractionId!);
  const attractionData = getByIdAttraction.data?.data;

  const { register, handleSubmit, formState, reset } = useForm<AttractionFormData>({
    resolver: zodResolver(attractionSchema),
    defaultValues: type === 'update' ? attractionData : null
  });
  const errors = formState.errors;

  useEffect(() => {
    if (type === 'update' && attractionData) {
      reset(attractionData);
    }
  }, [type, attractionData, reset]);

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    if (type === 'update' && attractionId) {
      formData.append('id', attractionId);
    }
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('rating', data.rating.toString());
    formData.append('location', data.location);
    formData.append('latitude', data.latitude.toString());
    formData.append('longitude', data.longitude.toString());

    if (data.photo && data.photo.length > 0) {
      formData.append('photo', data.photo[0]);
    }

    if (type === 'create') {
      await createAttraction.mutateAsync(formData);
      closeModal();
    } else if (type === 'update') {
      await updateAttraction.mutateAsync(formData);
      closeUpdateModal();
    }
    queryClient.invalidateQueries({ queryKey: ['getAttractions'] });
  });

  return {
    state: {
      loading: createAttraction.isPending || updateAttraction.isPending,
      success: createAttraction.isSuccess || updateAttraction.isSuccess,
      isError: createAttraction.isError || updateAttraction.isError
    },
    form: { register, onSubmit, errors },
    error: createAttraction.error || updateAttraction.error
  };
};
