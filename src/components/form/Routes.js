import React, { useState } from 'react';
import CustomTable from './Table';
import MyForm from './Myform';
import moment from 'moment';
import { connect } from 'react-redux';
import { addInfo } from '../../actions/users';
const Routes = ({ addInfo }) => {
  const [count, setCount] = useState(0);
  const handleChange = values => {
    setCount(count + 1);

    addInfo({
      key: count,
      firstName: values.firstname,
      lastName: values.lastname,
      birthday: moment(values.birthday).format('l'),
      age: values.age,
      hobby: values.hobby
    });
  };

  return (
    <div>
      <MyForm handleChange={handleChange} />
      <CustomTable />
    </div>
  );
};

export default connect(
  null,
  { addInfo }
)(Routes);
