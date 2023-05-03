import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {allStrapiProject : {nodes:projects}}
}) => {
  return <Layout>
    <SEO 
      title="Projects" 
      description="This page lists down some of the significant projects Ronit Chattopadhyay has worked on"
    />
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
