import { Button, Table } from 'antd';
import { useState } from 'react';
import './style.css';
import TestQuestions from './TestQuestions';

function Tests() {
  const [view, setView] = useState({ table:true,display:false , testID: 0})
  const deleteQuestion = (name) =>{
    console.log(name);
  }
  // const openTest = (key) =>{
  //   setView({
  //     table: false,
  //     display: true,
  //     testID: key
  //   })
  // }
  const dataSource = [
    {
      num: '1',
      test: 'test 1',
      students: '25',
    },
    {
      num: '2',
      test: 'test 2',
      students: '10',
    },
  ];
  
  const columns = [
    {
      title: 'Num',
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: 'Test',
      dataIndex: 'test',
      key: 'test',
      // render: (record) => <a onClickCapture={openTest(record)}>test</a>,
    },
    {
      title: 'Students',
      dataIndex: 'students',
      key: 'students',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'operation',
      render: (record) => <a onClick={deleteQuestion(record.test)}>Delete</a>,
    },
  ];
    return (
      <div className="tests">

        { view.table && <Table dataSource={dataSource} columns={columns} /> }
            <Button type='primary' shape='round' className='addNew'> Add New question </Button>
        { view.display && <TestQuestions testID={view.testID} />}

      </div>
    );
  }
  
  export default Tests;
  