import { formatStatus } from '@/shared/helpers/formatStatus.ts';
import { formatDate } from '@/shared/helpers/formatDate.ts';
import { GetAttractionDto } from '@/generated/api/types';

export const normalizeAttractions = (data: GetAttractionDto[] = []) => {
  const attractions = data.map((attraction) => {
    const { id, name, createAt, rating, location, mapLink, status } = attraction;

    return {
      id,
      name,
      createAt: formatDate(createAt),
      rating,
      location,
      mapLink,
      status: formatStatus(status)
    };
  });

  return attractions;
};
