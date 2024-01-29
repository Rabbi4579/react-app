import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,area,region,flags,population} = props.country;
    return (
        <div className='country bg-warning'>
            <h2>Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;