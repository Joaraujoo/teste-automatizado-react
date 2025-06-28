import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "."


//Descrição do teste
describe("Button component", () => {

    //Teste em si
    it("should call onclick prop on click", () => {

        //Cria uma função simulada com Jest
        const onClick = jest.fn()

        //Renderiza o componente com essa função:
        render(<Button onClick={onClick} disabled={true}>Meu botao</Button>)

        //Pega o botão pelo texto:
        const buttonElement = screen.getByText("Meu botao")
        
        //Dispara um clique:
        fireEvent.click(buttonElement)

        expect(onClick).toHaveBeenCalled()
    })


    it("should render with gray background disabled", () => {
        render(<Button onClick={ () => {} } disabled={true}>Meu botao </Button> )

        //Outra maneira de pegar o botão pelo texto: 
        const buttonElement = screen.getByRole("button", { name: "Meu botao"})

        //Expero que o elemente tenha esse estilo especifico
        expect(buttonElement).toHaveStyle({ backgroundColor: "#FAFAFA"})


    })
})


export default {}



/* 
    render: Renderiza o componente React em um ambiente de teste.
    screen: Permite acessar elementos renderizados, como getByText, getByRole, etc.
    fireEvent: Simula eventos (como click, change, etc.).

    getByRole(role: string, options?: { name?: string, ... })
    role: é o tipo do elemento acessível, como "button", "textbox", "heading", etc.
    name: é o nome acessível (normalmente, o texto visível no botão ou label).

*/