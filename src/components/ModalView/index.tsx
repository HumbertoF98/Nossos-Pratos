import React from "react";
import Modal from "../Modal";

import { Container } from "./styles";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalView: React.FC<IModalProps> = ({ isOpen, setIsOpen, children }) => {
  console.log(children);
  const { url_photo } = children as any;
  const { name } = children as any;
  const { description } = children as any;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <h2>{name}</h2>
        <img src={url_photo} />
        <p>{description}</p>
      </Container>
    </Modal>
  );
};

export default ModalView;
