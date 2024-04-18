"use client"

import React, { PropsWithChildren} from 'react';
import { Layout} from 'antd';
import { useStyles } from './style';
import Navbar from '../../../components/NavBar/page';


const { Header,Footer, Content } = Layout;

const ClientLayout: React.FC<PropsWithChildren> = ({children}) => {

  const {styles}=useStyles();

  return (
        <Layout className={styles.layoutStyle}>
            <Header className={styles.headerStyle}>   
            <Navbar/> 
            </Header>
            <Layout>
                <Content className={styles.contentStyle}>
                {children}
                </Content>
            </Layout>
            <Footer className={styles.footerStyle}>
                Footer
            </Footer>
        </Layout>
  );
};

export default ClientLayout;