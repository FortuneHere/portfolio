import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  List,
  ListItem,
  Link,
  Icon,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoLinkedin, IoLogoDiscord } from 'react-icons/io5'
import { SiGmail, SiHabr } from 'react-icons/si'
import {
  FaFilePdf,
  FaTelegramPlane,
  FaYandexInternational
} from 'react-icons/fa'

const Page = () => {
  const downloadPDF = () => {
    // using Java Script method to get PDF file
    fetch('/portfolio/resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'resume.pdf'
        alink.click()
      })
    })
  }

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
        >
          Hello, I&apos;m a front-end developer based in Georgia, Tbilisi.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Fortunatov Alexey
            </Heading>
            <p>Front-end Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/portfolio/images/clover.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            I&apos;m an enthusiastic and detail-oriented Frontend Software
            Engineer seeking an entry-level position with Company to use my
            skills in coding, troubleshooting complex problems, and assisting in
            the timely completion of projects.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Kazan, Russia.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed Institute of Computer Technology and Protection graduation
            at Kazan National Research Technical University named after
            A.N.Tupolev - KAI
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I enjoy
          </Heading>
          <Paragraph>Music, Movies, Technology, Learning</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contacts
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/FortuneHere" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @FortuneHere
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/fortunehere/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @FortuneHere
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://career.habr.com/fortunehere" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={SiHabr} />}
                >
                  @FortuneHere
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://discordapp.com/users/260375193598296064"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Discord
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button
                onClick={downloadPDF}
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaFilePdf} />}
              >
                Download PDF resume
              </Button>
            </ListItem>
            <ListItem ml={'16px'} mt={2}>
              <Tag
                color={useColorModeValue('teal.600', 'teal.200')}
                bg="transparent"
                size={1}
                fontWeight="bold"
              >
                <TagLeftIcon as={FaTelegramPlane} />
                <TagLabel>@FortuneThere</TagLabel>
              </Tag>
            </ListItem>
            <ListItem ml={'19px'} mt={2}>
              <Tag
                color={useColorModeValue('teal.600', 'teal.200')}
                bg="transparent"
                size={1}
                fontWeight="bold"
              >
                <TagLeftIcon as={SiGmail} />
                <TagLabel>kekray777@gmail.com</TagLabel>
              </Tag>
            </ListItem>
            <ListItem ml={'19px'} mt={2}>
              <Tag
                color={useColorModeValue('teal.600', 'teal.200')}
                bg="transparent"
                size={1}
                fontWeight="bold"
              >
                <TagLeftIcon as={FaYandexInternational} />
                <Text colorScheme="teal">kekray777@yandex.ru</Text>
              </Tag>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
