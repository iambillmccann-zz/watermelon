export const SessionReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        name: action.session.name,
        email: action.session.email,
        photourl: action.session.photourl,
        emailVerified: action.session.emailVerified,
        uid: action.session.uid
      };
    default:
      return state;
  }
};
