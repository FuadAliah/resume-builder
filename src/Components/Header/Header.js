import { Link } from "react-router-dom";
import "./Header.scss";

export const MainHeader = () => {
  return (
    <header className="main-header d-flex align-items-center">
      <nav className="custom-navbar navbar navbar-light bg-transparent p-0">
        <Link to="/" className="navbar-brand logo p-0 m-0">
          {"CV Builder".toUpperCase()}
        </Link>
        {/* <ul className="links navbar-nav d-flex flex-row">
          <li className="link nav-item me-4">
            <Link to="/resources" className="nav-link">
              Resources
            </Link>
          </li>
          <li className="link nav-item">
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          </li>
          <li className="link nav-item">
            <Link className="nav-link" to="/sign-up">
              Get Started
            </Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export const InternalHeader = () => {
  return (
    <header className="internal-header bg-white d-flex align-items-center">
      <div className="container">
        <nav className="navbar-primary navbar">
          <Link to="/application" className="navbar-brand logo">
            {"CV Builder".toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
};
