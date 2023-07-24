'use client'
// import dynamic from 'next/dynamic'
 
// const AirtableAutomationQuote = dynamic(() => import('./airtable/automation/(quote)'), {
//   loading: () => null,
// })


import Chakra from "@/chakra"
import { Container, Center, Heading, CardBody, Card, CardFooter, CardHeader, SimpleGrid, GridItem, Button, UnorderedList, ListItem, useBoolean, ModalProps, Box } from "@chakra-ui/react"
import Footer from "@/app/(footer)"
import { PropsWithChildren } from "react"
import { ComponentType } from 'react'

const Service = ( {
    // component: Component,
    title,
    children
} : PropsWithChildren<{
    title: string
    component?: ComponentType<Omit<ModalProps, 'children'>>
}> ) => {
    // const [loaded, setLoading] = useBoolean()
    // const [isOpen, { on: onOpen, off: onClose, toggle: onToggle }] = useBoolean()
    return (
        <>
            <GridItem>
                <Card h='100%' w='100%'>
                    <CardHeader><Heading w='100%' textAlign='center' fontSize='2xl' >{title}</Heading></CardHeader>
                    <CardBody>{children}</CardBody>
                    <CardFooter>
                        {/* <Button ml='auto' colorScheme='orange'
                            onClick={() => {
                                setLoading.on()
                                onOpen()
                            }}>
                            Get an online quote
                        </Button> */}
                    </CardFooter>
                </Card>
            </GridItem>
            {/* {loaded && (
                <Component isOpen={isOpen} onClose={onClose} />
            )} */}
        </>
    )
}

export default function Services() {
    return (
        <Chakra>
            <main>
                <Container as='header' zIndex={0} maxW='container.lg'>
                    <Center as='h1' minH='100vh' flexDir='column' >
                        <Heading as='span' mr={40} color='blue.500' fontSize='6xl' textShadow='0px 3px black' >Services</Heading>
                        <Heading as='span' ml={40} color='gray.900' fontSize='2xl' >by Asas Virtuais</Heading>
                    </Center>
                    <SimpleGrid mb={12} columns={{base: 1, md: 2}} gap={8} >
                        <Service title='Easy Airtable Automation'
                            // // @ts-expect-error
                            // component={AirtableAutomationQuote}
                            >
                            <Box>
                                While many platforms provide integration and automation solutions. Few can provide what we offer.
                                <br/>
                                <br/>
                                <UnorderedList>
                                    <ListItem>
                                        First of all, our automations are tested and failure proof, many platforms don't provide a way of testing integrated automations.
                                    </ListItem>
                                    <ListItem>
                                        Second, our automation comes with reports on every step of the way.
                                    </ListItem>
                                    <ListItem>
                                        Final, you can get more complex automations with us, because we will set it up for you using our Airtable DSL technology.
                                    </ListItem>
                                </UnorderedList>
                            </Box>
                        </Service>
                        <Service title='Easy Airtable base setup'>
                            <Box>
                                Easy Airtable base setup, with any customization.
                                <br/>
                                <br/>
                                Setting up Airtable bases can take some time, and how can you be sure that you gave the right access to the right people in a dynamic and growing company?
                                <br/>
                                <br/>
                                Tell us all about what your Airtable settings needs are, and we will get it done for you with a few extras.
                                <br/>
                                Not only you will get the exact configuration you ask for, but you will be providade with a simplified dashboard that shows you only what is important to you!
                            </Box>
                        </Service>
                        <Service title='Easy Discord server setup'>
                            <Box>
                                Easy Discord server setup, with any customization.
                                <br/>
                                <br/>
                                Setting up Discord servers can take some time, and how can you be sure that you gave the right access to the right people in a dynamic and growing community?
                                <br/>
                                A mistake can cause a lot of damage to a big community.
                                <br/>
                                Tell us all about what your Discord settings needs are, and we will get it done for you with a few extras.
                                <br/>
                                Not only you will get the exact configuration you ask for, but you will be providade with a simplified dashboard that shows you only what is important to you!
                            </Box>
                        </Service>

                    </SimpleGrid>
                </Container>
            </main>
            <Footer />
        </Chakra>
    )
}
