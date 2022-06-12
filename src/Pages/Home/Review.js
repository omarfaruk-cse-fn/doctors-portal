import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div>
                        <p>{review.review}</p>
                    </div>
                    <div className='flex items-center'>

                        <div className="avatar">
                            <div className="w-[76px] mt-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} alt="" />
                            </div>
                        </div>

                        <div className='ml-3'>
                            <p >{review.name}</p>
                            <p>{review.country}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;