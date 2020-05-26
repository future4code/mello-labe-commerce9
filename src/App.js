import React from 'react';
import styled from 'styled-components';
import Produtos from './componentes/Produtos';

const AppProdutos = styled.div `
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 55%;
  height: 800px;
  padding: 5px;
`

class App extends React.Component {

  render () {

    return (
      <div className="app-container">
        <AppProdutos>
          <Produtos
            fotoProduto={'https://picsum.photos/150/200?a=1'}
            nomeProduto={'Camiseta Nasa'}
            valorProduto={'R$ 149,00'}
          />

          <Produtos
            fotoProduto={'https://picsum.photos/150/200?a=2'}
            nomeProduto={'Relógio de pulso Nasa'}
            valorProduto={'R$ 297,00'}
          />

          <Produtos
            fotoProduto={'https://picsum.photos/150/200?a=3'}
            nomeProduto={'Caneca Nasa'}
            valorProduto={'R$ 100,00'}
          />

          <Produtos
            fotoProduto={'https://picsum.photos/150/200?a=4'}
            nomeProduto={'Camiseta SpaceX'}
            valorProduto={'R$ 119,00'}
          />

          <Produtos
            fotoProduto={'https://picsum.photos/150/200?a=5'}
            nomeProduto={'Miniatura Starship'}
            valorProduto={'R$ 597,00'}
          />

          <Produtos
            fotoProduto={'https://picsum.photos/150/200?a=6'}
            nomeProduto={'Miniatura Crew Dragon'}
            valorProduto={'R$ 800,00'}
          />

          <Produtos
            fotoProduto={'https://picsum.photos/150/200?a=7'}
            nomeProduto={'Mochila Blue Origin'}
            valorProduto={'R$ 97,00'}
          />

          <Produtos
            fotoProduto={'https://picsum.photos/150/200?a=8'}
            nomeProduto={'Boné Blue Origin'}
            valorProduto={'R$ 60,00'}
          />
        </AppProdutos>
        
      </div>
    );
  }
}

export default App;
