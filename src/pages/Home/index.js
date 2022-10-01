import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const usuarioAtual = JSON.parse(localStorage.getItem("user_token"));

  if(usuarioAtual.tipoUsuario === "colaborador"){
  return (
    <C.Container>
      <C.Title>Home - Colaborador</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
} else if (usuarioAtual.tipoUsuario === "responsavelfinanceiro"){
  return (
    <C.Container>
      <C.Title>Home - Responsavel Financeiro</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
}
};

export default Home;
