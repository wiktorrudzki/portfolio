const reducer = (state, action) => {
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
