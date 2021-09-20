import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name, flag, capital, population, region } = props.country;

    return (
        <div className='country'>
            <h4>This is : {name}</h4>
            <img src={flag} alt="" />

            <p><small>Region:{region}</small></p>

            <p>Capital: {capital} Population:{population} </p>

            {/* <h4>This is : {props.country.name}</h4>
            <img src={props.country.flag} alt="" />
            <p>Capital: {props.country.capital} Population:{props.country.population} </p> */}
        </div>
    );
};

export default Country;