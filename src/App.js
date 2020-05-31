import React from "react";
import styled from "styled-components";
import Produtos from "./componentes/Produtos";
import CarrinhoDeCompras from "./componentes/CarrinhoDeCompras";
import carrinho from "./imagens/carrinho1.jpg";
import Filtros from "./componentes/Filtros";
import Carrinho from "./componentes/Carrinho";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.div`
  width: 97.7%;
  height: 200px;
  padding-left: 30px;
  color: white;
  background-color: #8b008b;
`;

const InputFiltros = styled.input`
  padding: 3px;
  margin-left: 5px;
  margin-right: 15px;
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: auto;
  width: 98%;
  height: 740px;
  padding: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContainerCarrinho = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: fixed;
  margin-top: 560px;
`;

const Imagem = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 20px;
  border-radius: 50px;
`;
const ContainerSelect = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 2vh;
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
          <ContainerSelect>
            <label>Quantidade de produtos: 6 >> </label>
            <select
              value={this.state.filtroSelecionado}
              onChange={this.alteraFiltro}
            >
              <option value="Crescente">Preço crescente</option>
              <option value="Decrescente">Preço decrescente</option>
            </select>
          </ContainerSelect>
        </Header>

        <ContainerProdutos>
          {listaFiltrada}
          <Carrinho
            listaCarrinho={this.state.carrinho}
            removeCarrinho={this.removerDoCarrinho}
          />
        </ContainerProdutos>

        <ContainerCarrinho>
          <Imagem src={carrinho} onClick={this.acessaCarrinho}></Imagem>
        </ContainerCarrinho>
      </AppContainer>
    );
  }
}

export default App;
