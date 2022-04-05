import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import Modal from "./Modal";

const ProjectCard = ({ item }) => {
  const darkTheme = useContext(ThemeContext);
  const [openImage, setOpenImage] = useState("");
  const [imageTitle, SetImageTitle] = useState("");
  const [imageText, setImageText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const setModalImageData = (imageTitle, text, image) => {
    setOpenImage(image);
    SetImageTitle(imageTitle);
    setImageText(text);
  };

  return (
    <>
      {modalOpen ? (
        <Modal
          image={openImage}
          text={imageText}
          title={imageTitle}
          modalState={modalOpen}
          technologys={item.technology}
          project_link={item.project_link}
          setModalState={setModalOpen}
        />
      ) : (
        ""
      )}
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
              ? "dark-mini-title my-3 text-center"
              : "my-3 text-center mini-title "
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
              ? "dark-mini-mini-title my-3 text-center"
              : "mini-mini-title my-3 text-center"
          }
        >
          {item.type}
        </h3>

        <Carousel
          className="carousel-size"
          infiniteLoop={true}
          showThumbs={false}
          autoPlay={true}
          onChange={(e) =>
            setModalImageData(
              item.images[e].title,
              item.images[e].text,
              item.images[e].image
            )
          }
          onClickItem={() => setModalOpen(true)}
          showStatus={false}
        >
          {item.images.map((imge) => (
            <div className="card  d-flex text-center  innerCarousel ">
              <h5 className="card-title">{imge.title}</h5>
              <img
                className="card-img-top max-imag-carousel "
                src={imge.image}
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
