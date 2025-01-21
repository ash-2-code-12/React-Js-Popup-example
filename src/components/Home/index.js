import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-section">
      <img
        className="home-small"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
      />
      <img
        className="home-large"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      />
    </div>
  </div>
)

export default Home
