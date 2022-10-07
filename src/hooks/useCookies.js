import { useState } from 'react';
import Cookies from 'universal-cookie';

export const useCookie = (key, value) => {
  const cookies = new Cookies();
  const [cookie, setCookie] = useState(() => {
    if (cookies.get(key)) {
      return cookies.get(key);
    }
    cookies.set(key, value, {path: '/', expires: new Date(9999, 1, 1)});
  });

  const updateCookie = (value) => {
    setCookie(value);
    removeItem(value);
    cookies.set(key, value, {path: '/', expires: new Date(9999, 1, 1)});
  };

  const removeItem = (key) => {
    cookies.remove(key);
  };

  const getCookie = (key) => {
    return cookies.get(key)
  }

  return [cookie, updateCookie, getCookie, removeItem];
};