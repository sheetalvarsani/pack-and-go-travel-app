import React, { useState, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import '../map/SaveBucketList.css';



export const SaveBucketList = ({ bucketList, countries, onClose }) => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);


  /* Handle the button click to close the SaveBucketList component.*/
  const handleButtonClick = () => {
    setIsVisible(false);
  };

  /*UseEffect hook to handle the visibility of the message.*/
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);

  if (!isVisible) {
    return null; // Do not render anything if not visible
  };
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='bk-container mt-5 p-3 border rounded'>
            <div style={{ textAlign: 'left' }}>
              <button onClick={handleButtonClick} id='show-list-icon' className="close-button">
                <CgClose style={{ fontSize: '24px' }} />
              </button>
            </div>

            <h1 className='mb-3'>My Bucket List</h1>

            {/* Bucket list items */}
            <ul className='list-unstyled'>
              {bucketList.map(countryCode => {
                const country = countries.find(c => c.cca2 === countryCode);

                return (
                  <li key={countryCode} className='bucket-list-item mb-2'>
                    {country && country.capital && country.capital[0]}
                  </li>
                );
              })}
            </ul>



            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveBucketList;