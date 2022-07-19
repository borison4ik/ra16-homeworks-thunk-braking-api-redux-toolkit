import React, { useEffect } from 'react';
import { Alert, Empty, List, Spin } from 'antd';

import { ServiceItem } from '../ServiceItem';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchServices } from '../../store/async-actions/services';

import './index.scss';

export const ServicesList: React.FC = () => {
  const { services, loading, error } = useAppSelector(
    (state) => state.servicesReducer,
  );
  const dispatch = useAppDispatch();

  const closeAlertHandler = () => {
    dispatch(fetchServices());
  };
  console.log('rerender');
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return (
      <Alert
        message='Error, something was going wrong'
        description={error}
        type='error'
        closable
        showIcon
        onClose={closeAlertHandler}
      />
    );
  }

  if (!services.length) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <List className='servises-list' itemLayout='horizontal'>
      {services.map((service) => (
        <ServiceItem key={service.id} {...service} />
      ))}
    </List>
  );
};
