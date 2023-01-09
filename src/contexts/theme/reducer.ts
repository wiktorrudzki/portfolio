import { Actions, Theme } from "./module";

const reducer = (state: Theme, action: Actions): Theme => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        theme: action.theme,
      };
    default:
      return state;
  }
};

export default reducer;
