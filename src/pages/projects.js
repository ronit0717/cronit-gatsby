import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data: {allStrapiProject : {nodes:projects}}
}) => {
  return <Layout>
    <section className="projects-page">
      <Projects projects={projects} title="all projects" />
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        description
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        stack {
          title
          id
        }
      }
    }
  }
`

export default ProjectsPage
