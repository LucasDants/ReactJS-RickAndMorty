import { Box, Image } from "@chakra-ui/react";
import portalImage from '../assets/portal.png'
import { ActiveLink } from "./ActiveLink";

export function Header() {
    return (
        <Box bg="cyan.500" as="header" display="flex" flexDirection="row" justifyContent='center' alignItems="center">
            <ActiveLink to="/">Personagens</ActiveLink>
            <Image src={portalImage} boxSize={12} alt="Green Portal" m={[0, 2]} />
            <ActiveLink to="/episodes">Episódios</ActiveLink>
        </Box>
    )
}