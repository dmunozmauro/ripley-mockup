import React, { Component, Fragment } from 'react';
import { TextField, Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import es from 'date-fns/locale/es';
import { format } from 'date-fns';

import { EntriesBox, EntriesContainer, Cuncuna, IconLoading } from './styles';
import './style.css';

import InputDateComponent from "../tags/inputDate";
import SelectComponent from "../tags/select";

class AccountEntriesComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dateValue: null,
            dateMockup: ["05/10/2021", "10/10/2021", "15/10/2021", "20/10/2021", "25/10/2021"],
            personName: '',

            cuncuna: false,

            //SUCURSALES
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
            officeSelected: "",
            disabledOffice: true,

            //ASIENTOS CONTABLES
            seat: [
                {
                    name: "Asiento primero",
                    value: 1
                },
                {
                    name: "Segundo",
                    value: 2
                },
                {
                    name: "3er Asiento",
                    value: 3
                }
            ],
            seatSelected: "",
            disabledSeat: true,

            //
            reprocessDisabled: true,






            /////////////////////////////////////////////
            fechasActivas: [new Date("10/05/2021"), new Date("10/10/2021"), new Date("10/15/2021"), new Date("10/20/2021"), new Date("10/25/2021")],
            valorFecha: null,
            isDisabled: true,
            sucursalSeleccionada: "",
            sucursales: [
                {
                    label: "Apoquindo",
                    value: 1
                },
                {
                    label: "Santiago",
                    value: 2
                },
                {
                    label: "Puente Alto",
                    value: 3
                }
            ],
            asientoSeleccionado: "",
            asientos: [
                {
                    label: "Asiento primero",
                    value: 1
                },
                {
                    label: "Segundo",
                    value: 2
                },
                {
                    label: "3er Asiento",
                    value: 3
                }
            ],
            isDisabledSeat: true,
        }
    }

    componentDidMount() {
        this.getAlbums();
    }

    getAlbums() {
        let endpoint = 'https://jsonplaceholder.typicode.com/albums/1/photos';
        this.searchAlbums(endpoint);
    }

    searchAlbums = (endpoint) => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        };

        fetch(endpoint, requestOptions)
            .then((result) => {
                return result.json();
            })
            .then((response) => {
            })
            .catch((error) => console.log('hubo un problema: ', error))
    }

    handleDateChange = (e) => {

        if (format(e, 'dd/MM/yyyy') === '05/10/2021') {
            this.setState({ dateValue: e, office: [{ name: "Apoquindo", value: 1 }], disabledSeat: false });
        }

        if (format(e, 'dd/MM/yyyy') === '10/10/2021') {
            this.setState({ dateValue: e, office: [{ name: "Santiago", value: 2 }], disabledSeat: false });
        }

        if (format(e, 'dd/MM/yyyy') === '15/10/2021') {
            this.setState({ dateValue: e, office: [{ name: "Apoquindo", value: 1 }, { name: "Santiago", value: 2 }, { name: "Puente Alto", value: 3 }], disabledSeat: false });
        }

        if (format(e, 'dd/MM/yyyy') === '20/10/2021') {
            this.setState({ dateValue: e, office: [{ name: "Apoquindo", value: 1 }, { name: "Santiago", value: 2 }, { name: "Puente Alto", value: 3 }], disabledSeat: false });
        }

        if (format(e, 'dd/MM/yyyy') === '25/10/2021') {
            this.setState({ dateValue: e, office: [{ name: "Santiago", value: 2 }, { name: "Puente Alto", value: 3 }], disabledSeat: false });
        }
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

        this.setState({ officeSelected: props.value, reprocessDisabled: false });

    };

    handleChangeSeat = (e, { props }) => {

        if (props.value === 1) {
            this.setState({ seatSelected: props.value, disabledOffice: false, seat: [{ name: "Asiento primero", value: 1 }] });
        }

        if (props.value === 2) {
            this.setState({ seatSelected: props.value, disabledOffice: false, seat: [{ name: "Segundo", value: 2 }] });
        }

        if (props.value === 3) {
            this.setState({ seatSelected: props.value, disabledOffice: false, seat: [{ name: "Asiento primero", value: 1 }, { name: "3er Asiento", value: 3 }] });
        }



    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ cuncuna: true });

        setInterval(() => {
            this.setState({ cuncuna: false });
            this.limpiarFormulario();
        }, 10000);
    }

    limpiarFormulario = () => {
        this.setState({
            dateValue: null,
            officeSelected: "",
            disabledOffice: true,
            seatSelected: "",
            disabledSeat: true,
            reprocessDisabled: true,
            valorFecha: null,
            isDisabled: true,
            sucursalSeleccionada: "",
            asientoSeleccionado: "",
            isDisabledSeat: true,
        })
    }

    cambioFecha = (e) => {
        if (format(e, 'dd/MM/yyyy') === '05/10/2021') {
            this.setState({ valorFecha: e, sucursales: [{ label: "Apoquindo", value: 1 }], isDisabledSeat: false });
        }

        if (format(e, 'dd/MM/yyyy') === '10/10/2021') {
            this.setState({ valorFecha: e, sucursales: [{ label: "Santiago", value: 2 }], isDisabledSeat: false });
        }

        if (format(e, 'dd/MM/yyyy') === '15/10/2021') {
            this.setState({ valorFecha: e, sucursales: [{ label: "Apoquindo", value: 1 }, { label: "Santiago", value: 2 }, { label: "Puente Alto", value: 3 }], isDisabledSeat: false });
        }

        if (format(e, 'dd/MM/yyyy') === '20/10/2021') {
            this.setState({ valorFecha: e, sucursales: [{ label: "Apoquindo", value: 1 }, { label: "Santiago", value: 2 }, { label: "Puente Alto", value: 3 }], isDisabledSeat: false });
        }

        if (format(e, 'dd/MM/yyyy') === '25/10/2021') {
            this.setState({ valorFecha: e, sucursales: [{ label: "Santiago", value: 2 }, { label: "Puente Alto", value: 3 }], isDisabledSeat: false });
        }

    }

    cambioSucursal = (e) => {
        if (e.value === 1) {
            this.setState({ sucursalSeleccionada: e, isDisabled: false, asientos: [{ label: "Asiento primero", value: 1 }] });
        }

        if (e.value === 2) {
            this.setState({ sucursalSeleccionada: e, isDisabled: false, asientos: [{ label: "Segundo", value: 2 }] });
        }

        if (e.value === 3) {
            this.setState({ sucursalSeleccionada: e, isDisabled: false, asientos: [{ label: "Asiento primero", value: 1 }, { label: "3er Asiento", value: 3 }] });
        }
    }

    cambioAsiento = (e) => {
        this.setState({ asientoSeleccionado: e, reprocessDisabled: false });
    }



    render() {
        return (
            <Fragment>

                <h1>Asientos a reprocesar</h1>

                {/* <form onSubmit={this.handleSubmit}>
                    <EntriesBox>
                        <EntriesContainer>
                            <InputDateComponent
                                onChange={this.cambioFecha}
                                includeDates={this.state.fechasActivas}
                            />
                        </EntriesContainer>

                        <EntriesContainer>
                            <SelectComponent
                                options={this.state.sucursales}
                                onChange={this.cambioSucursal}
                                isDisabled={this.state.isDisabled}
                                placeholder="Seleccionar sucursal"
                            />
                        </EntriesContainer>

                        <EntriesContainer>
                            <SelectComponent
                                options={this.state.asientos}
                                onChange={this.cambioAsiento}
                                isDisabled={this.state.isDisabledSeat}
                                placeholder="Seleccionar asiento"
                            />
                        </EntriesContainer>
                    </EntriesBox>

                    <EntriesBox>
                        <EntriesContainer>
                            <Button
                                // className="colorButton"
                                color="secondary"
                                disabled={this.state.reprocessDisabled}
                                type="submit"
                                variant="contained"
                            >
                                Reprocesar
                            </Button>
                        </EntriesContainer>
                    </EntriesBox>
                </form> */}


                <form onSubmit={this.handleSubmit}>
                    <EntriesBox id="EntriesBox">
                        <EntriesContainer>
                            <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
                                <DatePicker
                                    color="secondary"
                                    label="Seleccionar fecha"
                                    onChange={this.handleDateChange}
                                    renderInput={(params) => <TextField {...params} color="secondary" />}
                                    shouldDisableDate={this.disabledDate}
                                    value={this.state.dateValue}
                                />
                            </LocalizationProvider>
                        </EntriesContainer>

                        <EntriesContainer>
                            <FormControl fullWidth>
                                <InputLabel color="secondary">Seleccionar asiento</InputLabel>
                                <Select
                                    color="secondary"
                                    disabled={this.state.disabledSeat}
                                    label="Seleccionar asiento"
                                    onChange={this.handleChangeSeat.bind(this)}
                                    style={{ width: '100%' }}
                                    value={this.state.seatSelected}
                                >
                                    {this.state.seat.map((dt, idx) => {
                                        return <MenuItem key={idx} value={dt.value} name={dt.name}>{dt.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </EntriesContainer>

                        <EntriesContainer id="EntriesContainer">
                            <FormControl fullWidth>
                                <InputLabel color="secondary">Seleccionar sucursal</InputLabel>
                                <Select
                                    disabled={this.state.disabledOffice}
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
                        </EntriesContainer>

                    </EntriesBox>

                    <EntriesBox>
                        <EntriesContainer>
                            <Button
                                color="secondary"
                                disabled={this.state.reprocessDisabled}
                                type="submit"
                                variant="contained"
                            >
                                Reprocesar
                            </Button>
                        </EntriesContainer>
                    </EntriesBox>
                </form>

                {(this.state.cuncuna) ?
                    <Cuncuna className="loading">

                        <h1>Procesando</h1>
                        <IconLoading src="/images/cuncuna.gif" />
                    </Cuncuna>
                    : null
                }
            </Fragment >
        );

    }
}

export default AccountEntriesComponent;

