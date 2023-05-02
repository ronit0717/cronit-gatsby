import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form 
          action="https://formspree.io/f/mayzvjnw"
          method="POST"
        >
          <div className="form-group">
            <input 
              type="text" 
              placeholder="name" 
              className="form-control" 
              name="name"
            />
            <input 
              type="email" 
              placeholder="email" 
              className="form-control" 
              name="email"
            />
            <textarea 
              name="message" 
              id="" 
              rows="5" 
              placeholder="message"
              className="form-control"
            />
            <button type="submit" className="submit-btn btn">Submit here</button>
          </div>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
