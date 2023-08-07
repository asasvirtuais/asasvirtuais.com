import { Link } from '@chakra-ui/next-js'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    HStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { ReactNode } from 'react'

const Logo = () => {
    return (
        <Link href='/' >
            <Image width={40} height={40} src='/icon.png' alt='logo icon' />
        </Link>
    )
}

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
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
                        <Text fontSize={{base: 'md', sm: 'lg'}} >© 2023 Asas Virtuais. All rights reserved</Text>
                    </HStack>
                    <HStack spacing={8}>
                        <Link href='/portfolio/legacy'>Stepping Stones</Link>
                        <Link href='/icaro'>Contributors</Link>
                    </HStack>
            </Container>
        </Box>
    )
}