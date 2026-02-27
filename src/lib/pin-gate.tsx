"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

const PIN_CODE = "2004";
const STORAGE_KEY = "wfd-pin-verified";
const QUERY_PARAM = "p";

type PinGateContextType = {
  isVerified: boolean;
  isMounted: boolean;
  verifyPin: (pin: string) => boolean;
};

const PinGateContext = createContext<PinGateContextType | null>(null);

export function PinGateProvider({ children }: { children: ReactNode }) {
  const [isVerified, setIsVerified] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check localStorage
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setIsVerified(true);
    }

    // Check URL query parameter
    const params = new URLSearchParams(window.location.search);
    if (params.get(QUERY_PARAM) === PIN_CODE) {
      setIsVerified(true);
      localStorage.setItem(STORAGE_KEY, "true");
      // Remove query param from URL
      params.delete(QUERY_PARAM);
      const newUrl =
        window.location.pathname +
        (params.toString() ? `?${params.toString()}` : "");
      window.history.replaceState({}, "", newUrl);
    }

    setIsMounted(true);
  }, []);

  const verifyPin = useCallback((pin: string): boolean => {
    if (pin === PIN_CODE) {
      setIsVerified(true);
      localStorage.setItem(STORAGE_KEY, "true");
      return true;
    }
    return false;
  }, []);

  return (
    <PinGateContext.Provider value={{ isVerified, isMounted, verifyPin }}>
      {children}
    </PinGateContext.Provider>
  );
}

export function usePinGate() {
  const context = useContext(PinGateContext);
  if (!context) {
    throw new Error("usePinGate must be used within a PinGateProvider");
  }
  return context;
}
