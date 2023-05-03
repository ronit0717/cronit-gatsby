import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const {site} = useStaticQuery(query);
  const {
    siteDesc, 
    siteTitle, 
    siteUrl, 
    image,
    twitterUsername
  } = site.siteMetadata
  return <Helmet 
            htmlAttributes={{ lang: "en" }}
            title={`${title} | ${siteTitle}`}
          >  
            <meta name="description" content={ `${siteDesc}. ${description}` } />
            <meta name="image" content={image} />
          </Helmet>
}

export default SEO
