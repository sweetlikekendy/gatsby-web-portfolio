import React from "react"
import styles from "./projectButtons.module.css"

// TODO Change href to dynamic props later when reading in hyperlinks to code and demo
const ProjectButtons = props => (
  <div className={styles.buttons}>
    <a className={styles.source_button} href="/">
      Source Code
    </a>
    <a className={styles.live_button} href="/">
      Live Demo
    </a>
  </div>
)

export default ProjectButtons
