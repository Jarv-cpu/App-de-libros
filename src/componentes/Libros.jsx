import './libros.css';
import { ListaLecturaContext } from '../contextos/listaDeLecturaContext';
import { useContext } from 'react';

export function Libros({ libros }) {
  const { lista, agregarLibro } = useContext(ListaLecturaContext);

  return (
    <main>
      <ul className="libros">
        {libros?.map(libro => (
          <li
            key={libro.ISBN}
            onClick={() => { agregarLibro(libro); }}
            className={lista.some(l => l.ISBN === libro.ISBN) ? "libroAgregado" : ""}
          >
            <img src={libro.cover} alt={libro.synopsis} />
            <h3>{libro.title}</h3>
          </li>
        ))}
      </ul>
    </main>
  );
}
