import { useEffect } from "react";
import { useLocation } from "react-router";

import { scrollToSection } from "../utils/scrollHelper";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const sectionId = hash.replace("#", "");

    const timeoutId = window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
