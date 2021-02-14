import { Grid, Box, Flex, Heading, Stack, Tag, Text, Link, } from '@chakra-ui/react'



export const ArticleComponent= () => (
  <Grid p={10} gap={20} templateColumns="repeat(auto-fit, minmax(350px, 1fr))">
    <Box >
      <Box backgroundColor="white" borderRadius="lg" boxShadow="sm" pl={3} pr={3} pt={5} pb={5} >
        <Flex display="flex" flexDirection="row" alignItems="space-around" justifyContent="center" >
          <Heading p={1} size="md" as="h2" lineHeight="shorter" fontWeight="bold" fontFamily="heading">
            最近の記事
          </Heading>
        </Flex>

        <Stack p={1} spacing={4} ml={4} mt={4}>
          <Stack spacing={2} borderRadius="30px" border="solid 1px" overflow="hidden">
          <Tag borderRadius="100px" mt={2} ml={1} pl={3} pt={1} size="md" variant="subtle" colorScheme="yellow" display="inline"  pr={2}>
              開発
              </Tag>
            <Heading pl={3} as="h3" overflow="visible" size="md">
              Chakra Uiを使ってブログを作ってみました。
            </Heading>
            <Text pl={3} color="gray.600">
              見た目を常に確認しながら進められるので安心感がすごい
            </Text>
            <Link pl={3} pb={3} >もっと記事を読む</Link>
          </Stack>

          <Stack spacing={2} borderRadius="30px" border="solid 1px" overflow="hidden">
            <Tag borderRadius="100px" bgSize={100} mt={2} ml={1} pl={3} pt={1} size="md" variant="subtle" colorScheme="yellow" display="inline" mr={300} pr={2}>
              開発
              </Tag>
            <Heading pl={3} as="h3" overflow="visible" size="md">
              Chakra Uiを使ってブログを作ってみました。
            </Heading>
            <Text pl={3} color="gray.600">
              見た目を常に確認しながら進められるので安心感がすごい
            </Text>
            <Link pl={3} pb={3} >もっと記事を読む</Link>
          </Stack>

          <Stack spacing={2} borderRadius="30px" border="solid 1px" overflow="hidden">
            <Tag borderRadius="100px" bgSize={100} mt={2} ml={1} pl={3} pt={1} size="md" variant="subtle" colorScheme="yellow" display="inline" mr={300} pr={2}>
              開発
              </Tag>
            <Heading pl={3} as="h3" overflow="visible" size="md">
              Chakra Uiを使ってブログを作ってみました。
            </Heading>
            <Text pl={3} color="gray.600">
              見た目を常に確認しながら進められるので安心感がすごい
            </Text>
            <Link pl={3} pb={3} >記事の続きを読む</Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
    <Box>
      <Box
        backgroundColor="white"
        borderRadius="lg"
        boxShadow="sm"
        pl={3}
        pr={3}
        pt={5}
        pb={5}
      >
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Heading
            size="md"
            as="h2"
            lineHeight="shorter"
            fontWeight="bold"
            fontFamily="heading"
          >
            Chakra UIを使ってブログを作ってみました。
          </Heading>
        </Flex>
        <Stack spacing={4} ml={4} mt={4}>
        <Stack spacing={2} borderRadius="30px" border="solid 1px" overflow="hidden">
          <Tag borderRadius="100px" bgSize={100} mt={2} ml={1} pl={3} pt={1} size="md" variant="subtle" colorScheme="yellow" display="inline" mr={300} pr={2}>
              開発
              </Tag>
            <Heading pl={3} as="h3" overflow="visible" size="md">
              Chakra Uiを使ってブログを作ってみました。
            </Heading>
            <Text pl={3} color="gray.600">
              見た目を常に確認しながら進められるので安心感がすごい
            </Text>
            <Link pl={3} pb={3} >もっと記事を読む</Link>
          </Stack>
          <Stack spacing={2}>
            <Tag size="md" variant="subtle" colorScheme="yellow">
              英語学習
            </Tag>
            <Text color="gray.600">
              Reach the yellow bar on the top to delete, reset and access the
              Chakra doc of each component.
            </Text>
          </Stack>
          <Stack spacing={2}>
            <Tag size="md" variant="subtle" colorScheme="yellow">
              日常
            </Tag>
            <Text color="gray.600">
              By clicking on a component containing children, you will see a
              Children panel appearing on the right. It enables sorting the
              children.{' '}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
    <Box />
  </Grid>
)

ArticleComponent.defaultProps = {
  title: 'with-chakra-ui-typescript',
}



