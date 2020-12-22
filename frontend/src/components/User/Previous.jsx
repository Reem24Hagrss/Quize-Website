import { Table } from 'antd';
import './style.css';

function Previous() {
  const dataSource = [
    {
      key: '1',
      num: '1',
      test: 'test 1',
      degree: '25/25',
    },
    {
      key: '2',
      num: '2',
      test: 'test 2',
      degree: '24/25',
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
    },
    {
      title: 'Degree',
      dataIndex: 'degree',
      key: 'degree',
    },
  ];
    return (
      <div className="pervious">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
  
  export default Previous;
  