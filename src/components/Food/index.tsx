import React, { useState } from "react";

import { FiTrash } from "react-icons/fi";

import { Container } from "./styles";

import ModalView from "../../components/ModalView";

interface IFoodPlate {
  id: number;
  name: string;
  url_photo: string;
  description: string;
}

interface IProps {
  food: IFoodPlate;
  handleDelete: (id: number) => {};
}

const Food: React.FC<IProps> = ({ food, handleDelete }: IProps) => {
  const [viewModalOpen, setViewModalOpen] = useState(false);

  function toggleModalView(): void {
    setViewModalOpen(!viewModalOpen);
  }

  return (
    <Container>
      <header>
        <img onClick={toggleModalView} src={food.url_photo} alt={food.name} />
      </header>
      <ModalView isOpen={viewModalOpen} setIsOpen={toggleModalView}>
        {food}
      </ModalView>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(food.id)}
            data-testid={`remove-food-${food.id}`}
          >
            <FiTrash size={20} />
          </button>
          <h3>Deletar</h3>
        </div>
      </section>
    </Container>
  );
};

export default Food;
