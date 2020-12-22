import { Form, Input, Button} from 'antd';
import './style.css';


function StudentLogin() {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
    return (
      <div className='loginForm'>
          <Form
              {...layout}
              name="basic"
          >
            <Form.Item
              label='E-mail'
              name='email'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input size='middle' />
            </Form.Item>
            <Form.Item
              label='Password'
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size='middle' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' shape='round'>
                  Login
              </Button>
            </Form.Item>
          </Form>
          
      </div>
    );
  }
  
  export default StudentLogin;
  