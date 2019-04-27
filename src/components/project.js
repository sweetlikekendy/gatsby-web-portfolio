import React from "react"

const mainColor = `#8c8aff`
const headerColor = `#343b4d`
const accentColor = `#596482`

const Project = props => (
  <div
    style={{
      boxShadow: `0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)`,
      borderRadius: `1rem`,
      display: `grid`,
      gridTemplateColumns: `1fr 1fr`,
      gridGap: `1rem`,
      marginTop: `2.75rem`,
    }}
  >
    <div
      className="backgroundImage"
      style={{
        height: `100%`,
        width: `500px`,
        borderRadius: `1rem 0 0 1rem`,
        background: `url(${props.image})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    />
    <div className="project-description" style={{ padding: `1.5rem` }}>
      <h3 style={{ color: `${headerColor}` }}>{props.projectTitle}</h3>
      <p style={{ color: `${accentColor}` }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        necessitatibus vitae dolor fugiat. Iste tempora adipisci eligendi in
        aperiam, reprehenderit tenetur iusto. Placeat quis inventore tempore
        totam iusto quidem dolorum. Quod sunt molestiae inventore.
      </p>
      <div className="skills" style={{ color: `${accentColor}` }}>
        <ul style={{ listStyle: `none`, margin: `0` }}>
          {props.projectSkills.map(projectSkill => (
            <li
              style={{
                display: `inline-block`,
                marginRight: `2rem`,
                border: `1px #ff824c solid`,
                color: `#ff824c`,
                borderRadius: `3px`,
                lineHeight: `1.6rem`,
                letterSpacing: `0.1rem`,
                padding: `0.25rem 0.5rem`,
              }}
            >
              {projectSkill}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="buttons"
        style={{
          display: `flex`,
          justifyContent: `space-around`,
          marginTop: `0.75rem`,
        }}
      >
        <button
          type="submit"
          style={{
            height: `2.75rem`,
            padding: `0 1rem`,
            borderRadius: `.35rem`,
            color: `#fff`,
            backgroundColor: `${mainColor}`,
            fontWeight: 600,
            textTransform: `uppercase`,
            lineHeight: `2rem`,
            letterSpacing: `.04rem`,
            boxShadow: `0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)`,
            cursor: `pointer`,
          }}
        >
          Source Code
        </button>
        <button
          type="submit"
          style={{
            backgroundColor: `transparent`,
            height: `2.75rem`,
            padding: `0 1rem`,
            borderRadius: `.35rem`,
            color: `${mainColor}`,
            fontWeight: 600,
            textTransform: `uppercase`,
            lineHeight: `2rem`,
            letterSpacing: `.04rem`,
            boxShadow: `0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)`,
            cursor: `pointer`,
          }}
        >
          Live Demo
        </button>
      </div>
    </div>
  </div>
)

export default Project
