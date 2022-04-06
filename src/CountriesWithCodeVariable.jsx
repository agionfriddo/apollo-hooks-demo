import { Link } from "react-router-dom";
import { gql, useLazyQuery, useQuery } from "@apollo/client"
import { useState } from "react";


const GET_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`

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

const ContinentsWithCodeVariable = () => {
  const [code, setCode] = useState('');
  const { data, loading } = useQuery(GET_CONTINENTS, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first"
  });
  const { data: countryData } = useQuery(GET_COUNTRIES_BY_CONTINENT, {
    variables: {
      filter: { continent: { eq: code } }
    },
  });

  const handleClick = (code) => {
    setCode(code);
  };
  if (loading || !data) {
    return <p>loading</p>
  }
  return (
    <div>
      <h1>Continents</h1>
      <ul>
        {data.continents.map(({ name, code }) => (
          <li key={name}>
            <button onClick={() => handleClick(code)}>
              {name}
            </button>
          </li>
        ))}
      </ul>
      {
        countryData && (
          <>
            <h2>Countries</h2>
            <ul>
              {countryData.countries.map(({ name, emoji, code }) => (
                <li key={name}>
                  <Link to={`/${code}`}>
                    {name} {emoji}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )
      }
    </div>
  )
}

export default ContinentsWithCodeVariable;