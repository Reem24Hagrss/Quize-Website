import { Button, Table } from 'antd';
import './style.css';

function Users() {
  const deleteQuestion = (name) =>{
    console.log(name);
  }
  const dataSource = [
    {
      num: '1',
      name: 'Sam',
      email: 'Sam1@gmail.com',
    },
    {
      num: '2',
      name: 'Sam',
      email: 'Sam1@gmail.com',
    },
    {
      num: '3',
      name: 'Sam',
      email: 'Sam1@gmail.com',
    },
  ];
  
  const columns = [
    {
      title: 'Num',
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a onClick={deleteQuestion('name')}>Delete</a>,
    },
  ];
    return (
      <div className="users">
        <Table dataSource={dataSource} columns={columns} />
        <Button type='primary' shape='round' className='addNew'> 
          Add New question 
        </Button>
      </div>
    );
  }
  
  export default Users;
  