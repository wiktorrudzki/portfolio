export type Actions =
  | { theme: "light"; type: "CHANGE_THEME" }
  | { theme: "dark"; type: "CHANGE_THEME" };

export type Theme = { theme: "light" } | { theme: "dark" };
