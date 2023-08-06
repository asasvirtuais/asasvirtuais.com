import { Image, Link } from '@chakra-ui/next-js'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    SimpleGrid,
    VStack,
} from '@chakra-ui/react'

const Header = () => (
    <SimpleGrid w='100%' columns={{base: 1, md: 2}} >
        <Image shadow='4px 4px 8px 0px black' display={{base: 'none', md: 'block'}} src='/gallery/upwork/agency.png' width={317} aspectRatio={317/199} minW='xs' height={199} alt='rising-talent' />
        <VStack w='100%'>
            <Title/>
            <Heading
                as='h1'
                fontWeight={600}
                fontSize={{ base: 'xl', md: '2xl' }}
                lineHeight={'110%'} >
                An <Text as='span' color={'blue.500'}>open source</Text> initiative
                <br />
                <Text as={'span'} color='black' >
                    for web development
                </Text>
            </Heading>
        </VStack>
    </SimpleGrid>
)

const Title = () => (
    <Heading
        as='h2'
        mb={4}
        w='100%'
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'} color={'blue.500'}>
            Asas <Text as='span' color='#333' >Virtuais</Text>
    </Heading>
)

const Buttons = () => (
    <SimpleGrid
        columns={{base: 1, sm: 2}}
        spacing={3}
        alignSelf={'center'}
        position={'relative'}
    >
        <Button
            as={Link}
            target='_top'
            href='mailto:asasvirtuais.com@gmail.com'
            colorScheme={'blue'}
            rounded={'full'}
            px={6}>
            Get in contact
        </Button>
        <Button
            as={Link}
            href='/projects'
            variant='outline'
            colorScheme='blue'
            rounded='full'
            px={6}>
            Our Projects
        </Button>
    </SimpleGrid>
)

export default function Hero() {
    return (
        <>
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    justifyContent={'center'}
                    pb={'72px'}
                    gap={{ base: 8, md: 8, lg: 12 }}
                    minH='100vh'>
                    <Header/>
                    <Buttons/>
                </Stack>
            </Container>
        </>
    )
}
