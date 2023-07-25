import * as React from 'react';
import Layout from './layout';

export const Header = ({siteTitle}) => {
    return  <Layout>
                {siteTitle}

                

                <button onClick={() => {
                     alert("Ого, ты работаешь")
                }}>Нажмите</button>
            </Layout>
}

export default Header;
