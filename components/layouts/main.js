import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import SpaceLoader from '../space-loader'

const Moon = dynamic(() => import('../space'), {
  ssr: false,
  loading: () => <SpaceLoader />
})
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Alexey Fortunatov - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Moon />
        {children}
      </Container>
    </Box>
  )
}

export default Main
