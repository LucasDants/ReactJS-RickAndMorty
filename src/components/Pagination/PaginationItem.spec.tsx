/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react"
import { PaginationItem } from "./PaginationItem"

describe('PaginationItem Component', () => {
    it('should be disabled when is the current', () => {
        const { getByText } = render(
            <PaginationItem number={1} isCurrent={true} onPageChange={() => {}} />
        )
        expect(getByText('1')).toBeDisabled()
    }) 

    it('should not be disabled when is not the current', () => {
        const { getByText } = render(
            <PaginationItem number={1} isCurrent={false} onPageChange={() => {}} />
        )
        expect(getByText('1')).not.toBeDisabled()
    }) 
})