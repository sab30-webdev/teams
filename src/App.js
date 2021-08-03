import Navbar from "./Navbar/Navbar";
import Cards from "./Cards/Cards";
import SideBar from "./Sidebar/Sidebar";
import "./App.css";

import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

if (!firebase.apps.length) {
  var firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const App = (props) => {
  const { user, signOut, signInWithGoogle } = props;

  return (
    <div>
      <Navbar signout={signOut} user={user} />
      {user ? (
        <div className="App-Bar">
          <Cards />
          <SideBar />
        </div>
      ) : (
        <div className="signin-button">
          <button
            type="button"
            className="btn btn-dark"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
