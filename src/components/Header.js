import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-gears"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Adrianna Chang</h1>
        <p>
          Senior Software Developer @ Shopify.&nbsp;
          <br />
          Carleton University + {' '}<a href="https://devdegree.ca/" target="_blank" rel="noreferrer">Dev Degree</a> Alum.&nbsp;
          <br />
          Ruby on Rails aficionado.
        </p>
      </div>
    </div>
    <nav>
      <ul>
      <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('posts')
            }}
          >
            Blog Posts &amp; Talks
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
