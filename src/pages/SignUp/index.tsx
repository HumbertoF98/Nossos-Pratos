/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormHandles } from "@unform/core";
import { Container, Form } from "./styles";
import logo from "../../assets/nossosPratos.png";
import Input from "../../components/Input";
import api from "../../services/api";

interface ISignUp {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    sign: Omit<ISignUp, "created_at" | "updated_at">
  ): Promise<void> {
    if (!sign.email || !sign.password) {
      toast.error("Preencha todos os campos para se cadastrar!");
    } else if (sign.password.length < 8) {
      toast.error("Sua senha deve conter 8 ou mais caracteres!");
    } else {
      try {
        setLoading(true);
        await api.post("/users", {
          ...sign,
        });
        toast.success("Cadastro realizado com sucesso!");
        history.push("/");
      } catch (err) {
        toast.error(err.response.data.message);
        setLoading(false);
        localStorage.clear();
      }
    }
  }

  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Seu e-mail" />
        <Input type="password" name="password" placeholder="Sua senha" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">{loading ? "Carregando..." : "Cadastrar"}</p>
        </button>
      </Form>
      <h4 onClick={() => history.push("/")} onKeyDown={() => history.push("/")}>
        Faça o login
      </h4>
    </Container>
  );
};
export default SignIn;
