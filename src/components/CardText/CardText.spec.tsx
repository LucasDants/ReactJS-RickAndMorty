/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react"
import { CardText } from "."

describe('CardText Component', () => {
    it('should renders correctly', () => {
        const { getByText } = render(
            <CardText title="Name" text="Lucas" />
        )
        expect(getByText('Name:')).toBeInTheDocument()
        expect(getByText('Lucas')).toBeInTheDocument()

    }) 
})