import { createContext, useContext, useState } from 'react';

type MovieContextType = {
  refreshFlag: boolean;
  toggleRefresh: () => void;
};

const MovieContext = createContext<MovieContextType | null>(null);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const toggleRefresh = () => {
    setRefreshFlag((prev) => !prev);
  };

  return <MovieContext.Provider value={{ refreshFlag, toggleRefresh }}>{children}</MovieContext.Provider>;
};

export const useMovieContext = () => {
  const ctx = useContext(MovieContext);
  if (!ctx) throw new Error('useMovieContext must be used inside provider');
  return ctx;
};
export default MovieContext;
