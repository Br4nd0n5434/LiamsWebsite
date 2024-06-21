import React, { useState } from 'react';

const ReadMore = ({ text = '', maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const renderText = () => {
    if (!text) return null;

    if (text.length <= maxLength) {
      return text;
    }

    if (isExpanded) {
      return (
        <>
          {text} <span onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>Read Less</span>
        </>
      );
    }

    const truncatedText = text.slice(0, maxLength) + '...';
    return (
      <>
        {truncatedText} <span onClick={toggleReadMore} style={{ color: 'info', cursor: 'pointer' }}>Read More</span>
      </>
    );
  };

  return <p>{renderText()}</p>;
};

export default ReadMore;
