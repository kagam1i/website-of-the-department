import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const test = () => (
    <Layout>
        <h1>Welcome to testing page!!!</h1>
        <p>Здесь должен быть Lorem25, но эта команда по какой-то неведомой для меня причине отказывается работать. Так что сегодня я буду вашим генератором текста, надеюсь сработаемся</p>
        <p>Данная страница не будет использоваться в дальнейшей работе с проектом. Её суть - показать вам как работают некоторые компоненты Gatsby и React. Здесь вы можете делать всё, что пожелаете, в разумных пределах разумеется. Создатель хоть и делал эту страницу для экспериментов, но всё же желал чтобы она дожила до финальной версии сайта.</p>
        <Link to="/">Do you wanna go back? Okey, you can</Link>
    </Layout>
);

export const Head = () => <Seo title="testing-page" />
export default test;