import React from 'react'
import Napit from '../assets/ticket-solid.svg'

const HeaderCard = (props) => {
    return (
        <div className="card sm:min-w-[400px] sm:w-1/4 mx-5 bg-base-100 shadow-xl z-20">
            <div className="card-body">
                <svg className='w-[50px] h-[50px] fill-info' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <div className='divider w-20 mt-0 mb-0'></div>
                <h2 className="card-title">{props.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    )
}

export default HeaderCard