import { Form, Input, Button} from 'antd';
import './style.css';


function TeacherLogin() {
    return (
      <div className='loginForm'>
          <Form>
            <Form.Item
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size='large' style={{width: '50%'}} />
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
  
  export default TeacherLogin;
  