import React from 'react';
import Footer from '../Shared/Footer/Footer';
import GetAppointment from './GetAppointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <GetAppointment></GetAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;