import React from "react"
import Project from "../components/project"

import Layout from "../components/layout"
import SEO from "../components/seo"

import projects from "../content/projects"

const smallTextAreaStyle = {
  height: `2.75rem`,
  background: `#f7f7f7`,
  borderRadius: `.35em`,
  border: `2px solid transparent`,
  color: `inherit`,
  outline: 0,
  padding: `0 .75em`,
  textDecoration: `none`,
  width: `100%`,
}

const bigTextAreaStyle = {
  gridColumn: `1 / 3`,
  background: `#f7f7f7`,
  borderRadius: `.35rem`,
  border: `2px solid transparent`,
  color: `inherit`,
  outline: 0,
  padding: `0 .75rem`,
  textDecoration: `none`,
  width: `100%`,
}

const buttonStyle = {
  backgroundColor: `transparent`,
  height: `2.75rem`,
  padding: `0 1rem`,
  borderRadius: `.35rem`,
  color: `#fff`,
  background: `#3ecf8e`,
  fontWeight: 600,
  textTransform: `uppercase`,
  lineHeight: `2rem`,
  letterSpacing: `.04rem`,
  boxShadow: `0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)`,
  cursor: `pointer`,
}
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section id="one" style={{ marginTop: `1.5rem`, marginBottom: `4rem` }}>
      <h2>Projects</h2>
      {console.log(projects)}
      {projects.map(project => (
        <Project
          title={project.title}
          image={project.image}
          description={project.description}
          skills={project.skills}
        />
      ))}
    </section>
    <hr />
    <section id="two" style={{ marginTop: `4rem`, marginBottom: `3rem` }}>
      <h2>Connect With Me!</h2>
      <p>
        If you liked to get in touch with me, don't hesitate to leave me a
        message!
      </p>
      <div
        className="contact"
        style={{
          display: `grid`,
          gridTemplateColumns: `2fr 1fr`,
          gridGap: `1rem`,
        }}
      >
        <div className="message-form">
          <form
            method="post"
            action="#"
            style={{
              display: `grid`,
              gridTemplateColumns: `1fr 1fr`,
              gridGap: `0.7rem`,
            }}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              style={smallTextAreaStyle}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              style={smallTextAreaStyle}
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="4"
              style={bigTextAreaStyle}
            />
          </form>
          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
