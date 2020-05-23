// Firebase imports
import firebase from "../firebase";

export const signup = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => {
      // Handle Errors here.
      alert("Error during sign up " + error.message); // delete this!
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};

export const signin = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};

export const signout = () => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
    })
    .catch(function(error) {
      console.log(error);
    });
};
