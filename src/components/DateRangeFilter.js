import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Card } from 'reactstrap';

function DateRangeFilter(props) {
    const [value, onChange] = useState([new Date(), new Date()]);

    const handleChange = () => {
        props.handleChangeDate(value)
    }
    return (
        <Card>
            <DateRangePicker
                onChange={handleChange}
                value={value}
                name="dateValue"
                autoFocus
                isOpen
                maxDate={new Date()}
                rangeDivider='to'
            />
        </Card>
    );
}

export default DateRangeFilter;