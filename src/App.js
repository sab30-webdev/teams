import Navbar from "./Navbar/Navbar";
import Cards from "./Cards/Cards";
import SideBar from "./Sidebar/Sidebar";
import "./App.css";
import { createContext, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebaseApp from "./firebase";
import firebase from "firebase/app";

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export const UserContext = createContext();
const App = ({ user, signOut, signInWithGoogle }) => {
  const [data, setData] = useState({});

  return (
    <>
      <Navbar signout={signOut} user={user} />
      {user ? (
        <UserContext.Provider value={{ data, setData }}>
          <div className="App-Bar">
            <Cards />
            <SideBar />
          </div>
        </UserContext.Provider>
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
    </>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
