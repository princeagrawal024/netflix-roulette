// src/utils/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  //const { pathname } = useLocation();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
