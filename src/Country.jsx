import { gql, useQuery } from "@apollo/client"
import { Link, useParams } from "react-router-dom";


const GET_COUNTRY_DETAIL = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      emoji
      code
      capital,
      languages {
        name
      }
      states {
        name
      }
      continent {
        name
      }
    }
  }
`

const Country = () => {
  const { code } = useParams();
  const { data, loading } = useQuery(GET_COUNTRY_DETAIL, {
    variables: {
      code
    },
    skip: true
  });

  if (loading) {
      return <p>Loading...</p>
  }

  const {
    name,
    emoji,
    capital,
    states,
    languages,
    continent
  } = data.country;

  return (
    <div>
      <Link to="/">Go Back To List</Link>
      <h1>{name} {emoji}</h1>
      <p>Capital: {capital}</p>
      <p>Continent: {continent.name}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map((language) => <li key={language.name}>{language.name}</li>)}
      </ul>
      <h2>States</h2>
      <ul>
        {states.map((state) => <li key={state.name}>{state.name}</li>)}
      </ul>
    </div>
  )
}

export default Country;