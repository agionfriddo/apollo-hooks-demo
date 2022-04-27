import React from 'react';
import { gql, useQuery } from "@apollo/client"

const GET_LANGUAGES = gql`
  query Languages($filter: LanguageFilterInput) {
    languages(filter: $filter) {
      name
    }
  }
`

export const Languages = () => {
  const { data, loading, error } = useQuery(GET_LANGUAGES, {
    variables: {
      filter: {
        code: ["fr", "es", "it"]
      }
    }
  });

  if (error) {
    console.log('This is the error:', error);
    return 'What! There was an error? How come?';
  }

  if (!loading && data) {
    return (
      <div>
      <h1>Languages Fetched</h1>
      <ul>
        {data.languages.map(({ name }) => (
          <li key={name}>
              {name}
          </li>
        ))}
      </ul>
    </div>
    )
  }
}