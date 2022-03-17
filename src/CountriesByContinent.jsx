import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client"


const GET_COUNTRIES_BY_CONTINENT = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      emoji
      continent {
        name
        code
      }
    }
  }
`

const CountriesByContinent = () => {
  const { code } = useParams();
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('');
  const { data, loading, error } = useQuery(GET_COUNTRIES_BY_CONTINENT, {
    variables: {
      filter: { continent: { eq: code } }
    },
    onCompleted: (data) => {
      console.log(data);
      setCountries(data.countries);
      setContinent(data.countries[0].continent.name);
    }
  });

  if (error) {
    return <p>Oops something went wrong: {error.message}</p>
  }

  if (loading || !data) {
    return <p>loading</p>
  }
  return (
    <div>
      <h1>Countries From {continent}</h1>
      <ul>
        {countries.map(({ name, emoji, code }) => (
          <li key={name}>
            <Link to={`/${code}`}>
              {name} {emoji}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CountriesByContinent;