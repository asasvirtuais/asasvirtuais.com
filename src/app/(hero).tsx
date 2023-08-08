import { useColor } from '@/theme'
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
    CardFooter,
} from '@chakra-ui/react'
import Image from 'next/image'

const Title = () => (
    <Heading
        as='h2'
        w='auto'
        mb={4}
        color={useColor()}
        fontSize={{ base: '4xl', md: '6xl' }}
        fontWeight={600}
        lineHeight='110%'>
            Asas<br/><chakra.span whiteSpace='pre'>{' '}Virtuais</chakra.span>
    </Heading>
)
    
const Slogan = () => (
    <Text fontSize='lg'>An open-source initiative</Text>
)

const TitleBox = () => (
    <Card>
        <CardBody justifyContent='center' as={VStack}>
            <Title/>
            <Slogan/>
        </CardBody>
    </Card>
)

const AuthenticationPlatform = () => (
    <>
        <CardBody>
        </CardBody>
        <CardFooter>
        </CardFooter>
    </>    
)

const ChatbotPlatform = () => (
    <>
        <CardBody>
        </CardBody>
        <CardFooter>
        </CardFooter>
    </>    
)

const PlanMoreSpendLess = () => (
    <>
        <CardBody>
            <Image src='/cost-change-analysis.png' width={741} height={473} alt='cost of changes graph' priority />
        </CardBody>
        <CardFooter>
            <Text w='100%' textAlign='center'><b>Plan more, spend less</b></Text>
        </CardFooter>
    </>
)

const InfoBox = () => (
    <Card>
        <PlanMoreSpendLess/>
    </Card>
)

export default function Hero() {
    return (
        <Center
            as='header'
            w='100%'
            minH='100vh'
            flexDir='column'>
                <SlideFade style={{width: '100%'}} in={true} offsetY='200px'>
                    <SimpleGrid gap={4} columns={{base: 1, md: 2}} w='100%'>
                        <TitleBox/>
                        <InfoBox/>
                    </SimpleGrid>
                </SlideFade>
        </Center>
    )
}
