import { Actions, Lang } from "./module";

const reducer = (state: Lang, action: Actions) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        lang: action.lang,
      };
    default:
      return state;
  }
};

export default reducer;
