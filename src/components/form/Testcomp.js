import React from 'react';
import { useDispatch } from 'react-redux';
const Testcomp = () => {
  const dispatch = useDispatch();
  const youClickedme = () => {
    dispatch({ type: 'AGE_DOWN', payload: 23 });
  };
  return (
    <div>
      <button onClick={youClickedme}>Click Me</button>
    </div>
  );
};

export default Testcomp;
