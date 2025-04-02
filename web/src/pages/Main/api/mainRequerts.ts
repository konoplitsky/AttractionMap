import { http } from '@/shared/config/api';
import { GetAttractionDto } from '@/generated/api/types';

class MainRequests {
  async getAttractions() {
    return await http.get<GetAttractionDto[]>(`/attraction`);
  }

  async creatAttraction(dto: FormData) {
    return await http.post('/attraction', dto);
  }

  async deleteAttraction(id: string) {
    return await http.delete(`/attraction/${id}`);
  }

  async getAttractionById(id: string) {
    return await http.get(`/attraction/${id}`);
  }

  async updateAttraction(dto: FormData) {
    return await http.put('/attraction', dto);
  }
}

export const mainRequests = new MainRequests();
