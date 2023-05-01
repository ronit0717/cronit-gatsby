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
    allStrapiProject : { nodes: projects},
    allStrapiBlogLearn : { nodes: blogs} 
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
    <Blogs 
      blogs={blogs}
      title={"latest blogs"}
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
    allStrapiBlogLearn(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        date(formatString: "Do MMMM, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
