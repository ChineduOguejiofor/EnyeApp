import React, { Component } from 'react';
import CustomTable from './Table';
import MyForm from './Myform';
import moment from 'moment';

export default class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      count: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(values) {
    console.log(values);

    this.setState({
      count: this.state.count + 1,
      dataSource: this.state.dataSource.concat([
        {
          key: this.state.count,
          firstName: values.firstname,
          lastName: values.lastname,
          birthday: moment(values.birthday).format('l'),
          age: values.age,
          hobby: values.hobby
        }
      ])
    });
    // console.log(this.state.dataSource);
  }

  render() {
    return (
      <div>
        <MyForm handleChange={this.handleChange} />
        <CustomTable dataSource={this.state.dataSource} />
      </div>
    );
  }
}
