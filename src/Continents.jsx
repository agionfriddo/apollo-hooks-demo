import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client"


const GET_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`

const Continents = () => {
  const { data, loading } = useQuery(GET_CONTINENTS);

  if (loading || !data) {
    return <p>loading</p>
  }
  return (
    <div>
      <h1>Continents</h1>
      <ul>
        {data.continents.map(({ name, code }) => (
          <li key={name}>
            <Link to={`/continents/${code}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Continents;