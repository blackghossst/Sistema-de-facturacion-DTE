import { useEffect, useState } from "react"

function App() {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/clientes/")
      .then(res => res.json())
      .then(data => setClientes(data))
  }, [])

  return (
    <div>
      <h1>Clientes</h1>
      <ul>
        {clientes.map((c:any) => (
          <li key={c.id}>
            {c.nombre} - {c.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
