export const SessionReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        email: action.session.email,
        password: action.session.pasword,
        isAuthenticated: action.session.isAuthenticated
      };
    case "SIGNOUT":
      return {
        email: null,
        password: null,
        isAuthenticated: false
      };
    case "SIGNUP":
      return {
        email: null,
        password: null,
        isAuthenticated: false
      };
    case "UPDATE":
      return {
        email: action.session.email,
        password: action.session.pasword,
        isAuthenticated: action.session.isAuthenticated
      };
    default:
      return state;
  }
};
