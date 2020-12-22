import { Form, Button, Radio, Divider} from 'antd';

import './style.css';

function NewTest() {
    return (
      <div className="test">
        <Form>
          <Form.Item
          label='How to do that svlvhsjlsh'
          >
            <Radio.Group>
              <Radio value={1}>optopn A</Radio>
              <Radio value={2}>option B</Radio>
              <Radio value={3}>optionC</Radio>
              <Radio value={4}>optionD</Radio>
            </Radio.Group>
          </Form.Item>
          <Divider />
          <Form.Item
          label='How to do that svlvhsjlsh'
          >
            <Radio.Group>
              <Radio value={1}>optopn A</Radio>
              <Radio value={2}>option B</Radio>
              <Radio value={3}>optionC</Radio>
              <Radio value={4}>optionD</Radio>
            </Radio.Group>
          </Form.Item>
          <Divider />
          <Form.Item
          label='How to do that svlvhsjlsh'
          >
            <Radio.Group>
              <Radio value={1}>optopn A</Radio>
              <Radio value={2}>option B</Radio>
              <Radio value={3}>optionC</Radio>
              <Radio value={4}>optionD</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
              <Button type='primary' shape='round'>
                  submit
              </Button>
            </Form.Item>
        </Form>
      </div>
    );
  }
  
  export default NewTest;
  