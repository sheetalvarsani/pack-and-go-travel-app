
import React from 'react';
import './bucket-list.css';


export const BucketList = ({ bucketList, countries, onClose }) => (
  <div className='bk-container mt-5 p-4 border rounded'>
    <button className='close-btn' onClick={onClose}>
    
    </button>
    <h1 className='mb-4'>My Bucket List</h1>
    <ul className='list-unstyled'>
      {bucketList.map(countryCode => {
        const country = countries.find(c => c.cca2 === countryCode);

        return (
          <li key={countryCode} className='bucket-list-item'>
            {country && country.capital && country.capital[0]}
          </li>
        );
      })}
    </ul>
  </div>
);

export default BucketList;