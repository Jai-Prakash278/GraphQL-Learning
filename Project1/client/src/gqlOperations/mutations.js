import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation signupUser($userNew: UserInput!) {
    user:userSignUp(userNew: $userNew) {
      firstName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($userSignIn: loginInput!) {
    user:userLogin(userSignIn: $userSignIn) {
      token
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation createQuote($quote: String!) {
    quote:createQuote(quote: $quote)
  }
`;

export const UPDATE_QUOTE = gql`
  mutation updateQuote($id: ID!, $quote: String!) {
    updateQuote(id: $id, quote: $quote) {
      _id
      quote
    }
  }
`;

export const DELETE_QUOTE = gql`
  mutation deleteQuote($id: ID!) {
    deleteQuote(id: $id)
  }
`;