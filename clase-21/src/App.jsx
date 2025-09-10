import Header from './components/Header'
// import './App.css'

const Footer = () => {
  return (
    <footer>
      <p>Sitio desarrollado por la UTN</p>
    </footer>
  )
}

const Main = () => {
  return (
    <div>
      <h2>Titulo de App</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci reiciendis est delectus dolorem voluptates sit aspernatur quae non labore sequi laudantium ducimus fuga, soluta ipsam eos quaerat sint debitis nesciunt!</p>
      <Button />
    </div>
  )
}

const Button = () => {
  return (
    <button>Haz click aqui</button>
  )
}

// componente
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
