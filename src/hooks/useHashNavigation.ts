import { useState, useEffect } from "react";

export const useHashNavigation = (): string => {
  const [currentHash, setCurrentHash] = useState<string>(() => {
    return typeof window !== "undefined" ? window.location.hash.slice(1) : "";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash.slice(1));
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return currentHash;
};

