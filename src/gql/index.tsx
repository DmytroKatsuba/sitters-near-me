import { gql } from "@apollo/client";
import { baseQuery } from "./client";

export const getSittersNear = async ({
  latitude,
  longitude,
  experienceMax,
  experienceMin,
  distance,
  count,
}: {
  latitude: number;
  longitude: number;
  experienceMax: number;
  experienceMin: number;
  distance: number;
  count: number;
}) => {
  const query = gql`
    query Sitters(
      $latitude: Float!
      $longitude: Float!
      $experienceMax: Int!
      $experienceMin: Int!
      $distance: Int!
      $count: Int!
    ) {
      sitters(
        first: $count
        location: {
          geolocation: {
            distance: $distance
            latitude: $latitude
            longitude: $longitude
          }
        }
        experience: { maximum: $experienceMax, minimum: $experienceMin }
      ) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        nodes {
          bio
          city
          firstName
          id
          lastInitial
          profilePhotoURL
          rating
          state
          yearsActive
        }
      }
    }
  `;

  const queryResult = await baseQuery(query, {
    latitude,
    longitude,
    experienceMax,
    experienceMin,
    distance,
    count,
  });
  return queryResult.data.sitters;
};
