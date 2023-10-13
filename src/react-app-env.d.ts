/// <reference types="react-scripts" />
export {}
declare global {
    interface Window {
      ethereum?: {
        enable: () => Promise<string[]>;
        request: (request: { method: string; params?: any[] }) => Promise<any>;
        on: (eventName: string, callback: () => void) => void;
      };
    }
  }