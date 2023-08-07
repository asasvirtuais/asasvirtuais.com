import { Box, useColorModeValue } from '@chakra-ui/react'
import lightBg from '../../public/background.svg'
import darkBg from '../../public/dark-background.svg'

export default () => {
    const bg = useColorModeValue(lightBg, darkBg)
    return (
        <Box
            position='fixed'
            w='100vw' h='100vh'
            top={0} bottom={0} left={0} right={0}
            backgroundImage={`url(${bg.src})`}
        />
    )
}
