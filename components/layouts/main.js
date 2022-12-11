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
        <meta name="description" content="Alexey's homepage" />
        <meta name="author" content="Alexey Fortunatov" />
        <meta name="author" content="fortune" />
        <link rel="shortcut icon" href="/fortune-homepage/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Alexey Fortunatov" />
        <meta name="og:title" content="Alexey Fortunatov" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/images/card.png" />
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
