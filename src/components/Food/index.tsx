import React from "react";

import { FiTrash } from "react-icons/fi";

import { Container } from "./styles";

interface IFoodPlate {
  id: number;
  name: string;
  url_photo: string;
  description: string;
}

interface IProps {
  food: IFoodPlate;
  handleDelete: (id: number) => {};
  handleEditFood: (food: IFoodPlate) => void;
}

const Food: React.FC<IProps> = ({
  food,
  handleDelete,
  handleEditFood,
}: IProps) => {
  function setEditingFood(food: any) {
    handleEditFood(food);
  }

  return (
    <Container>
      <header>
        <img
          onClick={() => setEditingFood(food)}
          src={food.url_photo}
          alt={food.name}
        />
      </header>
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
