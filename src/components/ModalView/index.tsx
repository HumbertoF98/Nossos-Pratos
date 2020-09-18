import React from "react";
import Modal from "../Modal";
import Input from "../Input";

interface IFoodPlate {
  id: number;
  name: string;
  url_photo: string;
  description: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalView: React.FC<IModalProps> = ({ isOpen, setIsOpen, children }) => {
  console.log(children);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1>hello</h1>
    </Modal>
  );
};

export default ModalView;
