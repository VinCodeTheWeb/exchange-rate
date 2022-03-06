import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { Header } = AntLayout;
  return (
    <AntLayout data-testid='layout'>
      <Header style={{ marginBottom: '20px' }}>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
          <Menu.Item key={1}>Navigation Item</Menu.Item>
          <Menu.Item key={2}>Navigation Item</Menu.Item>
        </Menu>
      </Header>
      {children}
    </AntLayout>
  );
};

export { Layout };
