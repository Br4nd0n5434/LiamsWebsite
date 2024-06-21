import React from 'react';
import ReadMore from './ReadMore'; // Ensure the correct path to ReadMore component

const Card = ({ name, date, profileImage, content = '', likes, comments, images }) => {
  const formatDate = (dateString) => {
    const [datePart, timePart] = dateString.split(', ');
    const [day, month, year] = datePart.split('/');
    const [hour, minute] = timePart.split(':');
    const formattedDate = `${day} ${getMonthName(parseInt(month))} at ${hour}:${minute}`;
    return formattedDate;
  };

  const getMonthName = (monthNumber) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthNumber - 1];
  };

  return (
    <div className="bg-base flex items-center justify-center carousel-item">
      <div className="px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 bg-base-100 shadow rounded-lg w-full max-w-md h-[550px]">
        <div className="flex mb-3 items-center">
          {profileImage && <img src={profileImage} alt="Profile" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full" />}
          <div className="ml-3">
            <span className="block font-medium text-base sm:text-lg leading-tight text-base-content">{name}</span>
            <span className="block text-sm text-gray-500 font-light">{formatDate(date)}</span>
          </div>
        </div>
        <ReadMore text={content} maxLength={100} />
        <p className="text-base-content/50 leading-snug md:leading-normal"></p>
        {images && images.length > 0 && (
          <div className="mt-4">
            {images.map((image, index) => (
              <img key={index} src={image} alt="Post Image" className="mt-2 w-full h-[300px] rounded-lg" />
            ))}
          </div>
        )}
        <div className="flex justify-between items-center mt-4">
          <div className="flex">
            <svg className="p-0.5 h-6 w-6 sm:h-7 sm:w-7 rounded-full z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <defs>
                <linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#18AFFF"/>
                  <stop offset="100%" stopColor="#0062DF"/>
                </linearGradient>
                <filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox">
                  <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1"/>
                  <feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                  <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
                  <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"/>
                </filter>
                <path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"/>
              </defs>
              <g fill="none">
                <use fill="url(#a1)" xlinkHref="#b1"/>
                <use fill="black" filter="url(#c1)" xlinkHref="#b1"/>
                <path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"/>
              </g>
            </svg>
            <span className="ml-1 text-gray-500 font-light">{likes}</span>
          </div>
          <div className="ml-1 text-gray-500 font-light">{comments} comments</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
