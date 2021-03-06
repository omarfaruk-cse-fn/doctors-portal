import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment
    const [user, loading, error] = useAuthState(auth);
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        console.log(slot)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>

                    <form onSubmit={handleBooking} className='mt-2'>
                        <input type="text" readOnly value={format(date, 'PP')} className=" input mb-1 input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input mb-1 input-bordered w-full max-w-xs" />
                        <input type="text" name='email' disabled value={user?.email || ''} className="input  mb-1 input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input mb-1 input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;