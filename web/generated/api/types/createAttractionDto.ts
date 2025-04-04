/**
 * Generated by orval v7.7.0 🍺
 * Do not edit manually.
 * Attraction Map
 * OpenAPI spec version: 1.0
 */

export interface CreateAttractionDto {
  /** Название */
  name: string;
  /** Описание */
  description: string;
  /** Рейтинг */
  rating: number;
  /** Фото */
  photo: Blob;
  /** Локация */
  location: string;
  /** Широта */
  latitude: number;
  /** Долгота */
  longitude: number;
}
