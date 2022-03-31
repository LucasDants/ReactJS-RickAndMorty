import {  Link as ChakraLink } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

interface ActiveLinkProps extends LinkProps {
    children: ReactNode
    shouldMatchExactHref?: boolean
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
    const { pathname } = useLocation()
    console.log(pathname)
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