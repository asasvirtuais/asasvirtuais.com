'use client'

import { Container } from '@chakra-ui/react'
import Chakra from '@/chakra'

import Footer from '@/app/(footer)'

import Hero from './(hero)'
import Navbar from './(navbar)'
import Background from './(background)'

export default function Home() {
    return (
        <Chakra>
            <Background/>
            <Navbar/>
            <Container as='main' maxW='container.xl'>
                <Hero />
            </Container>
        </Chakra>
    )
}
