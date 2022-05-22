import { gql, useQuery } from "@apollo/client"


const GET_COUNTRIES = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      emoji
      continent {
        code
      }
    }
  }
`

const Countries = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading || !data) {
    return <p>loading</p>
  }

  if (error) {
    return 'There was an error';
  }

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {data.countries.map(({ name, emoji }) => (
          <li key={name}>
            {name} {emoji}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Countries;