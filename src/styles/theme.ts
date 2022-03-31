import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
    fonts: {
        heading: 'Bangers',
        body: 'Comic Neue'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'cyan.500'
            }
        }
    }
})