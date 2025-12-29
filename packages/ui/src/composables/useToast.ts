import type { Severity } from "../exports/types";
import type { Component, Ref } from "vue";
import { markRaw } from "vue";
import { useRandomId } from "../exports/utils";
import { useStorage } from "@vueuse/core";

export interface ToastItem {
  id: string;
  message: string;
  severity?: Severity;
  icon?: Component;
  duration?: number;
  closable?: boolean;
}

export interface ToastOptions {
  message: string;
  severity?: Severity;
  icon?: Component;
  duration?: number;
  closable?: boolean;
}

interface Toast {
  success: (message: string, options?: Omit<ToastOptions, "message" | "severity">) => void;
  error: (message: string, options?: Omit<ToastOptions, "message" | "severity">) => void;
  warning: (message: string, options?: Omit<ToastOptions, "message" | "severity">) => void;
  info: (message: string, options?: Omit<ToastOptions, "message" | "severity">) => void;
  show: (message: string, options?: Omit<ToastOptions, "message">) => void;
  clear: () => void;
}

export const toasts: Ref<ToastItem[]> = useStorage("veloce-toasts", []);

export const useToast = (): Toast => {
  const showToast = (options: ToastOptions) => {
    const icon = options.icon ? markRaw(options.icon) : undefined;
    console.log(icon);

    const toastItem: ToastItem = {
      id: useRandomId(),
      message: options.message,
      severity: options.severity || "info",
      icon: options.icon,
      duration: options.duration ?? 5000,
      closable: options.closable ?? true,
    };

    toasts.value.push(toastItem);
    console.log("toast added");
  };

  const success = (message: string, options?: Omit<ToastOptions, "message" | "severity">) => {
    return showToast({ ...options, message, severity: "success" });
  };

  const error = (message: string, options?: Omit<ToastOptions, "message" | "severity">) => {
    return showToast({ ...options, message, severity: "error" });
  };

  const warning = (message: string, options?: Omit<ToastOptions, "message" | "severity">) => {
    return showToast({ ...options, message, severity: "warning" });
  };

  const info = (message: string, options?: Omit<ToastOptions, "message" | "severity">) => {
    return showToast({ ...options, message, severity: "info" });
  };

  const show = (message: string, options?: Omit<ToastOptions, "message">) => {
    return showToast({ ...options, message });
  };

  const clear = () => {
    toasts.value = [];
  };

  return { success, error, warning, info, show, clear };
};
