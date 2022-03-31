import { Flex, SimpleGrid} from "@chakra-ui/react";
import { Card } from "./components/Card";

export function App() {
  return (    
   <Flex direction="column" alignContent="center" h="100vh">
     <SimpleGrid flex="1" minChildWidth={220} gap={["2","4"]} columns={4} px={[16, 32]} py={10}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
     </SimpleGrid>
   </Flex>
  );
}

