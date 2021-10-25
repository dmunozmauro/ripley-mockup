import React, { Component, Fragment } from 'react';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarExport,
    esES
} from '@mui/x-data-grid';

import { randomPrice } from '@mui/x-data-grid-generator';

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

class ReportsAccountingComponent extends Component {
    render() {
        return (
            <Fragment>
                <h1>Reportes de Asientos Contables</h1>

                <div style={{ height: 700, width: '100%' }}>
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
            </Fragment>
        );
    }
}

export default ReportsAccountingComponent;


