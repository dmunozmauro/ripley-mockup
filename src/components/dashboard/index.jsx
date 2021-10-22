import React, { Component, Fragment } from 'react';

import { Tooltip, Typography } from '@mui/material';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import { LegendContainer, LegendBlock, LegendItem, LegendBox, LegendTitle, LegendQuantity } from './styles';

class DashboardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [
                { title: 'Día OK', date: '2021-10-20', backgroundColor: "#17B21C", desc: '' },
                { title: 'Día sin cuadrar', date: '2021-10-25', backgroundColor: "#E7B12D", desc: 'Asiento de venta' },
                { title: 'Día con error', date: '2021-10-26', backgroundColor: "#E73B2D", desc: 'Asiento de venta, Marketplace' },
                { title: 'Día con error', date: '2021-10-30', backgroundColor: "#E73B2D", desc: 'Marketplace' },
            ]
        }
    }

    calendarRef = React.createRef();

    handleDateClick = (arg) => {

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
                            <LegendQuantity>Cantidad:  1</LegendQuantity>
                        </LegendItem>

                        <LegendItem>
                            <LegendBox style={{ backgroundColor: '#E7B12D' }}></LegendBox>
                            <LegendTitle>Días sin cuadrar</LegendTitle>
                            <LegendQuantity>Cantidad:  1</LegendQuantity>
                        </LegendItem>

                        <LegendItem>
                            <LegendBox style={{ backgroundColor: '#E73B2D' }}></LegendBox>
                            <LegendTitle>Días con error</LegendTitle>
                            <LegendQuantity>Cantidad:  2</LegendQuantity>
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