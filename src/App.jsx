import { useState } from 'react'
import './App.css'

const messages = {
  triste: [
    { msg: 'Te admiro muchisimo mi amor ❤️', img: 'src/img/amor1.jpg' },
    {
      msg: 'Recuerda que tu novio siempre estara para ti, llamame 😘',
      img: 'src/img/amor2.jpg',
    },
    {
      msg: 'Tu eres mi todo, quiere que te lleve algo? dimelo 💪',
      img: 'src/img/amor3.jpg',
    },
  ],
  feliz: [
    { msg: 'Lograremos muchisimas cosas juntos 😊', img: 'src/img/amor9.jpg' },
    { msg: 'Eres mi alegría cada día 🥰', img: 'src/img/amor5.jpg' },
    {
      msg: 'Eres la razón de mi felicidad 🌟',
      img: 'src/img/amor6.jpg',
    },
  ],
  extrana: [
    { msg: 'Yo también te extraño mucho 💕', img: 'src/img/amor7.jpg' },
    { msg: 'Pronto estaremos juntos ❤️', img: 'src/img/amor8.jpg' },
    {
      msg: 'Quisiera estar contigo yaaa 😢',
      img: 'src/img/amor9.jpg',
    },
  ],
  enojada: [
    {
      msg: 'Quisiera abrazarte hasta que se te pase 🥰',
      img: 'src/img/amor10.jpg',
    },
    {
      msg: 'Todo tiene solucion mi amor, saldremos de esto juntos 🫂',
      img: 'src/img/amor11.jpg',
    },
    {
      msg: 'Recuerda que te amo, incluso cuando estás enojada ❤️',
      img: 'src/img/amor1.jpg',
    },
  ],
}

function App() {
  const [state, setState] = useState({ msg: '', img: '' })

  const [prevIndex, setPrevIndex] = useState(null) // Almacena el índice anterior

  const handleClick = (feeling) => {
    let randomIndex

    // Generar un índice aleatorio diferente del índice anterior
    do {
      randomIndex = Math.floor(Math.random() * messages[feeling].length)
    } while (randomIndex === prevIndex)

    setState(messages[feeling][randomIndex]) // Actualizar mensaje e imagen
    setPrevIndex(randomIndex) // Guardar el índice actual como el anterior
  }

  return (
    <>
      <div className="container">
        <h1>Para mi amor</h1>
        <h2>
          Una carta de amor muy especial de Andrés para María, te amo mucho
        </h2>
        <div className="button-container">
          <button onClick={() => handleClick('triste')}>
            {' '}
            Presiona cuando estes triste
          </button>
          <button onClick={() => handleClick('feliz')}>
            Presiona cuando estes feliz
          </button>
          <button onClick={() => handleClick('extrana')}>
            Presiona cuando me extrañes
          </button>
          <button onClick={() => handleClick('enojada')}>
            Presiona cuando estes enojada
          </button>
        </div>
        {state.msg && (
          <div className="message-container">
            <p>{state.msg}</p>
            <img src={state.img} alt="estado" />
          </div>
        )}
      </div>
    </>
  )
}

export default App
