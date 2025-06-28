import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"
import App from './App'


function sum(num1: number, num2: number){
    return num1 + num2
}

function media(num1: number, num2: number){
    const result = (num1 + num2) / 2

    if(result >= 7){
        return "Aprovado"
    }else{
        return "Exame"
    }
}


//Cria um bloco que agrupa varios testes relacionados
describe("First test app component", () => {

    //Teste da função sum
    it("should adds 5 + 2 to equal 7", () => {
        expect(sum(5, 2)).toBe(7);
    })

    //Teste da função media
    it("should calculate the average and return exame", () => {
        expect(media(5, 6)).toBe("Exame");
        expect(media(7, 8)).toBe("Aprovado");
    })

    //Teste de componente
    describe("App component", () => {
        it("should render app component", () => {
            render( <App/>)

            screen.getByText("Ola React") //Busca um elemento que contenha exatamente esse texto (Se não encontrar, o teste falha.)
        })

        it("Should heading h1 have correct text", () => {
            render(<App/>)

            const headingElement = screen.getByRole("heading", {level: 1}) //Busca um elemento pela função semântica do HTML. h1 = lvl1, h2 = lvl2...
            expect(headingElement).toHaveTextContent("Ola React") //Verifica se o elemento contém o texto especificado.
            expect(headingElement).toHaveClass("titulo") //Verifica se o elemento possui uma ou mais classes CSS.
        })

        it("Should change message on button click", () => {
            render(<App/>)

            const ButtonElement = screen.getByText("Alterar mensagem")
            fireEvent.click(ButtonElement) //Simula um evento de clique no elemento.

            screen.getByText("Estudando testes com reactjs")

            const oldMessage = screen.queryByText("Bem vindo ao projeto")//Igual ao getByText, mas retorna null se não encontrar
            expect(oldMessage).not.toBeInTheDocument()//Verifica se um elemento não está presente no DOM (tela).

        })
    })
})