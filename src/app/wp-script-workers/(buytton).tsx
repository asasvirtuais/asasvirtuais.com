import { prices } from '@/wording'
import { Center, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function Buytton() {
    return (
        <Center mt={4} >
            <Button as={Link} href={prices.usd.link} colorScheme='orange' size='lg' >BUY NOW!</Button>
        </Center>
    )
}