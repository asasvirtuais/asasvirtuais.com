'use client'

import Chakra from "@/chakra"
import { Container, Center, Heading, HStack, Text, VStack, AspectRatio, SimpleGrid, GridItem, Card, CardHeader, CardBody, CardFooter, Box, Button, IconButton, Icon, useColorModeValue } from "@chakra-ui/react"
import Footer from "@/app/(footer)"
import { comfortaa } from "@/font"
import { Image, Link } from "@chakra-ui/next-js"
import { PropsWithChildren } from "react"
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BiLogoUpwork } from 'react-icons/bi'
import Background from "../(background)"
import Navbar from "../(navbar)"

const Feedback = ( { from, where, children } : PropsWithChildren<{ from: string, where: string }> ) => {
    return (
        <GridItem w='100%'>
            <Card height='100%'>
                <CardHeader textAlign='left' w='100%'><Box w='100%'><b>Client:</b> {from}</Box></CardHeader>
                <CardBody>{children}</CardBody>
                <CardFooter textAlign='right' w='100%'><Box w='100%'><b>From:</b> {where}</Box></CardFooter>
            </Card>
        </GridItem>
    )
}

const Main = () => {
    return (
        <Container as='main' zIndex={0} maxW='container.xl'>
            <Center as='h1' minH='100vh' flexDir='column' justifyItems='stretch'>
                <HStack alignItems='stretch'>
                    <Card>
                        <CardHeader>
                            <Center w='100%'>
                                <Text className={comfortaa.className} fontSize='4xl' fontWeight='bolder'>
                                    Ícaro
                                    <br/>
                                    <Text className={comfortaa.className} as='span' ml={20} color='blue.500' fontSize='2xl' fontWeight='bolder'>
                                        Asas Virtuais
                                    </Text>
                                </Text>
                            </Center>
                        </CardHeader>
                        <CardBody>
                            <VStack justifyContent='center'>
                                <AspectRatio alignSelf='flex-end' w='xs' ratio={449/344}>
                                    <Image src='/gallery/upwork/icaro-upwork-profile.png' alt='Icaro Asas Virtuais' width={449} height={344} />
                                </AspectRatio>
                                <HStack ml='auto'>
                                    <IconButton as={Link} href='https://www.upwork.com/freelancers/icarocc' target='_blank' aria-label='upwork' color='#0CAA00'  variant='unstyled' size='lg' fontSize='4xl' icon={<BiLogoUpwork/>}/>
                                    <IconButton as={Link} href='https://www.linkedin.com/in/icaro-capobianco' target='_blank' aria-label='linkedin' color='#0A66C2' variant='unstyled' size='lg' fontSize='4xl' icon={<BsLinkedin/>}/>
                                    <IconButton color={useColorModeValue('#333333', '#E6EDF3')} justifySelf='flex-end' as={Link} href='https://github.com/icarocapobianco' target='_blank' aria-label='github' variant='unstyled' size='lg' fontSize='4xl' icon={<BsGithub/>}/>
                                </HStack>
                            </VStack>
                        </CardBody>
                        <CardFooter>
                            <Button as={Link} href='https://calendly.com/asasvirtuais' target='_blank' w='100%'>Schedule a meeting</Button>
                        </CardFooter>
                    </Card>
                    <AspectRatio display={{base: 'none', md: 'block'}}  w='xs' ratio={1/1.618} >
                        <Image src='/gallery/icaro/need-better-photo.png' alt='Icaro Asas Virtuais' width={1080} height={854} />
                    </AspectRatio>
                </HStack>
            </Center>
            <VStack w='100%' maxW='container.lg' mx='auto' >
                <Text as='h2' fontSize='4xl' fontWeight='bolder'>Feedback to be proud of</Text>
                <SimpleGrid w='100%' my={12} gap={4} columns={{
                    base: 1,
                    md: 3
                }} >
                    <Feedback from='UpWork Client' where='UpWork'>
                        <Image src='/gallery/upwork/review-1.png' width={317} height={458} aspectRatio={317/458} alt='UpWork Review 1' />
                    </Feedback>
                    <Feedback from='UpWork Client' where='UpWork'>
                        <Image src='/gallery/upwork/review-2.png' width={311} height={469} aspectRatio={311/469} alt='UpWork Review 2' />
                    </Feedback>
                    <Feedback from='UpWork Client' where='UpWork'>
                        <Image src='/gallery/upwork/review-4.png' width={303} height={458} aspectRatio={303/458} alt='UpWork Review 4' />
                    </Feedback>
                    <Feedback from='Brazilian Client' where='99Freela'>
                        <Image src='/gallery/99-reviews/review1.png' width={352} aspectRatio={352/161} height={161} alt='99 Freela Review 1'  />
                    </Feedback>
                    <Feedback from='Brazilian Client' where='99Freela'>
                        <Image src='/gallery/99-reviews/review2.png' width={347} aspectRatio={347/138} height={138} alt='99 Freela Review 2'  />
                    </Feedback>
                    <Feedback from='Brazilian Client' where='99Freela'>
                        <Image src='/gallery/99-reviews/review3.png' width={353} aspectRatio={353/144} height={144} alt='99 Freela Review 3' />
                    </Feedback>
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

export default function Home() {
    return (
        <Chakra>
            <Background/>
            <Navbar/>
            <Main/>
            <Footer />
        </Chakra>
    )
}
