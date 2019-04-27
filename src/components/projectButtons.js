import React from "react"

const mainColor = `#8c8aff`

const ProjectButtons = () => (
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
)

export default ProjectButtons
