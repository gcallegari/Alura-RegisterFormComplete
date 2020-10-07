import React, { useState, useEffect } from 'react';
import PersonalData from './PersonalData';
import UserData from './UserData';
import AddressData from './AddressData';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';

function RegisterForm({ onSubmit, toCheck }) {
    const [currentlyStep, setCurrentlyStep] = useState(0);
    const [gettingData, setData] = useState({});

    useEffect(() => {
        if (currentlyStep === forms.length - 1) {
            onSubmit(gettingData);
        }
    })

    const forms = [
        <UserData onSubmit={getData} toCheck={toCheck} />,
        <PersonalData onSubmit={getData} toCheck={toCheck} />,
        <AddressData onSubmit={getData} toCheck={toCheck} />,
        <Typography variant="h5">Thank you for your submit!</Typography>
    ];

    function getData(data) {
        setData({ ...gettingData, ...data });
        next();
    }

    function next(data) {
        setCurrentlyStep(currentlyStep + 1);
    }

    return <>
        <Stepper activeStep={currentlyStep}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Personal</StepLabel></Step>
            <Step><StepLabel>Address</StepLabel></Step>
            <Step><StepLabel>Done!</StepLabel></Step>
        </Stepper>
        {forms[currentlyStep]}
    </>;
}

export default RegisterForm;