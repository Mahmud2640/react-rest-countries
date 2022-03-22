import React from 'react';
import './SingleCountry.css'

const SingleCountry = (props) => {
   const {region, area, population, name, flags} = props.country
   return (
      <div className="country">
         <h2>Country Name: {name.common}</h2>
         <img src={flags.png} alt='' />
         <p>Population: {population}</p>
         <p>Area Name: {area}</p>
         <p>Region: {region}</p>

      </div>
   );
};

export default SingleCountry;