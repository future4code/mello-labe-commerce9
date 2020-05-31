import React from "react";
import styled from "styled-components"

const GridCarrinho = styled.div`
  display: flex;
  background-color: #8b008b;
  color: white;
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
          Excluir Produto
        </button>
      </p>
    ));
    return (
      <div>
        <GridCarrinho>
        {carrinhoRenderizado}
        <h3>TOTAL R$: {total}</h3>
        </GridCarrinho>
      </div>
    );
  }
}

export default Carrinho;
