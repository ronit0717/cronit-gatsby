import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = (
  {data : {
    allStrapiBlogLearn : {nodes : blogs},
  }
}) => {
  return <Layout>
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
