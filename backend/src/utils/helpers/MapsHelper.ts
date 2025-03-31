export class MapsHelper {
  static generateYandexMapsLink(latitude: number, longitude: number): string {
    return `https://yandex.ru/maps/?pt=${longitude},${latitude}&z=17&l=map`;
  }
}
