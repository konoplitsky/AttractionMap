import { z } from 'zod';

export const attractionSchema = z.object({
  name: z.string().min(1, 'Название обязательно'),
  description: z.string(),
  rating: z.coerce.number().min(1).max(5, 'Рейтинг должен быть от 0 до 5'),
  location: z.string().min(1, 'Местоположение обязательно'),
  latitude: z.coerce.number().refine((val) => val >= -90 && val <= 90, {
    message: 'Широта должна быть от -90 до 90'
  }),
  longitude: z.coerce.number().refine((val) => val >= -180 && val <= 180, {
    message: 'Долгота должна быть от -180 до 180'
  }),
  photo: z.instanceof(FileList)
});
