import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    ModalProps,
    FormControl,
    Input,
    FormHelperText,
    VStack,
    Textarea,
    useCounter,
    Box,
    FormLabel,
    HStack,
} from '@chakra-ui/react'
import { useMemo } from 'react'

export default function AirtableAutomationQuote( props: Omit<ModalProps, 'children'> ) {
    const counter = useCounter()
    const estimate = useMemo( () => counter.valueAsNumber * 100, [counter.valueAsNumber] )
    return (
        <Modal closeOnEsc={false} closeOnOverlayClick={false} {...props}>
            <ModalOverlay />
            <ModalContent maxW='container.sm' >
                <ModalHeader>Quote for Easy Airtable Automation</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack as='form' spacing={8} >
                        <FormControl isRequired >
                            <FormLabel>Your name, full name, or pseudonym</FormLabel>
                            <Input type='text' placeholder='Ok John Snow' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email please</FormLabel>
                            <Input type='email' placeholder='' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>How many automation triggers do you expect to have</FormLabel>
                            <Input type='number' onChange={e => counter.setValue(parseInt(`${e?.target.value}`))} placeholder='Only numbers go here' />
                            <FormHelperText>Triggers are actions on your airtable base that trigger an automated task</FormHelperText>
                        </FormControl>
                        <FormControl w='100%' isRequired>
                            <FormLabel>Please provide a short description of your automation needs</FormLabel>
                            <Textarea w='100%' placeholder='' />
                        </FormControl>
                    </VStack>
                </ModalBody>
                <ModalFooter as={VStack} >
                    <Box mr='auto' >
                        {!!estimate && ! Number.isNaN(estimate) && estimate > 0 && (
                            <>
                                Estimated quote: {estimate.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'usd',
                                })}
                            </>
                        )}
                    </Box>
                    <HStack w='100%' justifyContent='space-between'>
                        <Button colorScheme='blue'>I want a free consultation instead</Button>
                        <Button colorScheme='orange'>Submit quote request</Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}