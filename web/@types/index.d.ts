interface Attraction {
  id: string;
  name: string;
  createAt: string;
  rating: number;
  location: string;
  mapLink: string;
  status: string;
}

type Role = 'user' | 'admin';
type TypeForm = 'create' | 'update';
