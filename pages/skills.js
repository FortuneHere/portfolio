import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import SpaceLoader from '../components/space-loader'

import dynamic from 'next/dynamic'

const DynamicSkillList = dynamic(() => import('../components/skill-stack'), {
  loading: () => <SpaceLoader />
})

const Skills = () => {
  return (
    <Layout title="Skills">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          I have an experince with:{' '}
        </Heading>
        <Section>
          <DynamicSkillList />
        </Section>
      </Container>
    </Layout>
  )
}

export default Skills
