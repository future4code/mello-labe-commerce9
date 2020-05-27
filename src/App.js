import React from 'react';
import styled from 'styled-components';
import Produtos from './componentes/Produtos';

const AppProdutos = styled.div `
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 55%;
  height: 800px;
  padding: 10px;
`

class App extends React.Component {
    state = {
      listaDeProdutos: [
        {
          id: 1,
          nome: "Camiseta Nasa",
          valor: 149.90,
          foto: "https://picsum.photos/150/200?a=1"
        },
        {
          id: 2,
          nome: "Relógio de pulso Nasa",
          valor: 297.50,
          foto: "https://picsum.photos/150/200?a=2"
        },
        {
          id: 3,
          nome: "Caneca Nasa",
          valor: 110.90,
          foto: "https://picsum.photos/150/200?a=3"
        },
        {
          id: 4,
          nome: "Camiseta SpaceX",
          valor: 119.50,
          foto: "https://picsum.photos/150/200?a=4"
        },
        {
          id: 5,
          nome: "Miniatura Starship",
          valor: 597.90,
          foto: "https://picsum.photos/150/200?a=5"
        },
        {
          id: 6,
          nome: "Miniatura Crew Dragon",
          valor: 805.90,
          foto: "https://picsum.photos/150/200?a=6"
        },
        {
          id: 7,
          nome: "Mochila Blue Origin",
          valor: 85.50,
          foto: "https://picsum.photos/150/200?a=7"
        },
        {
          id: 8,
          nome: "Boné Blue Origin",
          valor: 55.50,
          foto: "https://picsum.photos/150/200?a=8"
        }
      ]
    };

  render () {
    const listaRenderizada = this.state.listaDeProdutos.map(produto => {
      return (
        <div>
          <Produtos
            key={produto.id}
            nomeProduto={produto.nome}
            valorProduto={produto.valor}
            fotoProduto={produto.foto}
          />
        </div>
      )
    })

    return (
      <div className="app-container">
        <AppProdutos>
          {listaRenderizada}
        </AppProdutos>
      </div>
    );
  }
}

export default App;
