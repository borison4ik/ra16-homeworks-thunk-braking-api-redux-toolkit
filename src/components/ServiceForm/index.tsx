import { Alert, Button, Form, Input, Space, Spin } from 'antd';
import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { EditServiseItem } from '../../@types/formService';
import { pathRoutes } from '../../Routes';
import { editService, getService } from '../../store/async-actions/formService';

import { editServiceUncomplete } from '../../store/reducers/formServicesSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

export const ServiceForm: React.FC = () => {
  const { service, loading, sending, errorEdit, completed } = useAppSelector(
    (state) => state.formServiceReducer,
  );
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (params && params.id) {
      dispatch(getService(Number.parseInt(params.id)));
    }
  }, [params, dispatch]);

  useEffect(() => {
    form.setFieldsValue({
      name: service.name,
      price: service.price,
      content: service.content,
    });
  }, [service, form]);

  useEffect(() => {
    if (completed) {
      navigate(pathRoutes.ROUTE_SERVICES);
      dispatch(editServiceUncomplete());
    }
  }, [completed, navigate, dispatch]);

  const onFinish = (values: any) => {
    if (params && params.id) {
      const serviceObject: EditServiseItem = {
        id: Number.parseInt(params.id),
        name: values.name,
        price: Number.parseInt(values.price),
        content: values.content,
      };

      dispatch(editService(serviceObject));
    }
  };

  const closeAlertHandler = () => {
    if (params && params.id) {
      dispatch(getService(Number.parseInt(params.id)));
    }
  };

  const cancelHandler = () => {
    navigate(-1);
  };

  if (loading) {
    return <Spin />;
  }

  if (errorEdit) {
    return (
      <Alert
        message='Error, something was going wrong'
        description={errorEdit}
        type='error'
        closable
        showIcon
        onClose={closeAlertHandler}
      />
    );
  }

  return (
    <Form
      form={form}
      disabled={sending}
      layout='vertical'
      name='service'
      initialValues={{ name: 'name', price: 'price', content: 'content' }}
      onFinish={onFinish}
      autoComplete='off'>
      <Form.Item
        label='Service name'
        name='name'
        rules={[{ required: true, message: 'Please input Service name!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Price'
        name='price'
        rules={[{ required: true, message: 'Please input Price!' }]}>
        <Input type='number' />
      </Form.Item>

      <Form.Item
        label='Content'
        name='content'
        rules={[{ required: true, message: 'Please input Content!' }]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button onClick={cancelHandler}>Cancel</Button>
          <Button type='primary' htmlType='submit' loading={sending}>
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
