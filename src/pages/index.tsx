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
import { Paneru } from '../components/Paneru'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Paneru/>
    
  </Container>
)

export default Index
