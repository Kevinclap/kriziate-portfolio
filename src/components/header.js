import React from 'react'
import { Link } from 'gatsby'
import { SocialIcon } from 'react-social-icons'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#333',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <SocialIcon url="https://www.linkedin.com/in/krizia-medero-4ab98914a/"/>
      </h1>
    </div>
  </div>
)

export default Header
