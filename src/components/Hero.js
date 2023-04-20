import React from 'react';
import '../App.css';
import './Hero.css';
import { Button } from './Button';
import Vaccine from "./video/vaccine.mp4";


function Hero() {
    return (
        <div className='hero-container'>
            <video autoPlay loop muted id='video'>
                <source src={Vaccine} type='video/mp4' />
            </video>
            <h1>Automated Vaccine Booking</h1>
            <h3 id="Intro">
                Web Application that can continously track for availability of vaccine and
                <br />
                Proceed with booking on your behalf!!
            </h3>
            <p id="registration">
                Please press sign up to register on cowin website

                add beneficiaries and then, come back here for automated bookings.

                For automatic bookings, login, select beneficiaries,
                <br />
                keep feeding in
                OTPs every few mins.
                When there's availability, the app will
                automatically attempt for a booking based on your preferences. When
                there's availability, you will have to enter captcha code if it is
                required.
            </p>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >
                BOOK AN VACCINE
            </Button>

        </div>

    )
}

export default Hero;