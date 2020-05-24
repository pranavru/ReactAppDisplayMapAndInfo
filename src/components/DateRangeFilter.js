import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function DateRangeFilter(props) {
    const [value, onChange] = useState([new Date(), new Date()]);

    const handleChange = () => {
        console.log("Chind Call")
        this.props.handleChangeDate(value)
    }
    return (
        <div>
            <DateRangePicker
                onChange={[onChange, handleChange]}
                value={value}
                name="dateValue"
                autoFocus
                isOpen
                maxDate={new Date()}
                rangeDivider='to'
            />
        </div>
    );
}

export default DateRangeFilter;