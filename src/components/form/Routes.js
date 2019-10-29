import React, { useState } from 'react';
import CustomTable from './Table';
import MyForm from './Myform';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { ADD_DATA } from '../../actions/types';

const Routes = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const handleChange = values => {
    dispatch({
      type: ADD_DATA,
      payload: {
        key: count,
        firstName: values.firstname,
        lastName: values.lastname,
        birthday: moment(values.birthday).format('l'),
        age: values.age,
        hobby: values.hobby
      }
    });
    setCount(count + 1);
  };

  return (
    <div>
      <MyForm handleChange={handleChange} />
      <CustomTable />
    </div>
  );
};

export default Routes;
