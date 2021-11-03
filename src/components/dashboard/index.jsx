import React, { Component, Fragment } from 'react';

import { Tooltip, Typography } from '@mui/material';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

import moment from 'moment';

import * as env from '../../environment';
import { LegendContainer, LegendBlock, LegendItem, LegendBox, LegendTitle, LegendQuantity } from './styles';

const { API_URL } = env[process.env.NODE_ENV];

class DashboardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            errorDays: 0,
            warningDays: 0,
            okayDays: 0
        }
    }

    calendarRef = React.createRef();

    componentDidMount() {
        this.getDataDashboard();
    }

    getDataDashboard() {
        let endpoint = `${API_URL}get`;

        console.log(endpoint)
        let data = [];

        let errorD = 0;
        let okD = 0;
        let warningD = 0;

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
                for (let i = 0; i < response.length; i++) {
                    if (response[i].status === "1")
                        okD = okD + 1;

                    if (response[i].status === "2")
                        warningD = warningD + 1;

                    if (response[i].status === "3")
                        errorD = errorD + 1;

                    data.push({
                        title: response[i].statusName,
                        date: moment(response[i].date).format("YYYY-MM-DD"),
                        backgroundColor: (response[i].status === "1") ? "#17B21C" : (response[i].status === "2") ? "#E7B12D" : "#E73B2D",
                        desc: response[i].message
                    });
                }

                this.setState({ events: data, okayDays: okD, warningDays: warningD, errorDays: errorD });
            })
            .catch((error) => console.log('hubo un problema: ', error))
    }

    handleDateClick = (arg, idx) => {
        if (this.state.events.title === 'Día con error') {

        }
    }

    render() {
        return (
            <Fragment>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev',
                        center: 'title',
                        right: 'next'
                    }}

                    ref={this.calendarRef}
                    initialView="dayGridMonth"
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    locale={'Es'}
                    firstDay={1}
                    eventDisplay='block'
                    height={'750px'}

                    dateClick={this.handleDateClick}
                    events={this.state.events}
                    eventContent={renderEventContent}
                />

                <LegendContainer>
                    <LegendBlock>
                        <LegendItem>
                            <LegendBox style={{ backgroundColor: '#17B21C' }}></LegendBox>
                            <LegendTitle>Días OK</LegendTitle>
                            <LegendQuantity>Cantidad:  {this.state.okayDays}</LegendQuantity>
                        </LegendItem>

                        <LegendItem>
                            <LegendBox style={{ backgroundColor: '#E7B12D' }}></LegendBox>
                            <LegendTitle>Días sin cuadrar</LegendTitle>
                            <LegendQuantity>Cantidad:  {this.state.warningDays}</LegendQuantity>
                        </LegendItem>

                        <LegendItem>
                            <LegendBox style={{ backgroundColor: '#E73B2D' }}></LegendBox>
                            <LegendTitle>Días con error</LegendTitle>
                            <LegendQuantity>Cantidad:  {this.state.errorDays}</LegendQuantity>
                        </LegendItem>

                    </LegendBlock>
                </LegendContainer>
            </Fragment>
        );
    }
}

const renderEventContent = (arg) => {
    if (arg.event.title === 'Día sin cuadrar' || arg.event.title === 'Día con error') {
        return (
            <Tooltip title={<Typography>{arg.event._def.extendedProps.desc}</Typography>} arrow>
                {renderInnerContent(arg)}
            </Tooltip>
        );
    }

    return;
}

const renderInnerContent = (innerProps) => {
    return (
        <div className='fc-event-main-frame'>
            {innerProps.timeText &&
                <div className='fc-event-time'>{innerProps.timeText}</div>
            }
            <div className='fc-event-title-container'>
                <div className='fc-event-title fc-sticky'>
                    {innerProps.event.title || <Fragment>&nbsp;</Fragment>}
                </div>
            </div>
        </div>
    );
}

export default DashboardComponent;