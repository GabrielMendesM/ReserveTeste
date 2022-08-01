const Country = props => {
    return (
        <tr>
            <td>{props.ranking}</td>
            <td>{props.country.Country}</td>
            <td>{props.totalActive}</td>
        </tr>
    );
};

export default Country;
