import React, { useState } from 'react';
import { Form, Icon, Input, Button, Row, Typography } from 'antd';
import $ from 'jquery';
import '../css/form.css';

const LoginForm = props => {
  const { login } = props;
  const [isLoading, setIsLoading] = useState(false);
  const done = () => {
    setIsLoading(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    e.preventDefault();
    setIsLoading(true);
    const formVal = $('.customLoginForm').serializeArray();
    login(formVal[0].value, formVal[1].value, done);
  };

  const { Title } = Typography;
  return (
    <Row type="flex" justify="center" align="middle" className="loginRow">
      <Form onSubmit={handleSubmit} className="login-form customLoginForm">
        <Title level={3}>Đăng nhập Admin</Title>
        <Form.Item>
          <Input
            name="email"
            type="email"
            required
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item>
          <Input
            name="password"
            required
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={isLoading}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default LoginForm;
