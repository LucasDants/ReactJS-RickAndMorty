import { render } from "@testing-library/react"
import { CharacterCard } from "."
import { characterMock } from "../../utils/character"

describe('CharacterCard Component', () => {
    it('should renders correctly', () => {
        const view = render(
            <CharacterCard data={characterMock.data} />
        )
        expect(view).toMatchSnapshot()
    }) 
})