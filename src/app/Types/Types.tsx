export interface loginDto {
  email: string;
  password: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
}
export interface Auth {
  user: User[] | null;
  isloggedIn: boolean;
}
export interface blogList {
  id: number;
  name: string;
  description: string;
  location: string;
  attractions: string[];
  famous_for: string;
  images: string[];
  best_time_to_visit: string;
  visited_by: string;
  rating: number;
  comments: string[];
}
export type blogProps = {
  blog: {
    id: number;
    name: string;
    description: string;
    location: string;
    attractions: string[];
    famous_for: string;
    images: string[];
    best_time_to_visit: string;
    visited_by: string;
    rating: number;
    comments: string[];
  };
};
