import React from "react"
import Project from "../components/project"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projects from "../content/projects"

import styles from "./index.module.css"

// title="Home" -> HOME | Kendy Nguyen in production
const IndexPage = () => (
  <Layout>
    <SEO keywords={[`gatsby`, `application`, `react`]} />
    <section className={styles.section_one}>
      <h2>Projects</h2>
      {projects
        .slice(0)
        .reverse()
        .map(project => (
          <Project
            title={project.title}
            image={project.image}
            description={project.description}
            skills={project.skills}
            links={project.links}
          />
        ))}
    </section>
  </Layout>
)

export default IndexPage
