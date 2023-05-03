import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = (
  {data : {
    allStrapiBlogLearn : {nodes : blogs},
  }
}) => {
  return <Layout>
    <SEO 
      title="Blogs"
      description="This page lists down all the blogs and essays written by Ronit Chattopadhyay"
    />
    <section className="blog-page">
      <Blogs blogs={blogs} title="blog" />
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiBlogLearn {
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

export default Blog
