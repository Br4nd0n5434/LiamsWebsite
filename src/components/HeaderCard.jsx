import React from 'react'

const HeaderCard = () => {
    return (
        <div className="card glass sm:min-w-[400px] sm:w-1/4 mx-5 bg-base-100 shadow-xl z-20">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-logo text-base-200">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderCard