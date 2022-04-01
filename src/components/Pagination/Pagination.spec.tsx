/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react"
import { Pagination } from "."

describe('Pagination Component', () => {
    it('should renders correctly', () => {
        const { getAllByText } = render(
            <Pagination onPageChange={() => {}} totalCountOfRegisters={100} currentPage={2} registersPerPage={10} />
        )

        expect(getAllByText('10')[0]).toBeInTheDocument()
        expect(getAllByText('20')[0]).toBeInTheDocument()
        expect(getAllByText('100')[0]).toBeInTheDocument()
    }) 

    it('should renders the last page correctly', () => {
        const { getAllByText } = render(
            <Pagination onPageChange={() => {}} totalCountOfRegisters={104} currentPage={11} registersPerPage={10} />
        )

        expect(getAllByText('100')[0]).toBeInTheDocument()
        expect(getAllByText('104')[0]).toBeInTheDocument()
        expect(getAllByText('104')[1]).toBeInTheDocument()
    }) 

    it('should renders the paginations items correctly when is in the first page', () => {
        const { getByText, queryByText } = render(
            <Pagination onPageChange={() => {}} totalCountOfRegisters={826} currentPage={1} registersPerPage={20} />
        )

        expect(getByText('1')).toBeInTheDocument()
        expect(getByText('2')).toBeInTheDocument()
        expect(queryByText('3')).not.toBeInTheDocument()
        expect(getByText('42')).toBeInTheDocument()
    }) 

    it('should renders the paginations items correctly when is in the fifth page', () => {
        const { getByText, queryByText } = render(
            <Pagination onPageChange={() => {}} totalCountOfRegisters={826} currentPage={5} registersPerPage={20} />
        )

        expect(getByText('1')).toBeInTheDocument()
        expect(getByText('4')).toBeInTheDocument()
        expect(queryByText('3')).not.toBeInTheDocument()
        expect(queryByText('7')).not.toBeInTheDocument()
        expect(getByText('6')).toBeInTheDocument()
        expect(getByText('42')).toBeInTheDocument()
    })
        
    it('should renders the paginations items correctly when is in the last page', () => {
        const { getByText, queryByText } = render(
            <Pagination onPageChange={() => {}} totalCountOfRegisters={826} currentPage={42} registersPerPage={20} />
        )

        expect(getByText('1')).toBeInTheDocument()
        expect(queryByText('40')).not.toBeInTheDocument()
        expect(getByText('41')).toBeInTheDocument()
        expect(getByText('42')).toBeInTheDocument()
    }) 
})