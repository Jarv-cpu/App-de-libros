import { useContext } from 'react'
import { FiltrosContext } from '../contextos/filtrosContext'
import './Filtros.css'

export function FiltrosDeLibros() {
    const { filtros, handleChangePaginas, handleChangeCategoria } = useContext(FiltrosContext)
    return (
        <header className='headerFiltros'>
            <div className='divFiltros'>
                <span>Filtrar por paginas</span>
                <div>
                    <input type="range"
                        max={600}
                        step={25}
                        value={filtros.paginaMinima}
                        onChange={handleChangePaginas}
                    />
                    <span>{filtros.paginaMinima}</span>
                </div>
            </div>

            <div className='divFiltros'>
                <span>Filtrar por genero</span>
                <select onChange={handleChangeCategoria} value={filtros.genero}>
                    <option value="Todos">Todos</option>
                    <option value="Fantasía">Fantasia</option>
                    <option value="Ciencia ficción">Ciencia Ficcion</option>
                    <option value="Zombies">Zombie</option>
                    <option value="Terror">Terror</option>
                </select>
            </div>
        </header>
    )
}