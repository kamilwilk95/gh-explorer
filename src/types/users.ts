export interface GhUserRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count?: number;
}

export interface GhUser {
  login: string;
  id: number;
  avatar_url: string;
  repositories: GhUserRepo[] | null;
}