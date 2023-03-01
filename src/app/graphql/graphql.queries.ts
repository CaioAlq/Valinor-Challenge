import { gql } from "apollo-angular";

const HERO_DESCRIPTIONS = gql`
query {
    constants {
      heroes {
        id: shortName
        stats {
          complexity
          attackType
          primaryAttribute
        }
      }
    }
  }
`

export { HERO_DESCRIPTIONS };