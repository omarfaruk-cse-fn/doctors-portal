import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div>
            <div className="hero min-h-screen px-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="w-[594px] h-[355px] rounded-lg shadow-2xl" />
                    <div className='border-0 rounded-2xl shadow-2xl mr-10 p-2'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <p className='text-center'>You have selected {format(date, 'PP')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;