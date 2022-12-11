import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

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
            <WorkGridItem
              id="todoTsx"
              title="Todo.tsx"
              thumbnail={thumbTodoTsx}
            >
              Simple todo list with drag and drop
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="catsApp"
              title="Cats app"
              thumbnail={thumbCatsApp}
            >
              Watch cats pictures and save them to your favourites
            </WorkGridItem>
          </Section>

          <Section delay={0.5}>
            <WorkGridItem
              id="responsiveWebSite"
              title="Landing web site"
              thumbnail={thumbReactResponsive}
            >
              Responsive web site made with React
            </WorkGridItem>
          </Section>

          <Section delay={0.7}>
            <WorkGridItem id="food" title="Food website" thumbnail={thumbFood}>
              Website made on pure javascript. Contains callory calculator,
              modal window, carousell
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
