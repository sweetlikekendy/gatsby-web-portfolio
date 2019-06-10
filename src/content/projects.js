import WebPortfolioImage from "../images/projects/Portfolio_thumbnail.png"
import LetMeInImage from "../images/projects/LetMeIn_thumbnail.png"

export default [
  {
    title: `My Web Portfolio`,
    image: `${WebPortfolioImage}`,
    description: `The site you're currently visiting! It is a responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.`,
    skills: [`html`, `css`, `javascript`, `react`, `gatsby`],
    links: {
      sourceCode: `https://github.com/sweetlikekendy/gatsby-web-portfolio`,
      liveDemo: `http://www.kendyhnguyen.com`,
    },
  },
  {
    title: `Let Me In Application`,
    image: `${LetMeInImage}`,
    description: `A CRUD application that allows a user to add a home to a database with the corresponding gate/access code. The user will be able to search for the home when they're on route. The search mechanics are case-sensitive.`,
    skills: [
      `html`,
      `css`,
      `javascript`,
      `react`,
      `express`,
      `node`,
      `mongodb`,
    ],
    links: {
      sourceCode: `https://github.com/sweetlikekendy/access-house-react-express-mongo`,
      liveDemo: `https://protected-oasis-33800.herokuapp.com/`,
    },
  },
]
