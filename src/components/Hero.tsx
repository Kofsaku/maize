import { Flex, Text, Badge} from '@chakra-ui/react'

export const Hero = () => (
  <Flex
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    mt={4}
  >
    <Flex
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Text fontSize="3xl" fontWeight="bold">
        🌽Wecome to Maize🌽
      </Text>
      <Badge variant="subtle" colorScheme="pink" ml={1}>
        BETA
      </Badge>
    </Flex>
    <Text color="gray.500">Stimulate your Curiosity and Ambition</Text>
  </Flex>
)

Hero.defaultProps = {
  title: 'with-chakra-ui-typescript',
}