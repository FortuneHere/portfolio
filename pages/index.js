import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align>
        Hello, I&apos;m a full-stack developer
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Fortunatov Alexey
          </Heading>
          <p>Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
