import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'favorites';

type Ctx = { favs: string[]; toggle: (id: string) => void };
const FavCtx = createContext<Ctx>({ favs: [], toggle: () => {} });

export const useFavorites = () => useContext(FavCtx);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favs, setFavs] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(KEY).then(v => {
      if (v) setFavs(JSON.parse(v));
    });
  }, []);

  const toggle = (id: string) => {
    setFavs(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      AsyncStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  };

  return <FavCtx.Provider value={{ favs, toggle }}>{children}</FavCtx.Provider>;
}