import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default ({ data }) => {
  const {
    allStrapiProject: { nodes: projects},
  } = data

  return <Layout>
    <Hero />
    <Services />
    <Jobs />
    <Projects 
      projects={projects} 
      title="featured projects" 
      showLink
    />
  </Layout>
}

export const query = graphql`
  {
    allStrapiProject(filter: {featured: {eq: true}}) {
      nodes {
        description
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
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
