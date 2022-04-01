/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'
import { ActiveLink } from '.'

jest.mock('react-router-dom', () => {
    return {
        useLocation() {
            return {
                pathname: '/'
            }
        }
    }
})

describe('ActiveLink Component', () => {
    it('should renders correctly', () => {
        const { getByText } = render(
            <ActiveLink to="/">
                Characters
            </ActiveLink>
        )
        
        expect(getByText('Characters')).toBeInTheDocument()
    })

    it('should have the color pink if the link is currently active', () => {
        const { getByText } = render(
            <ActiveLink to="/">
                Characters
            </ActiveLink>
        )

        expect(getByText('Characters')).toHaveStyle('color: pink.500')
    })

    it('should have the color white if the link is currently deactivated', () => {
        const { getByText } = render(
            <ActiveLink to="/episodes">
                Episodes
            </ActiveLink>
        )

        expect(getByText('Episodes')).toHaveStyle('color: white')
    })
})  