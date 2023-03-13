import React from "react";
import { Button, Modal } from "react-bootstrap";

const ItemModal = ({
  title,
  text,
  image,
  modalState,
  setModalState = "",
  technologys,
  project_link,
}) => {
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalState}
      onHide={() => setModalState(false)}
    >
      <Modal.Header closeButton onHide={() => closeModal()}>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>

        <p>tec : {technologys}</p>
        <p>what you see : {text}</p>
        <img className="modalImage" src={image} alt={`${title} photo`} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary " onClick={() => closeModal()}>
          <a
            target="_blank"
            className="text-decoration-none text-light"
            href={project_link}
          >
            go to project
          </a>
        </Button>
        <Button variant="secondary" onClick={() => closeModal()}>
          close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
