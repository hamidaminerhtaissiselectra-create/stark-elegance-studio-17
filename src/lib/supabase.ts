import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const SUPABASE_URL = "https://emvmyrdxmpsoaykabszb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtdm15cmR4bXBzb2F5a2Fic3piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMDY2ODEsImV4cCI6MjA3ODc4MjY4MX0.qghodPLxGDRZqJAhDGvN_MA4KrzEj7VgFHkX6zLnKtE";

// Memory fallback storage for environments where localStorage is not available
const memoryStorage: Record<string, string> = {};

const createSafeStorage = () => {
  const isLocalStorageAvailable = () => {
    try {
      const test = '__storage_test__';
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  };

  if (isLocalStorageAvailable()) {
    return window.localStorage;
  }

  // Fallback to memory storage
  return {
    getItem: (key: string) => memoryStorage[key] || null,
    setItem: (key: string, value: string) => {
      memoryStorage[key] = value;
    },
    removeItem: (key: string) => {
      delete memoryStorage[key];
    },
  };
};

export const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: createSafeStorage(),
    persistSession: true,
    autoRefreshToken: true,
  }
});