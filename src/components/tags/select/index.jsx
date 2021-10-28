import React from 'react';
import Select from 'react-select';

class SelectComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); 
  }

  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.onChange(selectedOption);
  };

  render() {
        const { selectedOption } = this.state;

        const customStyles = {
          control: (provided, state) => ({
            ...provided,
            borderRadius: 0,
            cursor: 'pointer',
            height: 50,
            maxWidth: '100%',
            borderColor: '#CCC'
          }),

          option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
          }),
        }

      return (
        <Select
        placeholder={this.props.placeholder}
        defaultValue={this.props.defaultValue}
        styles={customStyles}
        value={selectedOption}
        isDisabled={this.props.isDisabled}
        onChange={this.handleChange}
        options={this.props.options}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          cursor: 'pointer',
          colors: {
            ...theme.colors,
            neutral20: 'neutral20',
            primary75: 'primary75',
          },
        })}
      />
      );
  }
}

export default SelectComponent;