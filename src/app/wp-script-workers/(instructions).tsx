import { instructions } from '@/wording'
import { Box, Heading, VStack } from '@chakra-ui/react'

export default function Instructions () {
    return (
        <VStack maxW='lg' mx='auto' alignItems='flex-start'>
            <Heading textAlign='left' mx={0} w='auto'>{instructions.heading}</Heading>
            <VStack w='100%' textAlign='left' alignItems='flex-start'>
                <Box>{instructions.step1}</Box>
                <Box>{instructions.step2}</Box>
                <Box>{instructions.step3}</Box>
                <Box>{instructions.step4}</Box>
            </VStack>
        </VStack>
    )
}
