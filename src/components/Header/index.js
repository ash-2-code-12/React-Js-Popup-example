import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const triggerButton = () => (
  <button
    aria-label="menu-trigger"
    className="menu-trigger-btn"
    type="button"
    data-testid="hamburgerIconButton"
  >
    <GiHamburgerMenu size="30" />
  </button>
)

const popupContent = close => (
  <div className="popup-container">
    <button
      data-testid="closeButton"
      type="button"
      className="menu-close-btn"
      onClick={() => close()}
    >
      <IoMdClose size="30" color="#616e7c" />
    </button>

    <ul className="nav-links-list">
      <li>
        <Link className="nav-link link-component" to="/">
          <AiFillHome size="36" />
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link className="nav-link link-component" to="/about">
          <BsInfoCircleFill size="36" />
          <p>About</p>
        </Link>
      </li>
    </ul>
  </div>
)

const Header = () => (
  <div className="header">
    <Link className="link-component" to="/">
      <img
        className="website-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      />
    </Link>
    <Popup modal trigger={triggerButton()}>
      {close => popupContent(close)}
    </Popup>
  </div>
)

export default Header
