import React from "react";
import styled from "styled-components";

const ContainerProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 340px;
  border: none;
  color: white;
  background-color: #7b68ee;
  padding: 3px;
`;

class Produtos extends React.Component {
  state = {
    listaDeProdutos: [
      {
        id: 1,
        nome: "Camiseta Nasa",
        valor: 149.9,
        foto: "https://picsum.photos/260/200?a=1",
      },
      {
        id: 2,
        nome: "Relógio de pulso Nasa",
        valor: 297.5,
        foto: "https://picsum.photos/260/200?a=2",
      },
    ],
  };

  selecaoDeProduto = (id) => {
    const copiaListaDeProdutos = this.state.listaDeProdutos.map(
      (cadaProduto) => {
        if (cadaProduto.id === id) {
          const copiaDeProdutos = { ...cadaProduto };
          return copiaDeProdutos;
        } else {
          return cadaProduto;
        }
      }
    );
    this.setState({ listaDeProdutos: copiaListaDeProdutos });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App-container">
        <ContainerProduto>
          <img src={this.props.fotoProduto} alt={"Imagem do Produto"} />
          <p>{this.props.nomeProduto}</p>
          <p>R$: {this.props.valorProduto}</p>
          <button onClick={this.props.funcaoAdicionar}>
            Adicionar ao Carrinho
          </button>
        </ContainerProduto>
      </div>
    );
  }
}

export default Produtos;
