import React from "react";
import { Button, Modal } from "react-bootstrap";

const ItemModal = ({ title, image, modalState, setModalState = "" }) => {
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <Modal
      size="xl"
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
        <img className="modalImage" src={image} alt={`${title} photo`} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeModal()}>
          close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
