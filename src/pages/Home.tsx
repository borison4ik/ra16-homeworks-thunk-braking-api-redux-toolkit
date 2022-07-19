import React from 'react';
import { Col, Row } from 'antd';
import { Navigate } from 'react-router-dom';
import { pathRoutes } from '../Routes';

export const Home: React.FC = () => {
  return (
    <Row className='page-content'>
      <Col span={24}>Home</Col>
      <Navigate replace to={pathRoutes.ROUTE_SERVICES} />
    </Row>
  );
};
