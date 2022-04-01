import { Flex, Image } from "@chakra-ui/react";
import { memo } from "react";
import { Character } from "../../services/getCharacters";
import { CardText } from "../CardText";

type CardProps = {
    data: Character
}

function CharacterCardComponent({data}: CardProps) {
    const episodesNumbers = data.episode.map(episode => episode.id).join(', ')

    return (
        <Flex direction="column" maxW={220}>
            <Image borderTopRadius={4} src={data.image} boxSize={56} objectFit="cover" />
            <Flex direction="column" flex="1" borderWidth={1} borderTopWidth={0} borderBottomRadius={4} bg='white' borderColor="yellow.500" p={2}>
                <CardText title="Name" text={data.name} />
                <CardText title="Species" text={data.species} />
                <CardText title="Type" text={data.type || 'unknown'} />
                <CardText title="Gender" text={data.gender} />
                <CardText title="Status" text={data.status} />
                <CardText title="Origin" text={data.origin.name} />
                <CardText title="Episodes" text={episodesNumbers} />
            </Flex>
        </Flex>
    )
}

export const CharacterCard = memo(CharacterCardComponent)