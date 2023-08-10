import { Link } from '@chakra-ui/next-js'
import {
    Box,
    Container,
    Stack,
    HStack,
    Heading,
} from '@chakra-ui/react'

const Logo = () => {
    return (
        <Link href='/' >
            <Heading>Asas Virtuais</Heading>
        </Link>
    )
}

export default function Footer() {
    return (
        <Box
            zIndex={1}
            as='footer'
            color='gray.700'>
            <Container
                as={Stack}
                maxW='container.xl'
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                    <HStack spacing={8} fontSize='lg' >
                        <Logo />
                    </HStack>
                    <HStack spacing={8}>
                        <Link href='/portfolio/legacy'>Stepping Stones</Link>
                        <Link href='/icaro'>Contributors</Link>
                    </HStack>
            </Container>
        </Box>
    )
}