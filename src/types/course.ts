export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  instructor: string;
  duration: string; 
  rating: number; 
  imageUrl: string;
  trailerUrl?: string; 
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  studentsEnrolled: number;
  tags: string[];
  price?: number; 
  featured?: boolean;
  lastUpdated: string;
}
