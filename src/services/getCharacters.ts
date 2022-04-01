import { gql } from "@apollo/client";

export type Character = {
  id: string
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  image: string;
  origin: {
    name: string;
  }
  episode: {
    id: string
  }[]
}

export type CharactersData = {
  characters: {
    info: {
      count: number
      prev: number
      next: number
      pages: number

    }
    results: [Character]
  }
}

export type CharactersVars = {
  page: number;
  name?: string;
}

export const GET_CHARACTERS = gql`
    query Characters($page: Int!, $name: String ) {
        characters(page: $page, filter: { name: $name } ) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                image
                status
                species
                type
                gender
                origin {
                    name
                }
                episode {
                    id
                }
            }
        }
    }
`