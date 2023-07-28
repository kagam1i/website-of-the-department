import * as React from "react"
import { Link } from "gatsby"
import "./header.css"
import imgIcon from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <img src={imgIcon} alt = "icon" className=""/>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>

    <div class = "search">
      <div class = "icon">
        <div class = "search-position">
          <input class = "input" type="text" placeholder="Поиск"/>
        </div>
      </div>
    </div>

    <button class="header-top-button">рус</button>
    
      
  </header>
)

export default Header

