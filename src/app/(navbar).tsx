import { Box, Container, Heading, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import {
  Button,
  useColorMode,
  Center,
} from '@chakra-ui/react'

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Box position='fixed' top={0} left={0} right={0} w='100vw' zIndex={10}>
                <Container maxW='container.xl' h='72px' mx='auto'>
                    <Center justifyContent='space-between' h='100%'>
                        <Heading display={{base: 'none', md: 'block'}} >Asas Virtuais</Heading>
                        <IconButton ml='auto' size='lg' aria-label='color mode' onClick={toggleColorMode} icon={
                            colorMode === 'light' ? <MoonIcon /> : <SunIcon />
                        }/>
                    </Center>
                </Container>
            </Box>
        </>
    )
}
