import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Header";

import api from "../../services/api";

import Food from "../../components/Food";
import ModalAddFood from "../../components/ModalAddFood";

import { FoodsContainer } from "./styles";

interface IFoodPlate {
  id: number;
  name: string;
  url_photo: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [foods, setFoods] = useState<IFoodPlate[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      try {
        const { data } = await api.get("/revenues");
        setFoods(data);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }
    loadFoods();
  }, []);

  async function handleAddFood(
    food: Omit<IFoodPlate, "id" | "available">
  ): Promise<void> {
    try {
      const { data } = await api.post("/revenues", {
        ...food,
      });

      setModalOpen(!modalOpen);
      setFoods([...foods, data]);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  async function handleDeleteFood(id: number): Promise<void> {
    try {
      await api.delete(`/revenues/${id}`);
      setFoods(foods.filter((food) => food.id !== id));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map((food) => (
            <Food key={food.id} food={food} handleDelete={handleDeleteFood} />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
