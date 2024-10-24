import { createContext, useState } from "react";

export const ListaLecturaContext = createContext();

export function ListaLecturaProvider({ children }) {
  const [lista, setLista] = useState(() => {
    const listaStorage = window.localStorage.getItem('lista')
    return listaStorage ? JSON.parse(listaStorage) : [];
  })

  function agregarLibro(libro) {
    let newLista = [...lista]
    if (!lista.some(libroEnLista => libroEnLista.ISBN === libro.ISBN)) newLista.push(libro)
    else newLista = lista.filter(libroEnLista => libroEnLista.ISBN !== libro.ISBN)

    window.localStorage.setItem('lista', JSON.stringify(newLista))
    setLista(newLista)
  }

  function usarStorage() {
    const listaStorage = window.localStorage.getItem('lista')
    setLista(JSON.parse(listaStorage))
  }

  window.removeEventListener("storage",usarStorage)
  window.addEventListener("storage",usarStorage)

  return (
    <ListaLecturaContext.Provider value={{ lista, agregarLibro }}>
      {children}
    </ListaLecturaContext.Provider>
  );
}
