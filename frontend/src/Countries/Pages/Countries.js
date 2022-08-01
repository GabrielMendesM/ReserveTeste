import React, { useEffect, useState } from 'react';
import { useHttpClient } from '../../hooks/http-hook';
import CountriesTable from '../Components/CountriesTable';

const Countries = () => {
    const { enviarRequest } = useHttpClient();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await enviarRequest('http://localhost:5000/countries/tenHighest');
                setCountries(res.countries);
            } catch (err) {
                console.log(err);
            }
        };
        fetchCountries();
    }, [enviarRequest]);

    return (
        <CountriesTable countries={countries}/>
    );
}

export default Countries;
