import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';

const CustomTable = () => {
  const users = useSelector(state => state.users.dataSource);

  const columns = [
    {
      title: 'UserId',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName'
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName'
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },

    {
      title: 'Hobby',
      key: 'hobby',
      dataIndex: 'hobby'
    }
  ];

  return <Table columns={columns} dataSource={users} rowKey='id' />;
};

export default CustomTable;
