export type Actions =
  | { lang: "pl"; type: "CHANGE_LANG" }
  | { lang: "en"; type: "CHANGE_LANG" };

export type Lang = { lang: "pl" } | { lang: "en" };
