/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react"
import { Header } from "."
import * as mediaQueryHooks from '@chakra-ui/media-query'

jest.mock('react-router-dom', () => {
    return {
        useLocation() {
            return {
                pathname: '/'
            }
        }
    }
})

describe('Header Component', () => {
    it('should render SearchBox if it is in wide version', () => {
        jest.spyOn(mediaQueryHooks, 'useBreakpointValue').mockImplementationOnce(() => true)

        const { getByPlaceholderText } = render(
            <Header onSearch={() => {}} searchText="" setSearchText={() => {}}/>
        )

        expect(getByPlaceholderText('Search By Name')).toBeInTheDocument()
    }) 

    it('should not render SearchBox if it is not in wide version', () => {
        jest.spyOn(mediaQueryHooks, 'useBreakpointValue').mockImplementationOnce(() => false)

        const { queryByPlaceholderText } = render(
            <Header onSearch={() => {}} searchText="" setSearchText={() => {}}/>
        )

        expect(queryByPlaceholderText('Search By Name')).not.toBeInTheDocument()
    }) 
})