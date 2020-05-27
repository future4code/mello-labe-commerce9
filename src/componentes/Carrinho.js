import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20vw;
  height: 40vh;
  border: 1px solid black;
  color: black;
`;

class Carrinho extends React.Component {
  render() {
    return (
      <ContainerCarrinho>
        <h1>{this.props.nomeCarrinho}</h1>
        <button>Ir para carrinho</button>
      </ContainerCarrinho>
    );
  }
}

export default Carrinho;
