import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

export function useYandexMetrica(counterId: number) {
  const location = useLocation();

  useEffect(() => {
    if (window.ym) {
      window.ym(counterId, "hit", location.pathname + location.search);
    }
  }, [location, counterId]);
}
