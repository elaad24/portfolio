import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProjectCard = ({ item }) => {
  return (
    <div className="mx-4">
      <h2 className="my-3 text-center">{item.name}</h2>
      <h3 className="my-3 text-center">{item.type}</h3>

      <Carousel width="350px" infiniteLoop="true" showThumbs={false}>
        {item.images.map((imge) => (
          <div
            className="card d-flex text-center justify-content-center"
            style={{ width: "21rem" }}
          >
            <h5 className="card-title">{imge.title}</h5>
            <img className="card-img-top max-imag-carousel" src={imge.image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCard;
