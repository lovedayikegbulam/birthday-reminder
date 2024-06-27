// src/components/UserForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { addUser } from '../services/userService';
import DatePicker from './DatePicker';
import { format } from 'date-fns';

const Form = styled.form`
    max-width: 500px;
    margin: 50px auto;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #357ab8;
    }
`;

const UserForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Format date of birth to yyyy-mm-dd
            const formattedDate = dateOfBirth ? format(dateOfBirth, 'yyyy-MM-dd') : null;
            const newUser = { username, email, dateOfBirth: formattedDate };
            console.log(newUser); // Debugging line
            await addUser(newUser);
            alert('User added successfully');
            setUsername('');
            setEmail('');
            setDateOfBirth(null);
        } catch (error) {
            console.error('Error adding user:', error); // Debugging line
            alert("Error adding user");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <Label>Username:</Label>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <Label>Email:</Label>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <Label>Date of Birth:</Label>
                <DatePicker
                    selectedDate={dateOfBirth}
                    onChange={setDateOfBirth}
                />
            </div>
            <Button type="submit">Add User</Button>
        </Form>
    );
};

export default UserForm;
