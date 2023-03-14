import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ThemeContext } from "../App";
import Nextjs from "../imagesWEBP/iconsWEBP/Nextjs.webp";
import bootstrap from "../imagesWEBP/iconsWEBP/bootstrap.webp";
import express from "../imagesWEBP/iconsWEBP/express.webp";
import postman from "../imagesWEBP/iconsWEBP/postman.webp";
import Html from "../imagesWEBP/iconsWEBP/html.webp";
import GitHub from "../imagesWEBP/iconsWEBP/github.webp";
import Git from "../imagesWEBP/iconsWEBP/git.webp";
import Css from "../imagesWEBP/iconsWEBP/css.webp";
import Mysql from "../imagesWEBP/iconsWEBP/mysql.webp";
import Mongodb from "../imagesWEBP/iconsWEBP/mongodb.webp";
import Redux from "../imagesWEBP/iconsWEBP/redux.webp";
import Js from "../imagesWEBP/iconsWEBP/js.webp";
import Sass from "../imagesWEBP/iconsWEBP/sass.webp";
import react from "../imagesWEBP/iconsWEBP/react.webp";
import Php from "../imagesWEBP/iconsWEBP/php.webp";
import Xampp from "../imagesWEBP/iconsWEBP/xampp.webp";
import npm from "../imagesWEBP/iconsWEBP/npm.webp";
import Vscode from "../imagesWEBP/iconsWEBP/vscode.webp";
import Sql from "../imagesWEBP/iconsWEBP/sql.webp";
import Node from "../imagesWEBP/iconsWEBP/nodejs.webp";
import photoshop from "../imagesWEBP/iconsWEBP/photoshop.webp";
import redis from "../imagesWEBP/iconsWEBP/Redis.webp";
import graphql from "../imagesWEBP/iconsWEBP/graphql.webp";
import elasticSearch from "../imagesWEBP/iconsWEBP/elasticSearch.webp";
import reactNative from "../imagesWEBP/iconsWEBP/reactNative.webp";


const IconsCarusel = () => {
  const darkTheme = useContext(ThemeContext);

  const iconList = [
    { pic: Nextjs, name: "NextJS" },
    { pic: bootstrap, name: "Bootstrap4" },
    { pic: express, name: "ExpressJS" },
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
    { pic: redis, name: "Redis" },
    { pic: graphql, name: "GraphQL" },
    { pic: elasticSearch, name: "Elastic Search" },
    { pic: reactNative, name: "React Native" },
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
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        centerMode={true}
        stopOnHover={false}
        centerSlidePercentage={19}
        interval="1500"
      >
        {iconList.map((item,index) => (
          <div className=" iconCard   " id={`index,${index}`}>
            <img
              className=" my-2 card-img-top iconCardSize bottomCarouselImg"
              src={item.pic}
              alt="Card image cap"
            />
          </div>
        ))}
      </Carousel>
      <div>
        <h4
          className={
            darkTheme
              ? "dark-title mt-5 mb-2 text-center"
              : "title mt-5 mb-2 text-center"
          }
        >
          List of technologies
        </h4>

        <div
          className={
            darkTheme ? "dark-text text-center mx-3" : "text text-center mx-3"
          }
        >
          {iconList.map((item) => `${item.name} ,`)}
        </div>
      </div>
    </div>
  );
};

export default IconsCarusel;
