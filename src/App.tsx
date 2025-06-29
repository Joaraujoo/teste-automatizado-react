import './App.css'
import { useState } from 'react'
import { Button } from './button'
import { Posts } from './posts'

export default function App(){

  const [message, setMessage] = useState("Bem vindo ao projeto")
  return(
    <div>
      <h1 className='titulo'>Ola React</h1>
      <p>{message}</p>

      <button onClick={() => setMessage("Estudando testes com reactjs")}>
        Alterar mensagem
      </button>

      <hr />
      <br />

      <Button onClick={() => alert("Clicouuuuuu")} disabled={false}>
        Clique aqui
      </Button>


     
    </div>
  )
}