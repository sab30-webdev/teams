import "./Navbar.css";

const Navbar = ({ signout, user }) => (
  <div className="App">
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1 ms-3 fs-2">
        <ion-icon name="logo-google"></ion-icon>
      </span>
      {user && (
        <div className="main">
          <div className="user me-3">
            <h2>{user.displayName}</h2>
            <img src={user.photoURL} alt={user.name} />
          </div>
          <span className="signout h1 fs-2 me-3" onClick={signout}>
            {" "}
            <ion-icon name="log-out-outline"></ion-icon>
          </span>
        </div>
      )}
    </nav>
  </div>
);

export default Navbar;
