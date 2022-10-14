import { useState } from "react";
import Cookies from "universal-cookie";

type KeyOptions = "lang" | "theme";

const useCookie = <K extends KeyOptions> (key: K, value: "pl" | "en" | "dark" | "light"): [K extends "lang" ? "pl" | "en" : "dark" | "light", (value: K extends "lang" ? "pl" | "en" : "dark" | "light") => void, (key: string) => string | undefined, (key: string) => void] => {
  const cookies = new Cookies();
  const [cookie, setCookie] = useState<K extends "lang" ? "pl" | "en" : "dark" | "light">(() => {
    if (cookies.get(key)) {
      return cookies.get(key);
    }
    cookies.set(key, value, { path: "/", expires: new Date(9999, 1, 1) });
  });

  const updateCookie = (value: K extends "lang" ? "pl" | "en" : "dark" | "light"): void => {
    setCookie(value);
    removeItem(value);
    cookies.set(key, value, { path: "/", expires: new Date(9999, 1, 1) });
  };

  const removeItem = (key: string): void => {
    cookies.remove(key);
  };

  const getCookie = (key: string): string | undefined => {
    return cookies.get(key);
  };

  return [cookie, updateCookie, getCookie, removeItem];
};

export default useCookie;
