import { extendTheme, useColorModeValue } from '@chakra-ui/react'
import { comfortaa, majorMonoDisplay } from './font'

export default extendTheme({
    fonts: {
        body: comfortaa.style.fontFamily,
        heading: majorMonoDisplay.style.fontFamily,
    }
})

export const useBg = () => useColorModeValue('#F4F4F4', '#333333')

export const useColor = () => useColorModeValue('#333', '#FFF')
