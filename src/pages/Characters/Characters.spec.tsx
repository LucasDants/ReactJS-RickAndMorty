/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react"
import { MockedProvider } from '@apollo/client/testing';
import { Characters } from "."
import { GET_CHARACTERS } from "../../services/getCharacters"
import { characterMock } from "../../utils/character";

jest.mock('react-router-dom', () => {
    return {
        useLocation() {
            return {
                pathname: '/'
            }
        }
    }
})


const mocks = [
    {
        request: {
            query: GET_CHARACTERS,
            variables: {
                page: 1
            }
        },
        result: {
            data: {
                characters: {
                    info: {
                        prev: null,
                        next: 2,
                        pages: 10,
                        count: 100
                    },
                    results: [characterMock.data]
                }
            }
        }
    }
]

const errorMock = {
    request: {
      query: GET_CHARACTERS,
      variables: { page: 1 },
    },
    error: new Error(''),
  };

describe('Characters Screen', () => {
    it('should renders correctly the loading spinner', () => {
        const { getByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Characters />
            </MockedProvider>
        )

        expect(getByText('Loading...')).toBeInTheDocument()
    })

    it('should renders correctly the cards', async () => {
        const { getByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Characters />
            </MockedProvider>
        )

        await new Promise(resolve => setTimeout(resolve, 0)); 

        expect(getByText('Abradolf Lincler')).toBeInTheDocument()
    })

     it('should renders correctly the message error', async () => {
        const { getByText } = render(
            <MockedProvider mocks={[errorMock]} addTypename={false}>
                <Characters />
            </MockedProvider>
        )

        await new Promise(resolve => setTimeout(resolve, 0));

        expect(getByText('Os dados buscados de Rick and Morty estão em alguma dimensão desconhecida.')).toBeInTheDocument()
    })
})