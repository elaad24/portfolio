import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";

const ProjectCard = ({ item }) => {
  const darkTheme = useContext(ThemeContext);

  return (
    <>
      <div
        className={
          darkTheme
            ? " px-1 border d-flex flex-column align-items-center dark-carousel_card"
            : " px-1 border d-flex flex-column align-items-center carousel_card"
        }
      >
        <h2
          className={
            darkTheme
              ? "dark-mini-title mt-3 text-center"
              : "mt-3 text-center mini-title "
          }
        >
          {item.name}
        </h2>
        <h5
          className={darkTheme ? "dark-text text-center" : "text text-center"}
        >
          <small>{item.addition || <br />}</small>
        </h5>
        <h3
          className={
            darkTheme
              ? "dark-mini-mini-title  text-center"
              : "mini-mini-title  text-center"
          }
        >
          {item.type}
        </h3>

        <Carousel
          className="carousel-size"
          infiniteLoop={true}
          showThumbs={false}
          autoPlay={true}
          showStatus={false}
        >
          {item.imagesWEBP.map((imge,index) => (
            <div className="card  d-flex text-center  innerCarousel " id={`${imge.title},${index}`}>
              <h5 className="card-title">{imge.title}</h5>
              <img
                className="card-img-top max-imag-carousel "
                src={imge.image}
                alt=""
              />
            </div>
          ))}
        </Carousel>

        <button
          className={darkTheme ? "btn btn-light mt-2  " : "btn btn-dark mt-2"}
        >
          <a
            target="_blank"
            className={
              darkTheme
                ? "text-decoration-none text-dark"
                : "text-decoration-none text-light"
            }
            href={item.project_link}
          >
            go to project
          </a>
        </button>
      </div>
    </>
  );
};

export default ProjectCard;
