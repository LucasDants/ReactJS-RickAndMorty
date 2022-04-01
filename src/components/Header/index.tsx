import { Flex, Icon, Image, Input, useBreakpointValue } from "@chakra-ui/react";
import portalImage from '../../assets/portal.png'
import { ActiveLink } from "../ActiveLink";
import { RiSearchLine } from "react-icons/ri";

type HeaderProps = {
    searchText: string;
    setSearchText: (text: string) => void
    onSearch: () => void
}

export function Header({ searchText, setSearchText, onSearch }: HeaderProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
        lg: true,
    })

    return (
        <Flex bg="cyan.500" as="header" flexDirection="row" alignItems="center" justifyContent="space-between" px={[16, 32]}>
            <Flex as="nav" flexDirection="row" justifyContent='center' alignItems="center">
                <Image src={portalImage} boxSize={12} alt="Green Portal" my={2} />
                <ActiveLink to="/" m={2}>Characters</ActiveLink>
                <ActiveLink to="/episodes">Episodes</ActiveLink>
            </Flex>
            {
                isWideVersion ? (
                    <Flex
                        as="label"
                        flex="1"
                        py="2"
                        px="4"
                        ml="6"
                        maxWidth={250}
                        alignSelf="center"
                        color="gray.200"
                        position="relative"
                        bg="yellow.400"
                        borderRadius="full"
                    >
                        <Input
                            color="gray.50"
                            variant="unstyled"
                            px="4"
                            mr="4"
                            placeholder="Search By Name"
                            _placeholder={{ color: 'white' }}
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                        />
                        <Icon as={RiSearchLine} fontSize="20" onClick={onSearch} _hover={{ color: 'cyan.500' }} />
                    </Flex>
                ) : (<></>)
            }
        </Flex>
    )
}