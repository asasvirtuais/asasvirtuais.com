"use client"
import { Box, Card, CardBody, CardHeader, Center, GridItem, GridItemProps, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Chakra from '@/chakra'
import Footer from '@/app/(footer)'
import { PropsWithChildren } from 'react'
import Image from 'next/image'
import { comfortaa } from '@/font'

const Project = ( { title, children, ...props } : PropsWithChildren<{title: string} & GridItemProps> ) => {
    return (
        <GridItem role='group' {...props} >
            <Card h='100%' shadow='4px 4px 8px 0px black' >
                <CardHeader w='100%' textAlign='center' fontSize='lg'
                className={comfortaa.className}>{title}</CardHeader>
                <CardBody pointerEvents='all' w='100%' position='relative'>
                <Box zIndex={1} position='absolute' h='100%' w='100%' top='0px' bottom='0px' right='0px' left='0px' _groupHover={{opacity: 0.1}} bg='black' opacity={.5} pointerEvents='none' transition='.4s' />
                    {children as any}
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default function Home() {
    return (
        <Chakra>
                <Center minH='100vh' >
                    <VStack textAlign='center' >
                        <Heading>Our Legacy Portofolio</Heading>
                        <Text fontSize='lg' color='#222' fontWeight='bold' >Here lies the stepping stones...</Text>
                    </VStack>
                </Center>
                <SimpleGrid maxW='container.xl' mx='auto' gap={{md: 4, lg: 8}} columns={{
                    base: 1,
                    md: 3,
                    lg: 4
                }} mb={40} justifyContent='stretch' >
                    <Project display={{base: 'initial', lg: 'none'}} title='Live University App'>
                        <Image style={{objectFit: 'contain', width: '100%', height: '100%', pointerEvents: 'all'}}
                            src='/gallery/portfolio/live-university/start-here.live-university.jpeg'
                            width={720} height={721} alt='live-uni'/>
                    </Project>
                    <Project display={{base: 'none', lg: 'initial'}} title='Live University App'>
                        <Image style={{objectFit: 'contain', width: '100%', height: '100%', pointerEvents: 'all'}}
                            src='/gallery/portfolio/live-university/inscrever-se.live-university.jpeg'
                            width={720} height={721} alt='live-uni'/>
                    </Project>
                    <Project title='Esfera Global Site'
                        gridColumn={{
                            base: 'span 1',
                            md: 'span 2',
                            lg: 'span 3'
                        }}>
                        <Image style={{objectFit: 'contain', width: '100%', height: '100%', pointerEvents: 'all'}}
                            src='/gallery/portfolio/esferaglobal/home.esferaglobal.png'
                            width={1352} height={751} alt='esferaglobal'/>
                    </Project>
                    <Project title='Public Registry Web Form'
                        gridColumn={{
                            base: 'span 1',
                            md: 'span 2',
                            lg: 'span 3'
                        }}>
                        <Image style={{objectFit: 'contain', width: '100%', height: '100%', pointerEvents: 'all'}}
                            src='/gallery/portfolio/cartorio/main.png'
                            width={1351} height={593} alt='cartorio'/>
                    </Project>
                    <Project title='Customized Responsive Checkout'>
                        <Image style={{objectFit: 'contain', width: '100%', height: '100%', pointerEvents: 'all'}}
                            src='/gallery/portfolio/custom-checkout/mobile.checkout.jpeg'
                            width={719} height={1119} alt='custom-checkout'/>
                    </Project>
                    <Project title='Finder Web Tool'
                        gridColumn={{
                            base: 'span 1',
                            md: 'span 2',
                        }}>
                        <Image style={{objectFit: 'contain', width: '100%', height: '100%', pointerEvents: 'all'}}
                            src='/gallery/portfolio/finder-tool/finder-1.png'
                            width={1342} height={638} alt='finder-tool'/>
                    </Project>
                    <Project title='Lead Qualification Web App'
                        gridColumn={{
                            base: 'span 1',
                            md: 'span 2',
                        }}>
                        <Image style={{objectFit: 'contain', width: '100%', height: '100%', pointerEvents: 'all'}}
                            src='/gallery/portfolio/pool-leads/lead-step-12.png'
                            width={1348} height={538} alt='finder-tool'/>
                    </Project>
                </SimpleGrid>
            <Footer />
        </Chakra>
    )
}
