"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePinGate } from "@/lib/pin-gate";

const PIN_LENGTH = 4;

export default function PinModal() {
  const { isVerified, isMounted, verifyPin } = usePinGate();
  const [digits, setDigits] = useState<string[]>(Array(PIN_LENGTH).fill(""));
  const [isShaking, setIsShaking] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Focus first input on mount
  useEffect(() => {
    if (isMounted && !isVerified) {
      setTimeout(() => inputRefs.current[0]?.focus(), 300);
    }
  }, [isMounted, isVerified]);

  const handleVerify = useCallback(
    (newDigits: string[]) => {
      const pin = newDigits.join("");
      if (pin.length === PIN_LENGTH) {
        if (verifyPin(pin)) {
          setIsExiting(true);
        } else {
          setIsShaking(true);
          setTimeout(() => {
            setIsShaking(false);
            setDigits(Array(PIN_LENGTH).fill(""));
            inputRefs.current[0]?.focus();
          }, 500);
        }
      }
    },
    [verifyPin]
  );

  const handleChange = useCallback(
    (index: number, value: string) => {
      // Only accept digits
      const digit = value.replace(/\D/g, "").slice(-1);
      const newDigits = [...digits];
      newDigits[index] = digit;
      setDigits(newDigits);

      if (digit && index < PIN_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      handleVerify(newDigits);
    },
    [digits, handleVerify]
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && !digits[index] && index > 0) {
        const newDigits = [...digits];
        newDigits[index - 1] = "";
        setDigits(newDigits);
        inputRefs.current[index - 1]?.focus();
      }
    },
    [digits]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, PIN_LENGTH);
      if (pasted.length > 0) {
        const newDigits = Array(PIN_LENGTH).fill("");
        for (let i = 0; i < pasted.length; i++) {
          newDigits[i] = pasted[i];
        }
        setDigits(newDigits);
        const focusIndex = Math.min(pasted.length, PIN_LENGTH - 1);
        inputRefs.current[focusIndex]?.focus();
        handleVerify(newDigits);
      }
    },
    [handleVerify]
  );

  // Don't render anything until mounted (avoid hydration mismatch)
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {!isVerified && !isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isShaking
                ? {
                    opacity: 1,
                    y: 0,
                    x: [0, -12, 12, -8, 8, -4, 4, 0],
                  }
                : { opacity: 1, y: 0 }
            }
            transition={
              isShaking
                ? { duration: 0.5, ease: "easeInOut" }
                : { duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
            }
          >
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-white/50">
              Enter PIN
            </p>

            <div className="flex gap-3" onPaste={handlePaste}>
              {digits.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    inputRefs.current[i] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit ? "\u25CF" : ""}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="h-14 w-14 rounded-lg border border-white/20 bg-white/5 text-center text-xl text-white caret-transparent outline-none transition-all focus:border-white/50 focus:bg-white/10"
                  autoComplete="off"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
