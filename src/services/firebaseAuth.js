// Firebase imports
import firebase from "../firebase";

export const signup = (email, password, setPerformingAction) => {
  alert("Sign up with " + email + ", and password " + password);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      setPerformingAction(true);
    })
    .catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      setPerformingAction(false);
      if (errorCode === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
  // [END createwithemail]
};

export const signin = (email, password, setPerformingAction) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password, setPerformingAction)
    .then(() => {
      setPerformingAction(true);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      setPerformingAction(false);
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById("quickstart-sign-in").disabled = false;
      // [END_EXCLUDE]
    });
};

// export default signup;
