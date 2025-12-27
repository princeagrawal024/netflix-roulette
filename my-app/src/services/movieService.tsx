import { BASE_URL } from '@/data/app-data';
import { Movie } from '@/models/MovieDto';

export default async function fetchMovieById(movieId: string): Promise<Movie | null> {
  try {
    const response = await fetch(`${BASE_URL}/${movieId}`);
    if (!response.ok) throw new Error('Failed to fetch movie');
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    return null;
  }
}
