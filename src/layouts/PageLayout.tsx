import React from 'react';
import { Layout, Typography } from 'antd';

import { DATA } from '../data';
import { Outlet } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export const PageLayout = () => {
  return (
    <Layout>
      <Header className='app-header'>
        <Title level={4}>
          <Text type='secondary'>{DATA.task.title}</Text>
        </Title>
      </Header>
      <Content className='app-content'>
        <Outlet />
      </Content>
    </Layout>
  );
};
