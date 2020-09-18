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

interface ISignIn {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    sign: Omit<ISignIn, "created_at" | "updated_at">
  ): Promise<void> {
    if (!sign.email || !sign.password) {
      toast.error("Preencha todos os campos para entrar!");
    } else {
      try {
        setLoading(true);
        const response = await api.post("/sessions", {
          ...sign,
        });
        localStorage.setItem("userToken", response.data.token);
        setLoading(false);
        history.push("/inicio");
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
        <Input name="email" placeholder="Seu e-mail" />
        <Input type="password" name="password" placeholder="Sua senha" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">{loading ? "Carregando..." : "Fazer login"}</p>
        </button>
      </Form>
      <h4
        onClick={() => history.push("/registro")}
        onKeyDown={() => history.push("/registro")}
      >
        Cadastre-se
      </h4>
    </Container>
  );
};
export default SignIn;
