import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  	<header
		style={{
			background: `#26517C`,
			margin: `0 auto`,
			padding: `var(--space-4) var(--size-gutter)`,
			display: `flex`,
			alignItems: `center`,
			justifyContent: `space-between`,
		}}
	>
		<Link
			to="/"
			style={{
				color: `#FFFFFF`,
				fontSize: `var(--font-sm)`,
				textDecoration: `none`,
			}}
		>
			{siteTitle}
		</Link>
  	</header>
)

export default Header
