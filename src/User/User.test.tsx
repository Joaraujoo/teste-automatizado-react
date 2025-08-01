import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import User from ".";

export default {};


describe("User component", () => {

    it("should check if the name is not displayerd when component is mounted", () => {
        render(<User/>)

        const message = screen.queryByText("Usuário online: Joao Araujo") //Busca o elemento na tela que possa ou não estar presente no DOM

        expect(message).not.toBeInTheDocument()
    })

    it("should display the name after typed in the input is correct", () => {
        render(<User/>)

        const inputElement = screen.getByPlaceholderText("Digite o nome")

        fireEvent.change(inputElement, {target: {value: "Joao Araujo"}})

        expect(inputElement).toHaveValue("Joao Araujo")


    })

    it("should display the name after typing in the input and click on the button", () => {
        render(<User/>)

        const inputElement = screen.getByPlaceholderText("Digite o nome") //Busca o elemente utilizando o placeholder 
        const buttonElement = screen.getByRole("button", { name: "Cadastrar"})

        fireEvent.change(inputElement, {target: {value: "Joao Araujo"}})//Simula a mudança de valor do input
        fireEvent.click(buttonElement)

        const message = screen.getByText("Usuário online: Joao Araujo")

        expect(message).toBeInTheDocument()

    })
})
