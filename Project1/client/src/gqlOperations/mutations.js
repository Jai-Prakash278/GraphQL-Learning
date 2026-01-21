import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation signupUser($userNew: UserInput!) {
    userSignUp(userNew: $userNew) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($userSignIn: loginInput!) {
    userLogin(userSignIn: $userSignIn) {
      token
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation createQuote($quote: String!) {
    createQuote(quote: $quote)
  }
`;
