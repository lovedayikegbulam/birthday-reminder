// src/components/DatePicker.js
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ selectedDate, onChange }) => {
    return (
        <ReactDatePicker
            selected={selectedDate}
            onChange={onChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yyyy"
        />
    );
};

export default DatePicker;
