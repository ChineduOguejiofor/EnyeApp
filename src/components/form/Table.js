import React from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';

const CustomTable = props => {
  const columns = [
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

  return <Table columns={columns} dataSource={props.users} />;
};
const mapStateToProps = state => ({
  users: state.users.dataSource
});
export default connect(
  mapStateToProps,
  {}
)(CustomTable);
