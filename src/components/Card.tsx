import { Box, Image, Text } from "@chakra-ui/react";

export function Card() {
    return (
        <Box maxW={220}>
            <Image borderTopRadius={4} src="https://cloud.estacaonerd.com/wp-content/uploads/2019/07/17091456/rick-and-morty-4-temp1.jpg" boxSize={56} objectFit="cover"  />
            <Box borderWidth={1} borderTopWidth={0} borderBottomRadius={2} borderColor="yellow.500" p={2}>
                <Text fontFamily="heading">Name: <Text color="pink.500" fontFamily="body" as="span">Rick</Text></Text>
                <Text fontFamily="heading">Origem: <Text color="pink.500" fontFamily="body" as="span">Terra</Text></Text>
                <Text fontFamily="heading">Episódios: <Text color="pink.500" fontFamily="body" as="span">Todos</Text></Text>
            </Box>
        </Box>
    )
}