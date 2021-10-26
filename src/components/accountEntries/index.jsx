import React, { Component, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import es from 'date-fns/locale/es';
import { format } from 'date-fns';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { EntriesBox } from './styles';


class AccountEntriesComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null,

            dateMockup: ["05/10/2021", "10/10/2021", "15/10/2021", "20/10/2021", "25/10/2021"],

            personName: '',
            office: [
                {
                    name: "Apoquindo",
                    value: 1
                },
                {
                    name: "Santiago",
                    value: 2
                },
                {
                    name: "Puente Alto",
                    value: 3
                }
            ],

            officeSelected: ""
        }
    }

    handleDateChange = (e) => {
        this.setState({ value: e });
    }

    disabledDate = (e) => {
        let date = format(e, "dd/MM/yyyy");
        let fecha = this.state.dateMockup;

        if (fecha.includes(date)) {
            return false;
        }
        return true;

    }

    handleChangeOffice = (e, { props }) => {
        // console.log(props);
        this.setState({ officeSelected: props.value });
    };


    render() {
        return (
            <Fragment>

                <h1>Asientos a reprocesar</h1>

                <EntriesBox>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
                        <DatePicker
                            color="secondary"
                            label="Seleccionar fecha"
                            onChange={this.handleDateChange}
                            renderInput={(params) => <TextField {...params} color="secondary" />}
                            shouldDisableDate={this.disabledDate}
                            value={this.state.value}
                        />
                    </LocalizationProvider>
                </EntriesBox>

                <EntriesBox>
                    <FormControl fullWidth>
                        <InputLabel color="secondary">Seleccionar sucursal</InputLabel>
                        <Select
                            color="secondary"
                            label="Seleccionar sucursal"
                            onChange={this.handleChangeOffice.bind(this)}
                            style={{ width: '100%' }}
                            value={this.state.officeSelected}
                        >
                            {this.state.office.map((dt, idx) => {
                                return <MenuItem key={idx} value={dt.value} name={dt.name}>{dt.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </EntriesBox>

            </Fragment>
        );

    }
}

export default AccountEntriesComponent;

