import React, { Fragment } from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
const { TextArea } = Input;

class NormalLoginForm extends React.Component {
  render() {
    const handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.handleChange(values);
          this.props.form.setFieldsValue({
            firstname: '',
            lastname: '',
            birthday: null,
            age: '',
            hobby: ''
          });
        }
      });
    };

    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Form onSubmit={handleSubmit} className='login-form'>
          <Form.Item>
            {getFieldDecorator('firstname', {
              rules: [
                { required: false, message: 'Please input your First Name!' }
              ]
            })(<Input placeholder='First Name' />)}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('lastname', {
              rules: [
                { required: false, message: 'Please input your Last Name!' }
              ]
            })(<Input type='text' placeholder='Last Name' />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('birthday', {
              rules: [
                { required: false, message: 'Please select your Birthday!' }
              ]
            })(<DatePicker />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('age', {
              rules: [{ required: false, message: 'Please input your Age!' }]
            })(<Input type='number' placeholder='Age' />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('hobby', {
              rules: [
                { required: false, message: 'Please input your hobbies!' }
              ]
            })(<TextArea placeholder='Hobby' />)}
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Fragment>
    );
  }
}

const Myform = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Myform;
