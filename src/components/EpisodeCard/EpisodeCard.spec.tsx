import { render } from "@testing-library/react"
import { EpisodeCard } from "."
import { episodeMock } from "../../utils/episode"

const episode =  episodeMock.data

describe('EpisodeCard Component', () => {
    it('should renders correctly', () => {
        const view = render(
            <EpisodeCard data={episode} />
        )
        expect(view).toMatchSnapshot()
    }) 
})