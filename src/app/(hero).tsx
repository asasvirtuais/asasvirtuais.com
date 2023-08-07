import {
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Center,
    SlideFade,
    chakra,
    Card,
    CardBody,
} from '@chakra-ui/react'
import { description } from './(wording)'

const Title = () => (
    <Heading
        as='h2'
        w='100%'
        mb={4}
        fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }}
        fontWeight={600}
        lineHeight='110%' color='#333'>
            Asas <chakra.span>Virtuais</chakra.span>
    </Heading>
)
    
const Slogan = () => (
    <Text fontSize='lg'>{description}</Text>
)

const TitleBox = () => (
    <Card>
        <CardBody as={VStack}>
            <Title/>
            <Slogan/>
        </CardBody>
    </Card>
)

const InfoBox = () => (
    <VStack>

    </VStack>
)

export default function Hero() {
    return (
        <Center
            as='header'
            w='100%'
            pb='72px'
            minH='100vh'
            flexDir='column'>
                <SlideFade style={{width: '100%'}} in={true} offsetY='200px'>
                    <SimpleGrid columns={{base: 1, md: 2}} w='100%'>
                        <TitleBox/>
                        <InfoBox/>
                    </SimpleGrid>
                </SlideFade>
        </Center>
    )
}
