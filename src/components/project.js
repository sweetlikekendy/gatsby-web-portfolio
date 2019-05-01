import React from "react"
import ProjectButtons from "./projectButtons"
import styles from "./project.module.css"

const headerColor = `#343b4d`
const accentColor = `#596482`

const Project = props => (
  <div className={styles.project}>
    <div
      className={styles.backgroundImage}
      style={{
        background: `url(${props.image})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    />
    <div className={styles.projectDescription}>
      <h3 style={{ color: `${headerColor}` }}>{props.title}</h3>
      <p style={{ color: `${accentColor}` }}>{props.description}</p>
      <div style={{ color: `${accentColor}` }}>
        <ul className={styles.skills}>
          {props.skills.map(skill => (
            <li className={styles.skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <ProjectButtons
        source={props.links.sourceCode}
        demo={props.links.liveDemo}
      />
    </div>
  </div>
)

export default Project
