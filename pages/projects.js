import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbTodoTsx from '../public/images/todo-app.png'
import thumbCatsApp from '../public/images/cats-app.png'
import thumbReactResponsive from '../public/images/responsive-website.png'
import thumbFood from '../public/images/food.png'
import Layout from '../components/layouts/article'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <GridItem
              href="https://fortunehere.github.io/TodoApp-dnd-tsx/"
              title="Todo.tsx"
              thumbnail={thumbTodoTsx}
            >
              Simple todo list with drag and drop
            </GridItem>
          </Section>

          <Section delay={0.3}>
            <GridItem
              href="https://fortunehere.github.io/cats-app/"
              title="Cats app"
              thumbnail={thumbCatsApp}
            >
              Watch cats pictures and save them to your favourites
            </GridItem>
          </Section>

          <Section delay={0.5}>
            <GridItem
              href="https://fortunehere.github.io/responsive-website-react/"
              title="Landing web site"
              thumbnail={thumbReactResponsive}
            >
              Responsive web site made with React
            </GridItem>
          </Section>

          <Section delay={0.7}>
            <GridItem
              href="https://github.com/FortuneHere/Food"
              title="Food website"
              thumbnail={thumbFood}
            >
              Website made on pure javascript. Contains callory calculator,
              modal window, carousell
            </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
