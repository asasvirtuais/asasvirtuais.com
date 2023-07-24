'use client'

import { Card, CardBody, CardFooter, CardHeader, Center, Container, GridItem, Heading, SimpleGrid, VStack, chakra } from '@chakra-ui/react'
import Chakra from '@/chakra'

import Footer from '@/app/(footer)'
import { PropsWithChildren } from 'react'
import Link from 'next/link'

const Project = ( {
    title,
    children
} : PropsWithChildren<{
    title: string
}> ) => {
    return (
        <GridItem>
            <Card h='100%' alignItems='space-between' >
                <CardHeader>
                    <Heading fontSize='2xl' textAlign='center' >{title}</Heading>
                </CardHeader>
                <CardBody>{children}</CardBody>
                <CardFooter></CardFooter>
            </Card>
        </GridItem>
    )
}

export default function Home() {
    return (
        <>
            <Chakra>
                <main>
                    <Container as='header' zIndex={0} maxW='container.lg'>
                        <Center as='h1' minH='100vh' flexDir='column' >
                            <Heading as='span' mr={40} color='blue.500' fontSize='6xl' textShadow='0px 3px black' >Projects</Heading>
                            <Heading as='span' ml={40} color='gray.900' fontSize='2xl' >by Asas Virtuais</Heading>
                        </Center>
                    </Container>
                    <Container as='section' zIndex={0} maxW='container.xl'>
                        <SimpleGrid columns={{base: 1, md: 2}} mb={12} gap={8} alignItems='stretch' >
                            <Project title='Device Centric Auth'>
                                <p>
                                    User authentication using the most modern protocols.
                                    The increasing number of websites, apps, platforms, portals, blogs, etc.. made it very complicated for users to manage their passwords. The risk of loosing an important asset makes it unviable to simply use the same password across different accounts, while the number of passwords to be remembered is far too much for most of us.
                                    Out of the many protocols that attempted to solve for this, OAuth has been the most adopted, and we believe that the future of OAuth is the a more device-centric authentication mechanism.
                                    While we believe that authentication mechanisms must be an open initiative with a lot of open source code available. We still would like to make of mention of <Link href='https://www.okta.com/'>Okta</Link> for its leading role on unifying user authentication with platforms like Auth0 which provide clear documentation, and a lot of legal guarantees to their users.
                                    Asas Virtuais aims to contribute to the open source user authentication community by providing a more specific implementation of OAuth protocols, specifically we have been integrating the many OAuth providers and streamlining the process.
                                    Although OAuth has advanced a lot, many providers still have varying, and sometimes incorrect, implementations of the protocol. We are here to help fix that by streamlining incorrect APIs and connecting different authentication providers in a unified system that we believe will work best for developers.
                                </p>
                            </Project>
                            <Project title='Community'>
                                Long were the days of Yahoo Answers, long live Stackexchange, long live Discourse, long live the internet made by real people talking to real people.
                                Every hobby and every profession should probably have its own community platform, even more every community should have their platform on every language.
                                The age of gold of the internet was the time in which a simple Google search would give you links to access online forums. Nowdays all you get is fake advertisement, fake opinions, and fake news!
                                But old habits die hard, and community platforms are gaining space yet again.
                                Asas Virtuais aims to enable community leaders to manage their communities with ease by providing open source tools.
                            </Project>
                            <Project title='AI and Marketing'>
                                No, this is not about FAKE ADS!
                                This is about your business reaching your target audience, this is about using the power of AI to document what your business is about and letting AI find people who are looking for YOU!
                                Asas Virtuais aims to enable people to find business and business to find people by providing tools to facilitate the access to AI for the purpose of DOCUMENTATION over content creation.
                            </Project>
                            <Project title='DSL Everything'>
                                <p>
                                    Low-Code and No-Code meet your challanger. Forget onlyfans, this is OnlyCode. We strive to replace pages and pages of "settings" with a single document that describe those settings. AWS had this problem, and so Terraform and other solutions were created. Well, why not do the same with Discord, WordPress, and every other inefficient settings-centric system.
                                    But what is DSL? Domain Specific <chakra.span textDecor='line-through' >Languages</chakra.span> Libraries, because despite its many flaws, JavaScript makes for readable code with all the necessary programming logic syntax and DSL is not about making yet another wonky programming language with strong opinions about programming, it is about making the programmer mindset available for field experts.
                                    Yes the programmer mindset, which is a mindset of problem solving creativity. Give a language in which experts can express themselves and let them build solutions with that.
                                </p>
                                <blockquote cite='https://webpy.org/philosophy' >
                                    “Think about the ideal way to write a web app. Write the code to make it happen.” - Aaron Swartz
                                </blockquote>
                                <p>
                                    This is the philosophy that DSL needs, there are many cases out there in which this can be applied, the biggest challange right now is connecting professionals with developers able to do it.
                                </p>
                                <p>
                                    Asas Virtuais aims to lead the field of writting Domain Specific Libraries with TypeScript, we want to be an example for others to follow.
                                </p>
                            </Project>
                            <Project title='Rust for Game Engines'>
                                <p>
                                    The impact that bad game engines had in the gaming industry is beyond our imagination. The game engines of the past need to go, the game engines of tomorrow will be built with the needs of today, and today we need games to run with more peformance and less bugs. The bugs might be obvious, but why do we need more performance? Well, besides the fact that a gaming computer costs a fortune, which is an accessibility issue. Games are not supposed to run on user devices anymore, they are supposed to run on the cloud and that means gaming companies are going to start paying to run their games, this new market trend is unavoidable as the cloud gaming experience is cheaper and better than the console and computer counter-part. Cloud gamers put the PC master rest to rest.
                                </p>
                                <p>
                                    Asas Virtuais aims to support the development of open sourced game engines written in Rust, while not directly acting on it, because we are a Web Development Open Source initative
                                </p>
                            </Project>
                            <Project title='Rust for Streaming'>
                                Game Pass, GeForce Now, and other similar projects are backed by big names out there. But what the corporation fails to see is often the exact need the industry has. Currently games are not developed with streaming in mind, and that has to change, because now games can be made to be played via Cloud.
                                Cloud Gaming makes it easy for the people to access the games, no need to download 1 TeraByte of assets to play, no need to install the game on the correct Operating System with the correct SDKs and what more. Now you can play by accessing a link and that is what game developers should be considering.
                                <p>
                                    Asas Virtuais believes the best way to support Game Engines written in Rust is to help guide those Games for the future of Cloud Gaming.
                                    We are currently looking to improve the user and the developer experience of <Link href='https://github.com/parsec-cloud/parsec-sdk'>Parsec</Link>
                                </p>
                            </Project>
                            <Project title='Systems of Distributed Decision'>
                                Tools have solved many problems throughout history and changed the world in many ways. The impact that the internet has had is far from over.
                                While the b-word chain has had a terrible result with scams all around, we still believe in the future of non-descentralized p2p networks like <Link href='https://github.com/holochain/holochain' >Holo</Link>
                                Asas Virtuais believes that in order to finance the future of the Web, it is necessary to have the right tools of rewarded contribution.
                            </Project>
                        </SimpleGrid>
                    </Container>
                </main>
                <Footer />
            </Chakra>
        </>
    )
}
