import { screen, render, fireEvent } from '@testing-library/react'
import { Posts } from '.'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import "@testing-library/jest-dom"

describe("posts components", () => {
    const server = setupServer(
        http.get("https://jsonplaceholder.typicode.com/users", async () => {
            return HttpResponse.json([
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                },
            ])
        })
    )

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it("Should fetch api and show users", async () => {
        render(<Posts/>)
        
        const buttonElement = screen.getByRole("button", {name: "Buscar usúarios" })

        fireEvent.click(buttonElement)

        const nameUser = await screen.findByText("Leanne Graham")//Tenta encontrar o elemento por alguns milissegundos antes de desistir com erro.(espera na tela)

        expect(nameUser).toBeInTheDocument()
    })
})


/*
    | Método          | Tipo       | Quando usar                                                            |
| --------------- | ---------- | ---------------------------------------------------------------------- |
| `getByText()`   | síncrono   | Quando o texto já **deveria estar visível**                            |
| `findByText()`  | assíncrono | Quando o texto vai aparecer depois de uma **requisição**, clique, etc. |
| `queryByText()` | síncrono   | Para verificar **se o texto não existe** (sem lançar erro)             |

*/