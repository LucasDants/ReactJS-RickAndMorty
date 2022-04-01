import { useQuery } from "@apollo/client";
import { Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { EpisodeCard } from "../../components/EpisodeCard";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { EpisodesData, EpisodesVars, GET_EPISODES } from "../../services/getEpisodes";

export function Episodes() {
  const { loading, data, fetchMore, error } = useQuery<EpisodesData, EpisodesVars>(GET_EPISODES, { variables: { page: 1 } })
  const [searchText, setSearchText] = useState('')

  const nextPage = data?.episodes.info.next
  const prevPage = data?.episodes.info.prev
  const currentPage = nextPage ? nextPage - 1 : prevPage + 1

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} onSearch={() => fetchMore({ variables: { page: 1, name: searchText } })} />
      {
        loading ? (
          <Flex justifyContent="center" alignItems="center" h="calc(100vh - 100px)">
            <Spinner size="xl" thickness='4px' />
          </Flex>
        ) : error ? (
          <Flex justifyContent="center" alignItems="center" h="calc(100vh - 100px)">
            <Text fontFamily="heading" fontSize="xl">Os dados buscados de Rick and Morty estão em alguma dimensão desconhecida.</Text>
          </Flex>
        ) : (
          <Flex direction="column" px={[16, 32]} pb={10}>
            <Pagination onPageChange={(page) => fetchMore({ variables: { page: page, name: searchText } })} totalCountOfRegisters={data?.episodes.info.count as number} registersPerPage={20} currentPage={currentPage} />
            <SimpleGrid justifyItems="center" minChildWidth={220} pt={10} spacingY={6}>
              {
                data?.episodes.results.map(character => <EpisodeCard key={character.id} data={character} />)
              }
            </SimpleGrid>
            <Pagination onPageChange={(page) => fetchMore({ variables: { page: page, name: searchText } })} totalCountOfRegisters={data?.episodes.info.count as number} registersPerPage={20} currentPage={currentPage} />
          </Flex>
        )
      }
    </>
  )
}