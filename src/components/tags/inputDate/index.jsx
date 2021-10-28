import React from 'react';
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';


import "./styles.css";
import "./custom.scss";
require('react-datepicker/dist/react-datepicker.css')

class InputDateComponent extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  render() {

    return (
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={this.state.startDate}
        onChange={this.handleChange}
        className="customStyle"
        locale={es}
        includeDates={this.props.includeDates}
      />
    )
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
    this.props.onChange(date);
  };

}

export default InputDateComponent;