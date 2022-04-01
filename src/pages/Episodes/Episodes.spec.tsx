/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react"
import { MockedProvider } from '@apollo/client/testing';
import { Episodes } from "."
import { GET_EPISODES } from "../../services/getEpisodes"
import { episodeMock } from "../../utils/episode";

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
            query: GET_EPISODES,
            variables: {
                page: 1
            }
        },
        result: {
            data: {
                episodes: {
                    info: {
                        prev: null,
                        next: 2,
                        pages: 10,
                        count: 100
                    },
                    results: [episodeMock.data]
                }
            }
        }
    }
]

const errorMock = {
    request: {
        query: GET_EPISODES,
        variables: { page: 1 },
    },
    error: new Error(''),
};

describe('Episodes Screen', () => {
    it('should renders correctly the loading spinner', () => {
        const { getByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Episodes />
            </MockedProvider>
        )

        expect(getByText('Loading...')).toBeInTheDocument()
    })

    it('should renders correctly the cards', async () => {
        const { getByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Episodes />
            </MockedProvider>
        )

        await new Promise(resolve => setTimeout(resolve, 0));

        expect(getByText('Pilot')).toBeInTheDocument()
    })

    it('should renders correctly the message error', async () => {
        const { getByText } = render(
            <MockedProvider mocks={[errorMock]} addTypename={false}>
                <Episodes />
            </MockedProvider>
        )

        await new Promise(resolve => setTimeout(resolve, 0));

        expect(getByText('Os dados buscados de Rick and Morty estão em alguma dimensão desconhecida.')).toBeInTheDocument()
    })
})