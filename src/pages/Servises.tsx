import React from 'react';
import { Col, Row } from 'antd';

import { ServicesList } from '../components/ServicesList';

export const Servises: React.FC = () => {
  return (
    <Row className='page-content'>
      <Col span={24}>
        <ServicesList />
      </Col>
    </Row>
  );
};
