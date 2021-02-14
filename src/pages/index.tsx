import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { ArticleComponent, Paneru } from '../components/ArtcleComponent'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <ArticleComponent/>
    
  </Container>
)

export default Index
