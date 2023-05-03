import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return <Layout>
    <SEO 
      title="Contact Me"
      description="This is a contact me page for Ronit Chattopadhyay. Users can submit the form and send a message to Ronit Chattopadhyay"
    />
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
