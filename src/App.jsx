import { FiltrosDeLibros } from './componentes/filtros'
import { library } from './mocks/libros.json'
import { Libros } from './componentes/Libros'
import { useContext } from 'react'
import { FiltrosContext } from './contextos/filtrosContext'
import { ListaDeLectura } from './componentes/listaDeLectura'
import { ListaLecturaProvider } from './contextos/listaDeLecturaContext'

function App() {

  const { filtros } = useContext(FiltrosContext)

  function filtrarLibros(libros) {
    return libros.filter(libro => libro.pages >= filtros.paginaMinima && (filtros.genero == "Todos" || libro.genre == filtros.genero))
  }

  const libros = library.map(item => item.book)

  const librosFiltrados = filtrarLibros(libros)

  return (
    <>
      <FiltrosDeLibros />

      <ListaLecturaProvider>
        <ListaDeLectura />
        <Libros libros={librosFiltrados} />
      </ListaLecturaProvider>
    </>
  )

}

export default App
