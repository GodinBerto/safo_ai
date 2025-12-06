"use client";

import { CheckCircle, X, AlertCircle, Info } from "lucide-react";
import { useEffect } from "react";

type ToastProps = {
  open: boolean;
  title?: string;
  message: string;
  variant?: "success" | "error" | "info";
  onClose?: () => void;
};

export default function Toast({
  open,
  title,
  message,
  variant = "success",
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      onClose && onClose();
    }, 4000);
    return () => clearTimeout(t);
  }, [open, onClose]);

  if (!open) return null;

  const icon =
    variant === "success" ? (
      <CheckCircle size={20} />
    ) : variant === "error" ? (
      <AlertCircle size={20} />
    ) : (
      <Info size={20} />
    );

  const colorClass =
    variant === "success"
      ? "text-green-400"
      : variant === "error"
      ? "text-red-400"
      : "text-blue-300";

  return (
    <section className="fixed flex-col bottom-5 right-5 flex items-start gap-3 px-5 py-4 rounded-lg bg-stone-300/10 backdrop-blur-xl text-white shadow-lg animate-[slideIn_0.25s_ease-out]">
      <div className="flex items-center justify-between w-full gap-4">
        <div className={`flex items-center gap-3 ${colorClass}`}>
          {icon}
          <h1 className="font-semibold text-lg text-stone-300">
            {title ??
              (variant === "success"
                ? "Success"
                : variant === "error"
                ? "Error"
                : "Info")}
          </h1>
        </div>

        <button onClick={onClose} aria-label="close">
          <X size={18} />
        </button>
      </div>
      <p className="text-sm opacity-90">{message}</p>
    </section>
  );
}
