import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Git from "../iconsWEBP/github2.webp";
import GithubInvert from "../iconsWEBP/GithubInvert.webp";
import Linkedin from "../iconsWEBP/linkedin.webp";
import LinkedinInvert from "../iconsWEBP/LinkedinInvert.webp";
import Dodel from "../iconsWEBP/dodle1.webp";
import Dodel2 from "../iconsWEBP/dodle2.webp";

const Social = () => {
  const darkTheme = useContext(ThemeContext);


  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


  return (
    <div className="fullPage social-upper">
      <div className=" social-main ">
        <div className="">
          <div>
            <h1 className={darkTheme ? "dark-large-title" : "large-title "}>
              Elad Dadon
            </h1>
          </div>
          <div className="">
            <h2 className={darkTheme ? "dark-title" : "title"}>
              
              <div
                href=""
                className="typewrite"
                data-period="2000"
                data-type='[ "Full stack Developer", "Frontend Developer", "Backend Developer","Just having fun", "I Love to Develop." ]'
              >
                <span className="wrap"></span>
              </div>
            </h2>
          </div>
          <button
            className={darkTheme ? "btn btn-light" : "btn btn-dark mt-2"}
            onClick={() => window.location.replace("/#About")}
          >
            About me
          </button>
        </div>

        <div className="d-flex socialIconGap ">
          <a className="" href="https://github.com/elaad24" target="_blank">
            <img
              className="social-icons "
              src={darkTheme ? GithubInvert : Git}
              alt="Github logo "
            />
          </a>
          <a
            href="https://www.linkedin.com/in/elad-dadon-62772a1b3/"
            target="_blank"
          >
            <img
              className="social-icons"
              src={darkTheme ? LinkedinInvert : Linkedin}
              alt="Linkedin logo "
            />
          </a>
        </div>
      </div>
      <div className="d-flex align-self-center">
        <img
          className="dodel   "
          src={darkTheme ? Dodel2 : Dodel}
          alt="dodel"
        />
      </div>
    </div>
  );
};

export default Social;
