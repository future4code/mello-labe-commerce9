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
    const novoCarrinho = [];
    let total = 0;
    this.props.listaCarrinho.forEach((produto) => {
      total += produto.valor;
      const verificaProduto = novoCarrinho.findIndex(
        (prod) => prod.id === produto.id
      );
      if (verificaProduto === -1) {
        const novoProduto = {
          id: produto.id,
          nome: produto.nome,
          quantidade: 1,
        };
        novoCarrinho.push(novoProduto);
      } else {
        novoCarrinho[verificaProduto].quantidade++;
      }
    });
    const carrinhoRenderizado = novoCarrinho.map((produto) => (
      <p>
        {produto.quantidade}
        {produto.nome}
        <button onClick={() => this.props.removeCarrinho(produto.id)}>
          Deletar Produto
        </button>
      </p>
    ));
    return (
      <div>
        {carrinhoRenderizado}
        <p>{total}</p>
      </div>
    );
  }
}

export default Carrinho;

/*<ContainerCarrinho>
        <h1>{this.props.nomeCarrinho}</h1>
        <button>Ir para carrinho</button>
      </ContainerCarrinho>*/
