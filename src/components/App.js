import { useState } from 'react';
import '../styles/main.scss';

function App() {
  const [solution, setSolution] = useState ('');
  const [correctLetter, setCorrectLetter] = useState ('');
  const [failedLetter, setFailedLetter] = useState ('');
  const [ letter, setLetter] = useState ('');
  const [ numberOfErrors , setErrors] = useState (0);
/* 
Al cargar la página, la API debería darnos una nueva palabra y todos los campos vacíos :
  1. Escribir una letra.
  2. Comprobar que la letra forma parte de la palabra.
  3. Si es correcta se añade a la solución.
  4. Si no es correcta, se añade a las letras falladas donde tenemos un máximo de 5 errores.
  5. Si tenemos 5 errores hemos perdido.


*/

 const handleErrors = () => {
  console.log ('he hecho click')
 const plusOne = numberOfErrors + 1 ;
 setErrors ( plusOne);
 }
 

  return (
    <div className="page">
        <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
        <button onClick={handleErrors}>Incrementar</button>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
