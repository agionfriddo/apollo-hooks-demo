const GET_LANGUAGES = gql`
  query Languages($filter: LanguageFilterInput) {
    languages(filter: $filter) {
      name
    }
  }
`

export default useLanguages = () => {

};