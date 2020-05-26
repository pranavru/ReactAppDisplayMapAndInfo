import React from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Card } from 'reactstrap';

function DateRangeFilter(props) {
    // const [value, props.handleChange] = useState([new Date(), new Date()]);

    return (
        <Card>
            <DateRangePicker
                onChange={props.handleChangeDate}
                value={props.dateValue}
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