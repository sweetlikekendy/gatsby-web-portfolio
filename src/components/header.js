import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Avatar from "../images/prof-avatar.png"
import BackgroundImage from "../images/nasa-53884-unsplash.jpg"
import Footer from "./footer"
import GitHubIcon from "./githubIcon"
import LinkedInIcon from "./linkedInIcon"
import MailIcon from "./mailIcon"
import ResumeIcon from "./resumeIcon"
import styles from "./header.module.css"

const textColor = `#f2f0ee`
const headerTextColor = `rgb(255,255,255)`

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
    style={{
      backgroundImage: `url(${BackgroundImage}) `,
    }}
  >
    <div className="header-container" style={{ height: `100%` }}>
      <div className="info">
        <h1 style={{ margin: 0, textAlign: `center` }}>
          <Link
            to="/"
            style={{
              margin: `0 auto`,
              color: `${headerTextColor}`,
              textDecoration: `none`,
            }}
          >
            Hi, I'm Kendy!
          </Link>
        </h1>
        <img className={styles.avatar} src={Avatar} alt="avatar" />
        <p style={{ marginTop: `1rem` }}>
          I am an aspiring web developer located in San Diego, CA. I graduated
          with my degree in Computer Engineering from Cal Poly Pomona. My skills
          include HTML, CSS, JS, React, and Gatsby.
        </p>
      </div>
      <div
        className="social-links"
        style={{
          display: `flex`,
          justifyContent: `space-around`,
          marginTop: `5.5rem`,
        }}
      >
        <a href="https://github.com/sweetlikekendy">
          <GitHubIcon color={textColor} />
        </a>
        <a href="https://www.linkedin.com/in/kendy-nguyen-a51796a0/">
          <LinkedInIcon color={textColor} />
        </a>
        <a href="mailto:kendyhnguyen1991@gmail.com">
          <MailIcon color={textColor} />
        </a>
        <a href="/">
          <ResumeIcon color={textColor} />
        </a>
      </div>
    </div>
    <Footer />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
