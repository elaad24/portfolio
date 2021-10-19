import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useContext } from "react";
import { ThemeContext } from "../App";
const ProjectCard = ({ item }) => {
  const darkTheme = useContext(ThemeContext);
  return (
    <div
      className={
        darkTheme
          ? "mx-4  px-4 border d-flex flex-column align-items-center dark-carousel_card"
          : "mx-4  px-4 border d-flex flex-column align-items-center carousel_card"
      }
    >
      <h2
        className={
          darkTheme
            ? "dark-mini-title my-3 text-center"
            : "my-3 text-center mini-title "
        }
      >
        {item.name}
      </h2>
      <h5 className={darkTheme ? "dark-text text-center" : "text text-center"}>
        {item.addition}
      </h5>
      <h3
        className={
          darkTheme
            ? "dark-mini-mini-title my-3 text-center"
            : "mini-mini-title my-3 text-center"
        }
      >
        {item.type}
      </h3>

      {/* need to use onClickItem -- */}
      <Carousel
        width="350px"
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        onClickItem={(e) => console.log(e, item.images[e].image)}
        showStatus={false}
      >
        {item.images.map((imge) => (
          <div
            className="card  d-flex text-center justify-content-center"
            style={{ width: "fit-content" }}
            ss
          >
            <h5 className="card-title">{imge.title}</h5>
            <img className="card-img-top max-imag-carousel" src={imge.image} />
          </div>
        ))}
      </Carousel>

      <button className={darkTheme ? "btn btn-light" : "btn btn-dark mt-2"}>
        View here
      </button>
    </div>
  );
};

export default ProjectCard;
