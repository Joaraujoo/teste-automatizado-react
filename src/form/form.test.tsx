import { render, screen , fireEvent} from "@testing-library/react";
import { Form } from ".";

describe("Form Component", () => {

    it("Should test form and input component", () => {
        render(<Form/>)

        //Config
        const nameElement = screen.getByPlaceholderText("Digite seu nome") as HTMLInputElement
        const emailElement = screen.getByPlaceholderText("Digite seu email") as HTMLInputElement
        const buttonElement = screen.getByRole("button" , {name: "Cadastrar"}) //eu poderia usar o getByText aqui tambem

        //Action
        fireEvent.change(nameElement, {target: {value: "Joao Araujo"}})
        fireEvent.change(emailElement, {target: {value: "joaoaraujo@gmail.com"}})

        //Assert
        expect(nameElement.value).toBe("Joao Araujo")//Verifica se o valor do input foi alterado
        expect(emailElement.value).toBe("joaoaraujo@gmail.com")

        const consoleLog = jest.spyOn(console, "log")//Registra "espiona" todas as vezes que console.log for chamado.
        fireEvent.submit(buttonElement)//submit, pois o botao está dentro de um formulario com o type submit
        
        expect(consoleLog).toHaveBeenCalledWith("Cadastrado com sucesso")//Verifica se o console.log foi chamado com o valor esperado.
        expect(nameElement.value).toBe("")
        expect(emailElement.value).toBe("")

        

    })
})