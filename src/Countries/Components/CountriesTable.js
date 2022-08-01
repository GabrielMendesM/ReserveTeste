import React from 'react';

import Country from './Country';

const CountriesTable = props => {
    const totalActive = (country) => {
        return country.TotalConfirmed - country.TotalRecovered;
    };

    const orderedList = () => {
        return props.countries.sort((a, b) => totalActive(b) - totalActive(a)).slice(0,10);
    };    
    
    let n = 1;
    return (
        <table>
            <tr>
                <th>Ranking</th>
                <th>Nome</th>
                <th>Casos Ativos</th>
            </tr>
            {orderedList().map(c => (
                <Country 
                    key={c.ID}
                    ranking={n++}
                    country={c}
                    totalActive={totalActive(c)}/>
            ))}
        </table> 
    );
};

export default CountriesTable;
