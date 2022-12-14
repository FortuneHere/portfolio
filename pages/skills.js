import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import SkillSkeleton from '../components/skeleton'
import dynamic from 'next/dynamic'

const DynamicSkillList = dynamic(() => import('../components/skill-stack'), {
  loading: () => <SkillSkeleton />
})

const Skills = () => {
  return (
    <Layout title="Skills">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          I have experince with:{' '}
        </Heading>
        <Section delay={0.3}>
          <DynamicSkillList />
        </Section>
      </Container>
    </Layout>
  )
}

export default Skills
