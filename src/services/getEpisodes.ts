import { gql } from "@apollo/client";

export type Episode = {
  id: string
  name: string;
  air_date: string;
  episode: string
  characters: {
    name: string
  }[]
}

export type EpisodesData = {
  episodes: {
    info: {
      count: number
      prev: number
      next: number
      pages: number

    }
    results: [Episode]
  }
}

export type EpisodesVars = {
  page: number;
  name?: string;
}

export const GET_EPISODES = gql`
  query Episodes($page: Int!, $name: String ) {
    episodes(page: $page, filter: { name: $name } ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        characters {
            name
        }
      }
    }
  }
`