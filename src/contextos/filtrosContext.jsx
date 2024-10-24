import { createContext, useState } from "react";

export const FiltrosContext = createContext();

export function FiltrosProvider({ children }) {

  const [filtros, setFiltros] = useState({
    paginaMinima: 0,
    genero: "Todos"
  })

  function handleChangeCategoria(e) {
    setFiltros(prevEstado => ({
      ...prevEstado,
      genero: e.target.value
    }));
  }

  function handleChangePaginas(e) {
    setFiltros(prevEstado => ({
      ...prevEstado,
      paginaMinima: e.target.value
    }));
  }

  return (
    <FiltrosContext.Provider value={{ filtros, handleChangePaginas, handleChangeCategoria }}>
      {children}
    </FiltrosContext.Provider>
  );
}
