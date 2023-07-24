import { Button, Text, Flex, Stack, Box, FormControl, FormHelperText } from '@chakra-ui/react'

export default function Support() {
    return (
        <form method="post" target='_top'
            action="mailto:asasvirtuais.com@gmail.com?subject=Help with WordPress Script Workers">
            <Stack as={FormControl} my={12} justifyContent="center" flexDir='column' alignItems="center">
                <Text fontSize='sm' >Need help?</Text>
                <Button
                    type='submit'
                    size='sm'
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }}>
                    Get Support
                </Button>
                <FormHelperText textAlign='center' >
                    Or contact us at<br/>
                    <a target='_top' href='mailto:asasvirtuais.com@gmail.com' >asasvirtuais.com@gmail.com</a>
                </FormHelperText>
            </Stack>
        </form>
    )
}