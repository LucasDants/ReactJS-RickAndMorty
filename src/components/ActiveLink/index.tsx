import {  Link as ChakraLink, StyleProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

type ActiveLinkProps = LinkProps & StyleProps & {
    children: ReactNode
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
    const { pathname } = useLocation()

    let isActive = false

    if(rest.to === pathname) {
        isActive = true
    }

    return (
        <ChakraLink as={Link} fontFamily="heading" color={isActive ? 'pink.500' : 'white'} fontSize="2xl" {...rest}>
            {children}
        </ChakraLink>
    )
}