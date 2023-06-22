import { useState } from 'react';
import '../styles/main.scss';

function App() {
  const [word, setWord] = useState ('katakroker');
  const [userLetters, setUserLetters] = useState ([]);
  const [ lastLetter, setLastLetter] = useState ('');
  const [ numberOfErrors , setErrors] = useState (0);
/* 
Al cargar la página, la API debería darnos una nueva palabra y todos los campos vacíos :
  1. Escribir una letra.
  2. Comprobar que la letra forma parte de la palabra.
  3. Si es correcta se añade a la solución.
  4. Si no es correcta, se añade a las letras falladas donde tenemos un máximo de 5 errores.
  5. Si tenemos 5 errores hemos perdido.


*/

/*const handleErrors = () => {
  console.log ('he hecho click')
 const plusOne = numberOfErrors + 1 ;
 setErrors ( plusOne);
 }*/
 /*const renderSolution = () => {
  const wordLetters= word.split('')
  return wordLetters.map ((oneLetter) => {
  if (){<li>{oneLetter}</li>}
 })
 }*/
 const renderSolution = () => {
  const wordLetters= word.split('')
  return wordLetters.map ((oneLetter) =><li className="letter" ></li>)}

 const handleLastLetter = (ev) => {
  setLastLetter(ev.target.value);
  const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,50}$/;
  const lastLetterValue = ev.target.value;
  const letterTest = regex.test(lastLetterValue);
  if (letterTest) {
    console.log ('Esta letra es válida')
    if (!word.includes(lastLetterValue)) {
     const plusOne = numberOfErrors + 1 ;
      setErrors ( plusOne);
    }
  } else {
    console.log ('Esta letra no es válida')
  }
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
            {renderSolution()}
              {/*<li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>*/}
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
              onChange={handleLastLetter}
              value={lastLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
        {/*<button onClick={handleErrors}>Incrementar</button>*/}
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
