import React from "react";
import Git from "../icons/github2.png";
import Linkedin from "../icons/linkedin.png";

const Social = () => {
  return (
    <div className="fullPage d-flex align-items-center justify-content-around">
      <div className="">
        <div>
          <h1 className="large-title dark_mode">Elad Dadon</h1>
        </div>
        <div className="">
          <h2 className="title dark_mode"> Full stack Developer</h2>
        </div>
        <button
          className="btn btn-dark mt-2"
          onClick={() => window.location.replace("/#About")}
        >
          About me
        </button>
      </div>

      <div className="d-flex gap-5 dark_mode ">
        <a className="" href="https://github.com/elaad24" target="_blank">
          <img className="social-icons " src={Git} />
        </a>
        <a
          href="https://www.linkedin.com/in/elad-dadon-62772a1b3/"
          target="_blank"
        >
          <img className="social-icons" src={Linkedin} />
        </a>
      </div>
    </div>
  );
};

export default Social;
