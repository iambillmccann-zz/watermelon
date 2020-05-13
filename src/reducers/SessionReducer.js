// React and Javascript
import validate from "validate.js";

// My imports
import constraints from "../../constraints";
import authentication from "../../services/authentication";

const signUp = () => {
  const {
    emailAddress,
    emailAddressConfirmation,
    password,
    passwordConfirmation
  } = this.state;

  const errors = validate(
    {
      emailAddress: emailAddress,
      emailAddressConfirmation: emailAddressConfirmation,
      password: password,
      passwordConfirmation: passwordConfirmation
    },
    {
      emailAddress: constraints.emailAddress,
      emailAddressConfirmation: constraints.emailAddressConfirmation,
      password: constraints.password,
      passwordConfirmation: constraints.passwordConfirmation
    }
  );

  if (errors) {
    this.setState({
      errors: errors
    });
  } else {
    this.setState(
      {
        performingAction: true,
        errors: null
      },
      () => {
        authentication
          .signUpWithEmailAddressAndPassword(emailAddress, password)
          .then(value => {
            this.props.dialogProps.onClose();
          })
          .catch(reason => {
            const code = reason.code;
            const message = reason.message;

            switch (code) {
              case "auth/email-already-in-use":
              case "auth/invalid-email":
              case "auth/operation-not-allowed":
              case "auth/weak-password":
                this.props.openSnackbar(message);
                return;

              default:
                this.props.openSnackbar(message);
                return;
            }
          })
          .finally(() => {
            this.setState({
              performingAction: false
            });
          });
      }
    );
  }
};

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
