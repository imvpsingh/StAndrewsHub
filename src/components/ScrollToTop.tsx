import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Har bar jab pathname change hoga, page 0 scroll par chala jayega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}