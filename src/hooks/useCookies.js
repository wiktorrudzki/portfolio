import { useState } from 'react';
import Cookies from 'universal-cookie';

export const useCookie = (key, value) => {
  const cookies = new Cookies();
  const [cookie, setCookie] = useState(() => {
    if (cookies.get(key)) {
      return cookies.get(key);
    }
    cookies.set(key, value);
  });

  const updateCookie = (value) => {
    setCookie(value);
    removeItem(key);
    cookies.set(key, value);
  };

  const removeItem = (key) => {
    cookies.remove(key);
  };

  return [cookie, updateCookie, removeItem];
};
