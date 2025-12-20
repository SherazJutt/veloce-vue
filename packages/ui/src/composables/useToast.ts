import type { Severity } from '../exports/types';
import type { Component } from 'vue';
import { useRandomId } from '../exports/utils';

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

interface ToastContainerMethods {
  addToast: (toast: ToastItem) => void;
  removeToast: (id: string) => void;
  clearAll: () => void;
  toasts: any;
}

let toastContainerInstance: ToastContainerMethods | null = null;

export const setToastContainer = (instance: ToastContainerMethods | null) => {
  toastContainerInstance = instance;
};

const showToast = (options: ToastOptions) => {
  if (!toastContainerInstance) {
    console.warn('Toast container not initialized. Make sure to add <ToastContainer> to your app.');
    return;
  }

  const toastItem: ToastItem = {
    id: useRandomId(),
    message: options.message,
    severity: options.severity || 'info',
    icon: options.icon,
    duration: options.duration ?? 5000,
    closable: options.closable ?? true,
  };

  toastContainerInstance.addToast(toastItem);
};

export const useToast = () => {
  const success = (message: string, options?: Omit<ToastOptions, 'message' | 'severity'>) => {
    return showToast({ ...options, message, severity: 'success' });
  };

  const error = (message: string, options?: Omit<ToastOptions, 'message' | 'severity'>) => {
    return showToast({ ...options, message, severity: 'error' });
  };

  const warning = (message: string, options?: Omit<ToastOptions, 'message' | 'severity'>) => {
    return showToast({ ...options, message, severity: 'warning' });
  };

  const info = (message: string, options?: Omit<ToastOptions, 'message' | 'severity'>) => {
    return showToast({ ...options, message, severity: 'info' });
  };

  const show = (message: string, options?: ToastOptions) => {
    return showToast({ ...options, message });
  };

  const clear = () => {
    if (toastContainerInstance) {
      toastContainerInstance.clearAll();
    }
  };

  return { success, error, warning, info, show, clear };
};
