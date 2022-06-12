import React from 'react';

const BookService = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{
                        slots.length ?
                            <p>{slots[0]}</p> :
                            <p className='text-red-300'>Please try another day</p>
                    }</p>
                    <p>  {slots.length} {slots.length > 1 ? ' SPACES AVAILABLE' : ' SPACE AVAILABLE'}</p>
                    <div className="card-actions">
                        <label htmlFor="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            className="btn btn-secondary">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookService;