import React from "react"
import Project from "../components/project"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MessageForm from "../components/messageForm"
import projects from "../content/projects"

import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className={styles.section_one}>
      <h2>Projects</h2>
      {projects.map(project => (
        <Project
          title={project.title}
          image={project.image}
          description={project.description}
          skills={project.skills}
          links={project.links}
        />
      ))}
    </section>
    <hr />
    <section className={styles.section_two}>
      <h2>Connect With Me!</h2>
      <p>
        If you liked to get in touch with me, don't hesitate to leave me a
        message!
      </p>
      <MessageForm />
    </section>
  </Layout>
)

export default IndexPage
