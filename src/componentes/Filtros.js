import React from "react";
import styled from "styled-components";

const ContainerFiltros = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20vw;
  height: 100vh;
  border: 1px solid black;
  color: black;
`;

class Filtros extends React.Component {
  render() {
    return (
      <ContainerFiltros>
        <h1>{this.props.nomeFiltro}</h1>
        <label for="valorMinimo">Valor Mínimo</label>
        <input type="number" min="0" name="valorMinimo"></input>
        <label for="valorMaximo">Valor Máximo</label>
        <input type="number" min="0" name="valorMaximo"></input>
        <label>Buscar Produto</label>
        <input type="text"></input>
        <button>Filtrar</button>
      </ContainerFiltros>
    );
  }
}

export default Filtros;
