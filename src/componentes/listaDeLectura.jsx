import './listaDeLectura.css'
import imagen from '../assets/libroIcono.png'
import { useContext, useId } from 'react'
import { ListaLecturaContext } from '../contextos/listaDeLecturaContext'

export function ListaDeLectura() {
    const ckeckboxId = useId()

    const {lista, agregarLibro} = useContext(ListaLecturaContext)

    return (
        <aside className="ListaDeLectura">
            <input id={ckeckboxId} type="checkbox" hidden />
            <div>
                <h3>Lista de lecutra</h3>

                <ul>
                    {lista.map(libro => (
                        <li key={libro.ISBN} onClick={() =>{agregarLibro(libro)}}>
                            <img src={libro.cover} alt={libro.title} />
                        </li>
                    ))}
                </ul>
            </div>

            <label htmlFor={ckeckboxId}>
                <img src={imagen} alt="lista de lectura" />
            </label>
        </aside>
    )
}