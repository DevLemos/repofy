export interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  dateAt: string;
  createdAt?: string;
  owner: {
    name: string;
    avatarUrl: string;
  };
  favorites: number;
}
