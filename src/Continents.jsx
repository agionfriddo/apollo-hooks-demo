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
  
}

export default Continents;