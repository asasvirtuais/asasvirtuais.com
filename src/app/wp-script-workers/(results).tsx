import { Box, Center, Container, GridItem, HStack, Heading, Icon, SimpleGrid, Stack } from '@chakra-ui/react'
import { FaRegHandPointRight } from 'react-icons/fa'
import Image from 'next/image'

export default function Results() {
    return (
        <SimpleGrid gridTemplateColumns='1fr auto 1fr'>
            <GridItem>
                <Image width={285} height={94} src='/gallery/blocking-time.png' alt='blocking time of 1.59 seconds' />
            </GridItem>
            <Center alignSelf='center' >
                <Icon as={FaRegHandPointRight} fontSize={{
                    base: 40,
                    md: 60
                }} />
            </Center>
            <GridItem justifySelf='flex-end' >
                <Image width={285} height={87} src='/gallery/no-blocking-time.png' alt='no blocking time' />
            </GridItem>
        </SimpleGrid>
    )
}

        // <Container maxW='container.lg'>
        //     <Heading mx='auto' my={12} textAlign='center' >Instant results</Heading>

        //     <Buytton/>
        // </Container>