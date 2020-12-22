import { Breadcrumb, List, Radio} from 'antd';

import './style.css';

function TestQuestions(props) {
  const data = [
    {
      question: 'How to do that svlvhsjlsh',
      choice1: 'optopn A',
      choice2: 'optopn B',
      choice3: 'optopn C',
      choice4: 'optopn D',
      answer: 'optopn B'
    },
    {
      question: 'How to do that svlvhsjlsh',
      choice1: 'optopn A',
      choice2: 'optopn B',
      choice3: 'optopn C',
      choice4: 'optopn D',
      answer: 'optopn A'
    },
    {
      question: 'How to do that svlvhsjlsh',
      choice1: 'optopn A',
      choice2: 'optopn B',
      choice3: 'optopn C',
      choice4: 'optopn D',
      answer: 'optopn B'
    },
    {
      question: 'How to do that svlvhsjlsh',
      choice1: 'optopn A',
      choice2: 'optopn B',
      choice3: 'optopn C',
      choice4: 'optopn D',
      answer: 'optopn C'
    }
  ]
    return (
      <div className="qustions">
        <Breadcrumb style={{ margin: '16px 0', textAlign:'left' }}>
          <Breadcrumb.Item>Tests</Breadcrumb.Item>
          <Breadcrumb.Item>{props.testID}</Breadcrumb.Item>
        </Breadcrumb>
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[<a key="list-loadmore-edit">Delete</a>]}
            >
              <List.Item.Meta
                title={item.question}
                description={
                  <Radio.Group value={item.answer} disabled>
                    <Radio value={item.choice1}>{item.choice1}</Radio>
                    <Radio value={item.choice2}>{item.choice2}</Radio>
                    <Radio value={item.choice3}>{item.choice3}</Radio>
                    <Radio value={item.choice4}>{item.choice4}</Radio>
                  </Radio.Group>
                }
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
  
  export default TestQuestions;
  