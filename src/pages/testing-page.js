import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const test = () => (
    <Layout>
        <h1>Welcome to testing page!!!</h1>
        <h2
            style = {{
                fontSize: `12px`,
            }}        
        >Данная страница не будет использоваться в дальнейшей работе с проектом. Её суть - показать вам как работают некоторые компоненты Gatsby и React. Здесь вы можете делать всё, что пожелаете, в разумных пределах разумеется. Создатель хоть и делал эту страницу для экспериментов, но всё же желал чтобы она дожила до финальной версии сайта.</h2>

        <button onClick={() => {
            alert("Ого, ты работаешь")
        }}>Нажмите</button>

        <Link to="/">Do you wanna go back? Okey, you can</Link>
    </Layout>
);

export const Head = () => <Seo title="testing-page" />
export default test;