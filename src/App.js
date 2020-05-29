import React from 'react';
import styled from 'styled-components';
import Produtos from './componentes/Produtos';
import CarrinhoDeCompras from './componentes/CarrinhoDeCompras';
import carrinho from "./imagens/carrinho1.jpg";

const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Header = styled.div `
  width: 97.7%;
  height: 200px;
  padding-left: 30px;
  color: white;
  background-color: #8B008B;
`

const InputFiltros = styled.input `
  padding: 3px;
  margin-left: 5px;
  margin-right: 15px;
`

const ContainerProdutos = styled.div `
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: auto;
  width: 98%;
  height: 740px;
  padding: 10px;
`

const ContainerCarrinho = styled.div `
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: fixed;
  margin-top: 560px;
`

const Imagem = styled.img `
  height: 80px;
  width: 80px;
  margin-right: 20px;
  border-radius: 50px;
`

class App extends React.Component {
  state = {
    listaDeProdutos: [
      {
        id: 1,
        nome: "Camiseta Nasa",
        valor: 149.90,
        foto: "https://picsum.photos/260/200?a=1"
      },
      {
        id: 2,
        nome: "Relógio de pulso Nasa",
        valor: 297.50,
        foto: "https://picsum.photos/260/200?a=2"
      },
      {
        id: 3,
        nome: "Caneca Nasa",
        valor: 110.90,
        foto: "https://picsum.photos/260/200?a=3"
      },
      {
        id: 4,
        nome: "Camiseta SpaceX",
        valor: 119.50,
        foto: "https://picsum.photos/260/200?a=4"
      },
      {
        id: 5,
        nome: "Miniatura Starship",
        valor: 597.90,
        foto: "https://picsum.photos/260/200?a=5"
      },
      {
        id: 6,
        nome: "Miniatura Crew Dragon",
        valor: 805.90,
        foto: "https://picsum.photos/260/200?a=6"
      },
      {
        id: 7,
        nome: "Mochila Blue Origin",
        valor: 85.50,
        foto: "https://picsum.photos/260/200?a=7"
      },
      {
        id: 8,
        nome: "Boné Blue Origin",
        valor: 55.50,
        foto: "https://picsum.photos/260/200?a=8"
      }
    ],

    inputValorMinimo: "",
    inputValorMaximo: "",
    inputBuscarProduto: "",

    carrinhoDeCompras: false

  };

  onChangeValorMinimo = event => {
    this.setState({inputValorMinimo: Number(event.target.value)});
  };

  onChangeValorMaximo = event => {
    this.setState({inputValorMaximo: Number(event.target.value)});
  };

  onChangeBuscarProduto = event => {
    this.setState({inputBuscarProduto: event.target.value.toUpperCase()});
  };

  acessaCarrinho = () => {
    let mudaCarrinho = !this.state.carrinhoDeCompras
    this.setState({carrinhoDeCompras: mudaCarrinho})
  };

  render () {

    let listaFiltrada = this.state.listaDeProdutos;

    if (this.state.inputValorMinimo) {
      listaFiltrada = listaFiltrada.filter(produto => {
        return produto.valor >= this.state.inputValorMinimo
      })
    }

    if (this.state.inputValorMaximo) {
      listaFiltrada = listaFiltrada.filter(produto => {
        return produto.valor <= this.state.inputValorMaximo
      })
    }

    if (this.state.inputBuscarProduto) {
      listaFiltrada = listaFiltrada.filter(produto => {
        return produto.nome.toUpperCase() === this.state.inputBuscarProduto
      })
    }

    listaFiltrada = listaFiltrada.map(produto => {
      return (
        <Produtos
          key={produto.id}
          nomeProduto={produto.nome}
          valorProduto={produto.valor}
          fotoProduto={produto.foto}
        />
      )
    }); 

    return (
      <AppContainer>
        
        <Header>
          <h1>Loja Space</h1>
          <h3>Filtros:</h3>
          <label>Valor Mínimo</label>
          <InputFiltros
            type={"number"}
            value={this.state.inputValorMinimo}
            onChange={this.onChangeValorMinimo}
          />
          <label>Valor Máximo</label>
          <InputFiltros
            type={"number"}
            value={this.state.inputValorMaximo}
            onChange={this.onChangeValorMaximo}
          />
          <label>Buscar Produto</label>
          <InputFiltros
            value={this.state.inputBuscarProduto}
            onChange={this.onChangeBuscarProduto}
          />
        </Header>

        <ContainerProdutos>
          {listaFiltrada}
        </ContainerProdutos>

        <ContainerCarrinho>
          <Imagem src={carrinho} onClick={this.acessaCarrinho}></Imagem>
        </ContainerCarrinho>
        
      </AppContainer>
    );
  }
}

export default App;
