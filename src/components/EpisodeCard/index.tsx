import { Flex } from "@chakra-ui/react";
import { memo } from "react";
import { Episode } from "../../services/getEpisodes";
import { CardText } from "../CardText";

type CardProps = {
    data: Episode
}

function EpisodeCardComponent({ data }: CardProps) {
    const characters = data.characters.map(character => character.name).join(', ')

    return (
        <Flex direction="column" maxW={220} flex="1" borderWidth={1} bg='white' borderRadius={4} borderColor="yellow.500" p={2}>
            <CardText title="Name" text={data.name} />
            <CardText title="Episode" text={data.episode} />
            <CardText title="Air Date" text={data.air_date} />
            <CardText title="Characters" text={characters} />
        </Flex>
    )
}

export const EpisodeCard = memo(EpisodeCardComponent)