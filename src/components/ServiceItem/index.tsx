import { Button, List, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IServiceItem } from '../../@types/services';
import { pathRoutes } from '../../Routes';

const { Text } = Typography;

export const ServiceItem: React.FC<IServiceItem> = ({ id, name, price }) => {
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);

  let navigate = useNavigate();

  const editHandler = (id: number) => {
    console.log(id);
    navigate(`${pathRoutes.ROUTE_SERVICES}/${id}`);
  };

  const deleteHandler = async (id: number) => {
    setDeleting(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVICES_API}/${id}`,
        { method: 'DELETE' },
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      setDeleted(true);
    } catch (err: any) {
      console.log(err.message);
      setDeleting(false);
    }
  };

  if (deleted) {
    return null;
  }

  return (
    <List.Item
      className='servises-item'
      actions={[
        <Button
          size='small'
          key='list-edit'
          onClick={() => {
            editHandler(id);
          }}>
          Edit
        </Button>,
        <Button
          type='primary'
          key='list-more'
          size='small'
          loading={deleting}
          onClick={() => deleteHandler(id)}>
          {deleting ? 'Deleting' : 'Delete'}
        </Button>,
      ]}>
      <Text className='servises-text'>
        {name} / {price}
      </Text>
    </List.Item>
  );
};
