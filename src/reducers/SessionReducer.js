export const SessionReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        email: action.session.email,
        password: action.session.pasword,
        isAuthenticated: true
      };
    case "SIGNOUT":
      return {
        email: "",
        password: "",
        isAuthenticated: false
      };
    case "SIGNUP":
      return {
        email: "",
        password: "",
        isAuthenticated: false
      };
    default:
      return state;
  }
};
