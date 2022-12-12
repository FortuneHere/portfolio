import {
  Box,
  List,
  ListIcon,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'

import {
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaBootstrap,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaRegObjectGroup,
  FaPhp,
  FaNodeJs
} from 'react-icons/fa'

import {
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
  SiChakraui,
  SiPostman,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiCsharp,
  SiDotnet,
  SiThreedotjs,
  SiCplusplus,
  SiMocha,
  SiExpress
} from 'react-icons/si'

import { TbBrandNextjs } from 'react-icons/tb'

import { AiOutlineCloudSync } from 'react-icons/ai'

import { VscJson } from 'react-icons/vsc'

import { GiSBrick } from 'react-icons/gi'

const SkillList = () => {
  return (
    <Box
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={3}
      mb={6}
    >
      <List spacing={1}>
        <ListItem>
          <ListIcon as={FaHtml5} />
          HTML5
        </ListItem>
        <ListItem>
          <ListIcon as={FaCss3Alt} />
          CSS3
        </ListItem>
        <ListItem>
          <ListIcon as={FaJsSquare} />
          JavaScript
        </ListItem>
        <ListItem>
          <ListIcon as={SiTypescript} />
          TypeScript
        </ListItem>
        <ListItem>
          <ListIcon as={FaReact} />
          ReactJS
        </ListItem>
        <ListItem>
          <ListIcon as={TbBrandNextjs} />
          NextJS
        </ListItem>
        <ListItem>
          <ListIcon as={SiRedux} />
          Redux
        </ListItem>
        <ListItem>
          <ListIcon as={SiStyledcomponents} />
          Styled components
        </ListItem>
        <ListItem>
          <ListIcon as={SiChakraui} />
          ChakraUI
        </ListItem>
        <ListItem>
          <ListIcon as={SiThreedotjs} />
          Three.js
        </ListItem>
        <ListItem>
          <ListIcon as={SiThreedotjs} />
          <ListIcon as={FaReact} />
          React Three Fiber
        </ListItem>
        <ListItem>
          <ListIcon as={FaFigma} />
          Figma
        </ListItem>
        <ListItem>
          <ListIcon as={GiSBrick} />
          BEM
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCloudSync} />
          REST API
        </ListItem>
        <ListItem>
          <ListIcon as={SiPostman} />
          Postman
        </ListItem>
        <ListItem>
          <ListIcon as={VscJson} />
          JSON
        </ListItem>
        <ListItem>
          <ListIcon as={FaNodeJs} />
          Node.js
        </ListItem>
        <ListItem>
          <ListIcon as={SiExpress} />
          Express
        </ListItem>
        <ListItem>
          <ListIcon as={SiPostgresql} />
          PostgreSQL
        </ListItem>
        <ListItem>
          <ListIcon as={SiMongodb} />
          MongoDB
        </ListItem>
        <ListItem>
          <ListIcon as={SiMocha} />
          Mocha
        </ListItem>
        <ListItem>
          <ListIcon as={FaBootstrap} />
          Bootstrap
        </ListItem>
        <ListItem>
          <ListIcon as={FaWordpress} />
          Wordpress
        </ListItem>
        <ListItem>
          <ListIcon as={FaPhp} />
          PHP
        </ListItem>
        <ListItem>
          <ListIcon as={SiMysql} />
          MySQL
        </ListItem>
        <ListItem>
          <ListIcon as={FaLinux} />
          Linux
        </ListItem>
        <ListItem>
          <ListIcon as={FaGitAlt} />
          Git
        </ListItem>
        <ListItem>
          <ListIcon as={FaGithub} />
          GitHub
        </ListItem>

        <ListItem>
          <ListIcon as={SiCplusplus} />
          C++
        </ListItem>
        <ListItem>
          <ListIcon as={SiCsharp} />
          C#
        </ListItem>
        <ListItem>
          <ListIcon as={SiDotnet} />
          ASP .NET CORE MVC
        </ListItem>
        <ListItem>
          <ListIcon as={FaPython} />
          Python
        </ListItem>
        <ListItem>
          <ListIcon as={FaRegObjectGroup} />
          OOP
        </ListItem>
      </List>
    </Box>
  )
}

export default SkillList
