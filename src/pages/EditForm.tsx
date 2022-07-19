import React from 'react';
import { Col, Row } from 'antd';

import { ServiceForm } from '../components/ServiceForm';

export const EditForm: React.FC = () => {
  return (
    <Row className='page-content'>
      <Col span={24}>
        <ServiceForm />
      </Col>
    </Row>
  );
};
