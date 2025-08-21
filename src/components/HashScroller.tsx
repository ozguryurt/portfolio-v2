import { useEffect } from "react";
import { useLocation } from "react-router";

const HashScroller = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.startsWith("#") ? hash.slice(1) : hash;

    const rafId = requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    return () => cancelAnimationFrame(rafId);
  }, [hash]);

  return null;
};

export default HashScroller;


