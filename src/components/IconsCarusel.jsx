import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ThemeContext } from "../App";
import Nextjs from "../images/icons/Nextjs.png";
import bootstrap from "../images/icons/bootstrap.png";
import express from "../images/icons/express.png";
import postman from "../images/icons/postman.png";
import Html from "../images/icons/html.png";
import GitHub from "../images/icons/github.png";
import Git from "../images/icons/git.png";
import Css from "../images/icons/css.png";
import Mysql from "../images/icons/mysql.png";
import Mongodb from "../images/icons/mongodb.png";
import Redux from "../images/icons/redux.png";
import Js from "../images/icons/js.png";
import Sass from "../images/icons/sass.png";
import react from "../images/icons/react.png";
import Php from "../images/icons/php.png";
import Xampp from "../images/icons/xampp.png";
import npm from "../images/icons/npm.png";
import Vscode from "../images/icons/vscode.png";
import Sql from "../images/icons/sql.png";
import Node from "../images/icons/nodejs.png";
import photoshop from "../images/icons/photoshop.png";

const IconsCarusel = () => {
  const darkTheme = useContext(ThemeContext);

  const iconList = [
    { pic: Nextjs, name: "Next JS" },
    { pic: bootstrap, name: "Bootstrap 4" },
    { pic: express, name: "Express JS" },
    { pic: postman, name: "Postman" },
    { pic: Html, name: "Html" },
    { pic: Mongodb, name: "Mongodb" },
    { pic: Css, name: "Css" },
    { pic: Js, name: "JavaScript" },
    { pic: Mysql, name: "Mysql" },
    { pic: Git, name: "Git" },
    { pic: react, name: "React" },
    { pic: Redux, name: "Redux" },
    { pic: GitHub, name: "GitHub" },
    { pic: Sass, name: "Sass" },
    { pic: Php, name: "Php" },
    { pic: Xampp, name: "Xampp" },
    { pic: npm, name: "Npm" },
    { pic: Vscode, name: "Vscode" },
    { pic: Sql, name: "Sql" },
    { pic: Node, name: "Node" },
    { pic: photoshop, name: "Photoshop" },
  ];

  return (
    <div className=" my-4 d-flex flex-column ">
      <h2
        className={
          darkTheme
            ? "dark-title mt-5 mb-2 text-center"
            : "title mt-5 mb-2 text-center"
        }
      >
        PROGRAMMING LANGUAGES & TOOLS
      </h2>
      <Carousel
        showStatus={false}
        autoPlay={true}
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        centerMode={true}
        stopOnHover={false}
        centerSlidePercentage={15}
        interval="1500"
      >
        {iconList.map((item) => (
          <div class=" iconCard  ">
            <img
              class=" mt-2 card-img-top iconCardSize"
              src={item.pic}
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text">
                <b>{item.name}</b>
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default IconsCarusel;
