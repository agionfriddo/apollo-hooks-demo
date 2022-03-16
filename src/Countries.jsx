import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client"


const GET_COUNTRIES = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      emoji
    }
  }
`

const Countries = () => {
  const { data, loading } = useQuery(GET_COUNTRIES);

  if (loading || !data) {
    return <p>loading</p>
  }
  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {data.countries.map(({ name, emoji, code }) => (
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

export default Countries;