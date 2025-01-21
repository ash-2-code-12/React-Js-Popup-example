import Header from '../Header'

import './index.css'

const About = () => (
  <div>
    <Header />
    <div className="about-section">
      <img
        className="about-small"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      />
      <img
        className="about-large"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      />
    </div>
  </div>
)

export default About
