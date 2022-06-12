import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import BookService from './BookService';

const AvailableAppointMent = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    //Load all data from services
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='px-12'>
            <div>
                <p className='text-center text-2xl text-secondary'>Available Appointments on {format(date, 'PP')}</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {
                    services.map(service => <BookService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </BookService>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointMent;