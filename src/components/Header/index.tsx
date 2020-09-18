/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useHistory } from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi";
import { Container } from "./styles";

import Logo from "../../assets/nossosPratos.png";

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => {
  const history = useHistory();
  async function handleLogout(): Promise<void> {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <h4 onClick={() => handleLogout()} onKeyDown={() => handleLogout()}>
              Sair
            </h4>
            <button
              type="button"
              onClick={() => {
                openModal();
              }}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
