import React, { Component, Fragment } from 'react';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarExport,
    esES
} from '@mui/x-data-grid';

import { randomPrice } from '@mui/x-data-grid-generator';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import { TextField, Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

import es from 'date-fns/locale/es';

import { EntriesBox, EntriesContainer, Cuncuna, IconLoading } from '../styles';

const currencyFormatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});

const clpPrice = {
    type: 'number',
    valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
};

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
        flex: 0.3,
        headerAlign: 'center',
        hide: true,
    },
    {
        field: 'sucursal',
        headerName: 'Sucursal',
        width: 200,
        flex: 0.3,
        headerAlign: 'center',
    },
    {
        field: 'ventas',
        headerName: 'Ventas',
        width: 200,
        flex: 0.3,
        headerAlign: 'center',
        ...clpPrice

    },
    {
        field: 'recaudacionRipley',
        headerName: 'Recaudación Ripley',
        width: 300,
        flex: 0.3,
        headerAlign: 'center',
        ...clpPrice
    },
    {
        field: 'mapfre',
        headerName: 'Mapfre',
        width: 200,
        flex: 0.3,
        headerAlign: 'center',
        ...clpPrice
    },
    {
        field: 'regalo',
        headerName: 'Regalo',
        width: 200,
        flex: 0.3,
        headerAlign: 'center',
        ...clpPrice
    }
];

const rows = [
    { id: 0, sucursal: 'Sucursal de prueba 0', ventas: 1000, recaudacionRipley: 10000, mapfre: randomPrice(), regalo: randomPrice() },
    { id: 1, sucursal: 'Sucursal de prueba 1', ventas: 2000, recaudacionRipley: 10000, mapfre: randomPrice(), regalo: randomPrice() },
    { id: 2, sucursal: 'Sucursal de prueba 2', ventas: 3000, recaudacionRipley: 10000, mapfre: randomPrice(), regalo: randomPrice() },
    { id: 3, sucursal: 'Sucursal de prueba 3', ventas: 4000, recaudacionRipley: 10000, mapfre: randomPrice(), regalo: randomPrice() },
    { id: 4, sucursal: 'Sucursal de prueba 4', ventas: 5000, recaudacionRipley: 10000, mapfre: randomPrice(), regalo: randomPrice() },
    { id: 5, sucursal: 'Sucursal de prueba 5', ventas: 6000, recaudacionRipley: 10000, mapfre: randomPrice(), regalo: randomPrice() },
    { id: 6, sucursal: 'Sucursal de prueba 6', ventas: 7000, recaudacionRipley: 10000, mapfre: randomPrice(), regalo: randomPrice() },
    { id: 7, sucursal: 'Sucursal de prueba 7', ventas: 8000, recaudacionRipley: 10000, mapfre: randomPrice(), regalo: randomPrice() },
    { id: 8, sucursal: 'Sucursal de prueba 8', ventas: 9000, recaudacionRipley: 10000, mapfre: randomPrice(), regalo: randomPrice() },
    { id: 9, sucursal: 'Sucursal de prueba 9', ventas: 10000, recaudacionRipley: 10000, mapfre: randomPrice(), regalo: randomPrice() },
];

const CustomToolbar = () => {
    return (
        <GridToolbarContainer>
            {/* <GridToolbarColumnsButton /> */}
            <GridToolbarFilterButton />
            {/* <GridToolbarDensitySelector /> */}
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

const CustomNoRowsOverlay = () => {
    return (
        <div style={{ margin: 'auto' }}>Sin datos</div>
    );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

class ReportsQuadratureComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dateValue: null,
            disabledButton: true,

            cuncuna: false,
            disabledReport: true,
            disabledOffice: true,

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

        }
    }

    handleDateChange = (e) => {
        this.setState({ dateValue: e, disabledOffice: false });
    }

    handleChangeOffice = (e, { props }) => {
        this.setState({ officeSelected: props.value, disabledButton: (e === null) ? true : false });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ cuncuna: true });

        setInterval(() => {
            this.setState({ cuncuna: false, disabledReport: false });
        }, 10000);
    }

    render() {
        return (
            <Fragment>
                <h1>Reportes de cuadratura</h1>

                <form onSubmit={this.handleSubmit}>
                    <EntriesBox>
                        <EntriesContainer>
                            <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
                                <DatePicker
                                    color="secondary"
                                    label="Seleccionar fecha"
                                    onChange={this.handleDateChange}
                                    renderInput={(params) => <TextField {...params} color="secondary" />}
                                    value={this.state.dateValue}
                                />
                            </LocalizationProvider>
                        </EntriesContainer>

                        <EntriesContainer>
                            <FormControl fullWidth>
                                <InputLabel color="secondary">Seleccionar sucursal</InputLabel>
                                <Select
                                    label="Seleccionar sucursal"
                                    disabled={this.state.disabledOffice}
                                    onChange={this.handleChangeOffice.bind(this)}
                                    style={{ width: '100%' }}
                                    value={this.state.officeSelected}
                                    MenuProps={MenuProps}
                                >
                                    {this.state.office.map((dt, idx) => {
                                        return <MenuItem key={idx} value={dt.value} name={dt.name}>{dt.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </EntriesContainer>

                        <EntriesContainer style={{ alignSelf: "center" }}>
                            <Button
                                color="secondary"
                                disabled={this.state.disabledButton}
                                type="submit"
                                variant="contained"
                            >
                                Consultar
                            </Button>
                        </EntriesContainer>
                    </EntriesBox>
                </form>

                <div style={{ height: 700, width: '100%' }} hidden={this.state.disabledReport}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        localeText={esES.props.MuiDataGrid.localeText}
                        disableColumnMenu={true}
                        components={{
                            Toolbar: CustomToolbar,
                            NoRowsOverlay: CustomNoRowsOverlay
                        }}
                    />
                </div>

                {(this.state.cuncuna) ?
                    <Cuncuna className="loading">

                        <h1>Cargando</h1>
                        <IconLoading src="/images/cuncuna.gif" />
                    </Cuncuna>
                    : null
                }
            </Fragment>
        );
    }
}

export default ReportsQuadratureComponent;