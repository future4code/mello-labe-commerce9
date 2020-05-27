import React from "react";
import styled from "styled-components";
import Produtos from "./componentes/Produtos";
import Filtros from "./componentes/Filtros";
import Carrinho from "./componentes/Carrinho";

const AppProdutos = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 55%;
  height: 800px;
  padding: 5px;
`;

const ContainerApp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

/* Exemplo do Array de Produtos
const arrayDeProdutos = [
  {
    id: 1,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
];
*/

class App extends React.Component {
  render() {
    return (
      <ContainerApp>
        <Filtros nomeFiltro={"Filtros:"} />
        <AppProdutos>
          <Produtos
            fotoProduto={"https://picsum.photos/150/200?a=1"}
            nomeProduto={"Camiseta Nasa"}
            valorProduto={"R$ 149,00"}
          />

          <Produtos
            fotoProduto={"https://picsum.photos/150/200?a=2"}
            nomeProduto={"Relógio de pulso Nasa"}
            valorProduto={"R$ 297,00"}
          />

          <Produtos
            fotoProduto={"https://picsum.photos/150/200?a=3"}
            nomeProduto={"Caneca Nasa"}
            valorProduto={"R$ 100,00"}
          />

          <Produtos
            fotoProduto={"https://picsum.photos/150/200?a=4"}
            nomeProduto={"Camiseta SpaceX"}
            valorProduto={"R$ 119,00"}
          />

          <Produtos
            fotoProduto={"https://picsum.photos/150/200?a=5"}
            nomeProduto={"Miniatura Starship"}
            valorProduto={"R$ 597,00"}
          />

          <Produtos
            fotoProduto={"https://picsum.photos/150/200?a=6"}
            nomeProduto={"Miniatura Crew Dragon"}
            valorProduto={"R$ 800,00"}
          />

          <Produtos
            fotoProduto={"https://picsum.photos/150/200?a=7"}
            nomeProduto={"Mochila Blue Origin"}
            valorProduto={"R$ 97,00"}
          />

          <Produtos
            fotoProduto={"https://picsum.photos/150/200?a=8"}
            nomeProduto={"Boné Blue Origin"}
            valorProduto={"R$ 60,00"}
          />
        </AppProdutos>
        <Carrinho nomeCarrinho={"Carrinho:"} />
      </ContainerApp>
    );
  }
}

export default App;
