import { gql } from '@apollo/client'
export const GET_ALL_QUOTES = gql`
    query getAllQuotes {
   quotes {
    _id
    quote
    by {
      _id
      firstName
    }
   }
}
`

export const GET_MY_PROFILE = gql`
query getMyProfile {
  user:myProfile {
    _id
    firstName
    lastName
    email
    quotes{
      _id
      quote
    }
  }
}
`