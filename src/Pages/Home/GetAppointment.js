import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const GetAppointment = () => {
    return (
        <div>
            <section className='flex justify-center items-center ' style={{
                background: `url(${appointment})`
            }}>
                <div className='flex-1  hidden lg:block'>
                    <img className='mt-[-140px]' src={doctor} alt="" />
                </div>
                <div className='flex-1 p-8 lg:p-0'>
                    <h3 className='text-xl text-primary mb-3 font-bold'>Appointment</h3>
                    <h2 className='text-3xl font-bold text-white mb-3'>Make an appointment Today</h2>
                    <p className='text-white mb-3'>It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less
                        normal distribution of letters,as opposed to using 'Content here, content here', making it
                        look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </section>
        </div>
    );
};

export default GetAppointment;