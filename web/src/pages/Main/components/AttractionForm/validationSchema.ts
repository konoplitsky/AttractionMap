import { z } from 'zod';

export const attractionSchema = z.object({
  name: z.string().min(1, 'Название обязательно'),
  description: z.string().min(1, 'Описание обязательно'),
  rating: z.coerce
    .number()
    .min(1, 'Рейтинг должен быть от 0 до 5')
    .max(5, 'Рейтинг должен быть от 0 до 5'),
  location: z.string().min(1, 'Местоположение обязательно'),
  latitude: z.coerce
    .number()
    .min(1, 'Обязательное поле')
    .refine((val) => val >= -90 && val <= 90, {
      message: 'Широта должна быть от -90 до 90'
    }),
  longitude: z.coerce
    .number()
    .min(1, 'Обязательное поле')
    .refine((val) => val >= -180 && val <= 180, {
      message: 'Долгота должна быть от -180 до 180'
    }),
  photo: z.instanceof(FileList).refine((files) => files.length > 0, {
    message: 'Фото обязательно'
  })
});
