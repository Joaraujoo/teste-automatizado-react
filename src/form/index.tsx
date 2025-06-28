import { useState, type FormEvent } from "react"


export function Form(){

    const [name, setName] = useState("")
    const [Email, setEmail] = useState("")

    function handleSubmit(e: FormEvent){
        e.preventDefault()

        console.log("Cadastrado com sucesso")

        setEmail("")
        setName("")

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Digite seu nome</label>
                <input 
                    type="text" 
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Digite seu email</label>
                <input 
                    type="text" 
                    placeholder="Digite seu email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

            </form>

        </div>
    )
}