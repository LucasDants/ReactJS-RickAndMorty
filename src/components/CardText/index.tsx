import { Text } from "@chakra-ui/react";

type CardTextProps = {
    title: string;
    text: string;
}

export function CardText({ title, text }: CardTextProps) {
    return (
        <Text fontFamily="heading">
            {title}: <Text color="pink.500" fontFamily="body" as="span">{text}</Text>
        </Text>
    )
}