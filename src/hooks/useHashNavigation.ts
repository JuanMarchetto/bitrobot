import { useState, useEffect } from "react";

/**
 * Custom hook to track the current URL hash
 * @returns The current hash without the '#' prefix, or empty string if no hash
 */
export const useHashNavigation = (): string => {
  const [currentHash, setCurrentHash] = useState<string>(() => {
    return typeof window !== "undefined" ? window.location.hash.slice(1) : "";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash.slice(1));
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial check in case hash is already present on mount
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return currentHash;
};

