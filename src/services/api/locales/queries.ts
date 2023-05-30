import { gql } from 'graphql-request';

export const GetLocalesQuery = gql`
  query Localization @inContext(country: NL, language: NL) {
    localization {
      # for the current country
      availableLanguages {
        isoCode
        endonymName
      }

      # and for non-current countries
      availableCountries {
        isoCode
        name
        availableLanguages {
          isoCode
          endonymName
        }
      }
    }
  }
`;
