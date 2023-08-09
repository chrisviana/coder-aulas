import './App.css'

export function App() {

  function validar() {
    alert('Validar')
  }

  return (
    <div className="container">
      <h1>Hello World</h1> 
      <button onClick={validar}>Clique</button>
    </div>
  )
}


