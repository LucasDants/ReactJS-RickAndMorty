import { useQuery } from "@apollo/client";
import { Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { EpisodeCard } from "../../components/EpisodeCard";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { EpisodesData, EpisodesVars, GET_EPISODES } from "../../services/getEpisodes";

export function Episodes() {
  const { loading, data, fetchMore, error, variables } = useQuery<EpisodesData, EpisodesVars>(GET_EPISODES, { variables: { page: 1 } })
  const [searchText, setSearchText] = useState('')

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
            <Pagination onPageChange={(page) => fetchMore({ variables: { page: page } })} totalCountOfRegisters={data?.episodes.info.count as number} registersPerPage={20} currentPage={variables.page} />
            <SimpleGrid minChildWidth={220} pt={10} spacingY={6}>
              {
                data?.episodes.results.map(character => <EpisodeCard key={character.id} data={character} />)
              }
            </SimpleGrid>
            <Pagination onPageChange={(page) => fetchMore({ variables: { page: page } })} totalCountOfRegisters={data?.episodes.info.count as number} registersPerPage={20} currentPage={variables.page} />
          </Flex>
        )
      }
    </>
  )
}