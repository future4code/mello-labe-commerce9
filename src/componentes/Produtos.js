import React from 'react';
import styled from 'styled-components';

const ContainerProduto = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 340px;
  border: none;
  color: white;
  background-color: #7B68EE;
  padding: 3px;
`

class Produtos extends React.Component {

  render () {

    return (
      <div className="App-container">
        <ContainerProduto>
          <img src={this.props.fotoProduto} alt={"Imagem do Produto"}/>
          <p>{this.props.nomeProduto}</p>
          <p>R$: {this.props.valorProduto}</p>
          <button>Adicionar ao Carrinho</button>
        </ContainerProduto>
      </div>
    );
  }
}

export default Produtos;
