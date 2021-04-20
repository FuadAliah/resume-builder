import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

import Background from "../Background/Background";
import { MainHeader } from "../Header/Header";
import Charactor from "../../images/charactor.svg";

import "./Home.scss";
import "../../Style/_extends.scss";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  }, [isLoading]);

  return (
    <>
      {!isLoading && (
        <div className="container">
          <MainHeader />
          <div className="content d-flex justify-content-between align-items-center">
            <div className="left-content">
              <span className="d-flex light">Create your own</span>
              <span className="d-flex bold">Professional Resume</span>
              <p>The digital world doesn't have to feel impersonal. Make kinder, one-to-one connections with CV BUILDER, and save time while you're at it!</p>
              <Link to="/application" className="btn btn-primary button-primary fw-bold">
                Get Started - it's free
              </Link>
              <div className="mt-3">
                <span className="d-flex check">No credit card required</span>
                <span className="d-flex check">No time limit on Free plan</span>
              </div>
            </div>
            <img src={Charactor} alt="" />
          </div>
          <Background />
        </div>
      )}

      {isLoading && (
        <div className="loading d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
