import React from "react";
import "./Header.scss";

export const MainHeader = () => {
  return (
    <header className="main-header d-flex align-items-center">
      <nav className="navbar navbar-light bg-transparent">
        <a className="navbar-brand logo" href="/">
          {"CV Builder".toUpperCase()}
        </a>
      </nav>
    </header>
  );
};

export const InternalHeader = () => {
  return (
    <header className="internal-header d-flex align-items-center">
      <div className="container">
        <nav className="navbar-primary navbar">
          <a className="navbar-brand logo" href="/application">
            {"CV Builder".toUpperCase()}
          </a>
        </nav>
      </div>
    </header>
  );
};
