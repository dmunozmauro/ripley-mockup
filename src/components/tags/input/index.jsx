import React from 'react';
import { TextField } from '@mui/material';
import './style.css';

class InputComponent extends React.Component {

    render() {

        if (this.props.sx) {
            return (
                <TextField
                    id={this.props.id}
                    autoComplete={this.props.autoComplete}
                    size={this.props.size}
                    label={this.props.label}
                    variant={this.props.variant}
                    color={this.props.color}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    onChange={this.props.onChange}
                    name={this.props.name}
                    sx={this.props.sx}
                />
            );
        }

        return (
            <TextField
                id={this.props.id}
                autoComplete={this.props.autoComplete}
                size={this.props.size}
                label={this.props.label}
                variant={this.props.variant}
                color={this.props.color}
                placeholder={this.props.placeholder}
                type={this.props.type}
                onChange={this.props.onChange}
                name={this.props.name}
            />
        );
    }
}

export default InputComponent;