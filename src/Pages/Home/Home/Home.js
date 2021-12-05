import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import BannerInformation from '../BannerInformation/BannerInformation';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
         
            <Navigation></Navigation>
            <Banner></Banner>
            <BannerInformation></BannerInformation>
            <Services></Services>
            <Doctors></Doctors>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;