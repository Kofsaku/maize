import { Flex, Text, Stack, Box, Heading,Tag, Alert, AlertIcon, AlertDescription, AlertTitle, } from '@chakra-ui/react'

export const Paneru = () => (
     <Stack>
       <Box
         backgroundColor="white"
         boxShadow="sm"
         borderRadius="lg"
         pl={3}
         pr={3}
         pt={5}
         pb={5}
       >
         <Flex
           display="flex"
           flexDirection="row"
           alignItems="center"
           justifyContent="flex-start"
           pb={2}
         >

           <Heading
             size="md"
             as="h2"
             lineHeight="shorter"
             fontWeight="bold"
             fontFamily="heading"
           >
             Component Panel
           </Heading>
         </Flex>
         <Stack ml={4} spacing={2} mt={4} mr={4}>
           <Stack justifyContent="flex-start" alignItems="flex-start" spacing={2}>
             <Tag
               size="md"
               variant="subtle"
               colorScheme="whatsapp"
               borderRadius="sm"
               fontSize="sm"
             >
               Drag and Drop!
             </Tag>
             <Text fontSize="md" color="gray.600">
               Drag any component from the left hand panel into this editor. Then
               start interacting with them: try to drop the Avatar component in
               this box…
             </Text>
             <Box
               width="200px"
               display="block"
               flexDirection="column"
               alignItems="flex-start"
               justifyContent="flex-start"
               backgroundColor="gray.100"
               borderRadius="lg"
               p={3}
               minHeight="60px"
             />
           </Stack>
           <Stack spacing={2}>
             <Tag size="md" variant="subtle" colorScheme="whatsapp">
               Preset
             </Tag>
             <Text color="gray.600">
               A preset is a group of components (like Alert). Just drop a preset
               to easily setup a complexe component like this:
             </Text>
           </Stack>
           <Alert variant="left-accent" status="success">
             <AlertIcon />
             <AlertTitle mr={1}>Alert!</AlertTitle>
             <AlertDescription>I'm an Alert preset</AlertDescription>
           </Alert>
         </Stack>
       </Box>
     </Stack>
)
   
Paneru.defaultProps = {
     title: 'with-chakra-ui-typescript',
}
   