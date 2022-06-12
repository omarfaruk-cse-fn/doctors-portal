import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
            <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle="Opening Hours" cardDescription='Morning 8:am to night 11:pm' img={clock}></InfoCard>
            <InfoCard bgClass='bg-neutral' cardTitle="Visit our location" cardDescription='Comilla, NY 3580, Bangladesh' img={marker}></InfoCard>
            <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle="Contact us now" cardDescription='+000 123 000000' img={phone}></InfoCard>
        </div>
    );
};

export default Info;