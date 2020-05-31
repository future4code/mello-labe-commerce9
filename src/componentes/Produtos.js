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
 `;

class Produtos extends React.Component {
  sstate = {
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
      {
        id: 3,
        nome: "Caneca Nasa",
        valor: 110.9,
        foto: "https://picsum.photos/260/200?a=3",
      },
      {
        id: 4,
        nome: "Camiseta SpaceX",
        valor: 119.5,
        foto: "https://picsum.photos/260/200?a=4",
      },
      {
        id: 5,
        nome: "Miniatura Starship",
        valor: 597.9,
        foto: "https://picsum.photos/260/200?a=5",
      },
      {
        id: 6,
        nome: "Miniatura Crew Dragon",
        valor: 805.9,
        foto: "https://picsum.photos/260/200?a=6",
      },
      {
        id: 7,
        nome: "Mochila Blue Origin",
        valor: 85.5,
        foto: "https://picsum.photos/260/200?a=7",
      },
      {
        id: 8,
        nome: "Boné Blue Origin",
        valor: 55.5,
        foto: "https://picsum.photos/260/200?a=8",
      },
    ],
    carrinho: [],

    inputValorMinimo: "",
    inputValorMaximo: "",
    inputBuscarProduto: "",
    filtroSelecionado: "Crescente",

    carrinhoDeCompras: false,
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
