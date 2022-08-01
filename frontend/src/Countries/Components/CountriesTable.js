import React from 'react';

import Country from './Country';

import "./CountriesTable.css";

const CountriesTable = props => {
    /*
    const totalActive = (country) => {
        return country.TotalConfirmed - country.TotalRecovered;
    };

    const orderedList = () => {
        return props.countries.sort((a, b) => totalActive(b) - totalActive(a)).slice(0,10);
    };
    */    
    
    let n = 1;
    return (
        <table className='countriesTable'>
            <tr>
                <th className='th_1'>Ranking</th>
                <th className='th_2'>Nome</th>
                <th className='th_3'>Casos Ativos</th>
            </tr>
            {props.countries.map(c => (
                <Country 
                    key={c.ID}
                    ranking={n++}
                    country={c}
                    totalActive={c.TotalConfirmed - c.TotalRecovered}/>
            ))}
        </table> 
    );
};

export default CountriesTable;
