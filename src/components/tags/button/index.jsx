import React from 'react';
import { Button } from '@mui/material';

class ButtonComponent extends React.Component {

    render() {
        if (this.props.sx) {
            return (
                <Button
                    disabled={this.props.disabled}
                    variant={this.props.variant}
                    color={this.props.color}
                    type={this.props.type}
                    sx={this.props.sx}
                >{this.props.value}</Button>
            );
        }

        return (
            <Button
                disabled={this.props.disabled}
                variant={this.props.variant}
                color={this.props.color}
                type={this.props.type}
            >{this.props.value}</Button>
        );
    }
}

export default ButtonComponent;