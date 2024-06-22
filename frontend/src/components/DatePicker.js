// src/components/DatePicker.js
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parse } from 'date-fns';

const DatePicker = ({ selectedDate, onChange }) => {
    const handleDateChange = (date) => {
        onChange(date);
    };

    const formatDate = (date) => {
        return date ? format(date, 'dd/MM/yyyy') : '';
    };

    const parseDate = (dateString) => {
        return parse(dateString, 'dd/MM/yyyy', new Date());
    };

    return (
        <ReactDatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yyyy"
            customInput={
                <input
                    value={formatDate(selectedDate)}
                    onChange={(e) => handleDateChange(parseDate(e.target.value))}
                    placeholder="dd/mm/yyyy"
                />
            }
        />
    );
};

export default DatePicker;
