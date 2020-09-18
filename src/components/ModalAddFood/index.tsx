import React, { useRef, useCallback } from "react";

import { FiCheckSquare } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

interface IFoodPlate {
  id: number;
  name: string;
  url_photo: string;
  description: string;
}

interface ICreateFoodData {
  name: string;
  url_photo: string;
  description: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: Omit<IFoodPlate, "id" | "available">) => void;
}

const ModalAddFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateFoodData) => {
      handleAddFood(data);
    },
    [handleAddFood, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="url_photo" placeholder="URL da foto do prato" />
        <Input name="name" placeholder="Nome do prato" />
        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
