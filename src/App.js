import React from "react";
import styled from "styled-components";
import Produtos from "./componentes/Produtos";
import Carrinho from "./componentes/Carrinho";

const AppContainer = styled.div`
  display: grid;
  grid-column: repeat(4,1fr);
  grid-row: repeat(4,1fr);
`;

const Header = styled.div`
  grid-column: 1/3;
  grid-row: 1;
  width: 110%;
  height: 200px;
  padding-left: 20px;
  color: white;
  background-color: #8b008b;
`;

const ContainerSelect = styled.div`
  grid-column: 2/4;
  grid-row: 1;
  width: 100%;
  height: 200px;
  color: white;
  background-color: #8b008b;
  justify-content: center;
  `;

const InputFiltros = styled.input`
  padding: 3px;
  margin-left: 5px;
  margin-right: 15px;
`;

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: space-around;
  margin: auto;
  width: 120%;
  height: 740px;
  padding: 10px;
  background-color: #054F77;
`;

class App extends React.Component {
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

  adicionarCarrinho = (produto) => {
    const novoCarrinho = [...this.state.carrinho, produto];
    this.setState({ carrinho: novoCarrinho });
    console.log(novoCarrinho);
  };

  removerDoCarrinho = (id) => {
    const novoCarrinho = this.state.carrinho.filter(
      (produto) => produto.id !== id
    );
    this.setState({ carrinho: novoCarrinho });
  };

  compararNumeros = (a, b) => {
    return a.valor - b.valor;
  };

  compararNumeros2 = (a, b) => {
    return b.valor - a.valor;
  };

  alteraFiltro = (event) => {
    this.setState({ filtroSelecionado: event.target.value });
    console.log(this.state);
  };

  onChangeValorMinimo = (event) => {
    this.setState({ inputValorMinimo: Number(event.target.value) });
  };

  onChangeValorMaximo = (event) => {
    this.setState({ inputValorMaximo: Number(event.target.value) });
  };

  onChangeBuscarProduto = (event) => {
    this.setState({ inputBuscarProduto: event.target.value.toUpperCase() });
  };

  acessaCarrinho = () => {
    let mudaCarrinho = !this.state.carrinhoDeCompras;
    this.setState({ carrinhoDeCompras: mudaCarrinho });
  };

  render() {
    let listaOrdenada;
    switch (this.state.filtroSelecionado) {
      case "Crescente":
        listaOrdenada = this.state.listaDeProdutos.sort(this.compararNumeros);
        break;
      case "Decrescente":
        listaOrdenada = this.state.listaDeProdutos.sort(this.compararNumeros2);
      default:
    }

    let listaFiltrada = listaOrdenada;

    if (this.state.inputValorMinimo) {
      listaFiltrada = listaFiltrada.filter((produto) => {
        return produto.valor >= this.state.inputValorMinimo;
      });
    }

    if (this.state.inputValorMaximo) {
      listaFiltrada = listaFiltrada.filter((produto) => {
        return produto.valor <= this.state.inputValorMaximo;
      });
    }

    if (this.state.inputBuscarProduto) {
      listaFiltrada = listaFiltrada.filter((produto) => {
        return produto.nome
          .toUpperCase()
          .includes(this.state.inputBuscarProduto);
      });
    }

    listaFiltrada = listaFiltrada.map((produto) => {
      return (
        <div>
          <Produtos
            key={produto.id}
            nomeProduto={produto.nome}
            valorProduto={produto.valor}
            fotoProduto={produto.foto}
            funcaoAdicionar={() => this.adicionarCarrinho(produto)}
          />
        </div>
      );
    });

    return (
      <>
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
          <hr></hr>
        </Header>
        <ContainerSelect>
          <br></br>
          <br></br>
          <br></br>
            <label>Exibição:</label>
            <select
              value={this.state.filtroSelecionado}
              onChange={this.alteraFiltro}
            >
              <option value="Crescente">Preço crescente</option>
              <option value="Decrescente">Preço decrescente</option>
            </select>
          
          </ContainerSelect>
        <ContainerProdutos>
          {listaFiltrada}
         
        </ContainerProdutos>
             
      </AppContainer>
      <Carrinho
      listaCarrinho={this.state.carrinho}
      removeCarrinho={this.removerDoCarrinho}
    /> 
    </>
    );
  }
}

export default App;
