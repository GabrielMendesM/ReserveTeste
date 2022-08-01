import './Country.css';

const Country = props => {
    return (
        <tr>
            <td class="td_1">{props.ranking}</td>
            <td class="td_2">{props.country.Country}</td>
            <td class="td_3">{props.totalActive}</td>
        </tr>
    );
};

export default Country;
