import { Box, Spinner } from '@chakra-ui/react'

export const SpaceSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="60%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const SpaceContainer = ({ children }) => (
  <Box
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['30px', '-20px', '-70px']}
    w={[120, 240, 480]}
    h={[120, 240, 480]}
    position="relative"
  >
    {children}
  </Box>
)

const Loader = () => {
  return (
    <SpaceContainer>
      <SpaceSpinner />
    </SpaceContainer>
  )
}

export default Loader
