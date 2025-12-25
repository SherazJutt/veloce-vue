import type { Severity } from "../exports/types";
import type { Component } from "vue";
import { useRandomId } from "../exports/utils";

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
  containerId?: string;
}

interface ToastContainerMethods {
  addToast: (toast: ToastItem) => void;
  removeToast: (id: string) => void;
  clearAll: () => void;
  toasts: any;
}

let toastContainerId: string = "default-toast-container";
const toastContainerInstances = new Map<string, ToastContainerMethods>();

export const setToastContainer = (instance: ToastContainerMethods | null, containerId: string) => {
  toastContainerId = containerId;

  if (instance) {
    toastContainerInstances.set(containerId, instance);
  } else {
    toastContainerInstances.delete(containerId);
  }
};

const getToastContainer = (containerId?: string): ToastContainerMethods | null => {
  const id = containerId || toastContainerId;
  return toastContainerInstances.get(id) || null;
};

const showToast = (options: ToastOptions & { containerId?: string }) => {
  const containerId = options.containerId || toastContainerId;
  const container = getToastContainer(containerId);

  if (!container) {
    console.warn(`Toast container with ID "${containerId}" not initialized. Make sure to add <ToastContainer> to your app.`);
    return;
  }

  const toastItem: ToastItem = {
    id: useRandomId(),
    message: options.message,
    severity: options.severity || "info",
    icon: options.icon,
    duration: options.duration ?? 5000,
    closable: options.closable ?? true,
  };

  container.addToast(toastItem);
};

export const useToast = (containerId?: string) => {
  const success = (message: string, options?: Omit<ToastOptions, "message" | "severity"> & { containerId?: string }) => {
    return showToast({ ...options, message, severity: "success", containerId: options?.containerId || containerId });
  };

  const error = (message: string, options?: Omit<ToastOptions, "message" | "severity"> & { containerId?: string }) => {
    return showToast({ ...options, message, severity: "error", containerId: options?.containerId || containerId });
  };

  const warning = (message: string, options?: Omit<ToastOptions, "message" | "severity"> & { containerId?: string }) => {
    return showToast({ ...options, message, severity: "warning", containerId: options?.containerId || containerId });
  };

  const info = (message: string, options?: Omit<ToastOptions, "message" | "severity"> & { containerId?: string }) => {
    return showToast({ ...options, message, severity: "info", containerId: options?.containerId || containerId });
  };

  const show = (message: string, options?: Omit<ToastOptions, "message"> & { containerId?: string }) => {
    return showToast({ ...options, message, containerId: options?.containerId || containerId });
  };

  const clear = () => {
    const container = getToastContainer(containerId);
    if (container) {
      container.clearAll();
    }
  };

  return { success, error, warning, info, show, clear };
};
