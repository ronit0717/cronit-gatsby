import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        desc {
          id
          name
        }
        position
        strapiId
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
   const { 
    allStrapiJob : {nodes: jobs}, 
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value];
  
  return ( <section className="section jobs">
    <Title title = "experience" />
    <div className="jobs-center">
      {/* Button Container */}
      <div className="btn-container">
        {jobs.map((job, index) => {
          return <button 
                    key={ job.strapiId } 
                    onClick={() => setValue(index)}
                    className={`job-btn ${index === value && "active-btn"}`}>{job.company.length > 10 ? job.company.substring(0,6) : job.company}</button>
        })}
      </div>
      {/* Job Info */}
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map((item) => {
            return (<div key={item.id} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{item.name}</p>
                  </div>
            )
          })
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn">More Info</Link>
  </section>)
}

export default Jobs
