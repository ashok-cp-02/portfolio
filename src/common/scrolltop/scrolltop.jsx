import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      !pathname.endsWith("/menu") &&
      !pathname.endsWith("/review") &&
      !pathname.endsWith("/about")
    ) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
