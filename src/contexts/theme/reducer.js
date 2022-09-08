const reducer = (state, action) => {
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
