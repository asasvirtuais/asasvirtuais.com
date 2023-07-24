'use client'
import { chakra } from '@chakra-ui/react'

export default function GTagIFrame() {
    return (
        <noscript><chakra.iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMSKQMDT"
        height="0" width="0" display='none' visibility='hidden'></chakra.iframe></noscript>
    )
}