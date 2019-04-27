import React from "react"
import ProjectButtons from "./projectButtons"
import styles from "./project.module.css"

const headerColor = `#343b4d`
const accentColor = `#596482`

const Project = props => (
  <div className={styles.project}>
    <div className={styles.backgroundImage} />
    <div className={styles.projectDescription}>
      <h3 style={{ color: `${headerColor}` }}>{props.projectTitle}</h3>
      <p style={{ color: `${accentColor}` }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        necessitatibus vitae dolor fugiat. Iste tempora adipisci eligendi in
        aperiam, reprehenderit tenetur iusto. Placeat quis inventore tempore
        totam iusto quidem dolorum. Quod sunt molestiae inventore.
      </p>
      <div style={{ color: `${accentColor}` }}>
        <ul className={styles.skills}>
          {props.projectSkills.map(projectSkill => (
            <li className={styles}>{projectSkill}</li>
          ))}
        </ul>
      </div>
      <ProjectButtons />
    </div>
  </div>
)

export default Project
