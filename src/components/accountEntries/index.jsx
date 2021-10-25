import React, { Component, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import es from 'date-fns/locale/es';
import { format } from 'date-fns';


class AccountEntriesComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "",

            dateMockup: ["05/10/2021", "10/10/2021", "15/10/2021", "20/10/2021", "01/01/2021"]
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


    render() {
        return (
            <Fragment>

                <h1>Asientos a reprocesar</h1>

                <div>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
                        <DatePicker
                            label="Seleccionar fecha"
                            shouldDisableDate={this.disabledDate}
                            value={this.state.value}
                            onChange={this.handleDateChange}
                            renderInput={(params) => <TextField {...params} helperText={null} />}
                        />

                    </LocalizationProvider>
                </div>

            </Fragment>
        );

    }
}

export default AccountEntriesComponent;

