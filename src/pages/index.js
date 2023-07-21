import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby";

    const HeadPart = () => (
        <Layout>
            <h1>Hi from the index page</h1>
            <p>I know we have to go through all this shit, but I'm sure we can handle it.</p>
            <p>На этой странице скорее всего будет находится main страница кафедры, так что...Просто не сломай ничего, окей?</p>
            <Link to="/testing-page"> We have a real testing page! Check it right now! </Link>
        </Layout>
    );

export const Head = () => <Seo title="index"/>

export default HeadPart;
