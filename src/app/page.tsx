'use client'

import { Container } from '@chakra-ui/react'
import Chakra from '@/chakra'

import Footer from '@/app/(footer)'

import Hero from './(hero)'

export default function Home() {
    return (
        <Chakra>
            <Container as='main' mb='-72px' maxW='container.xl'>
                <Hero />
            </Container>
            <Footer />
        </Chakra>
    )
}
