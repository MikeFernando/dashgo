import {
   Box,
   Flex,
   Heading,
   Button,
   Icon,
   Table,
   Thead,
   Tr,
   Th,
   Checkbox,
   Tbody,
   Td,
   Text
} from '@chakra-ui/react'
import { RiAddLine, RiEditLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

export default function UsersList() {
   return (
      <Box>
         <Header />
         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <Box flex="1" my="6" borderRadius={8} bg="gray.800" p="8">
               <Flex mb="8" justify="space-between" align="center">
                  <Heading size="lg" fontWeight="normal">Listagem de usuários</Heading>

                  <Button
                     as="a"
                     size="sm"
                     fontSize="sm"
                     colorScheme="pink"
                     leftIcon={<Icon as={RiAddLine} size="20" />}>
                     Criar novo
                  </Button>
               </Flex>

               <Table colorScheme="whiteAlpha">
                  <Thead>
                     <Tr>
                        <Th px="6" color="gray.300" width="8">
                           <Checkbox colorScheme="pink" />
                        </Th>
                        <Th>usuários</Th>
                        <Th>Data de cadastro</Th>
                        <Th width="8"></Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Tr>
                        <Td px="6">
                           <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                           <Box>
                              <Text fontWeight="bold">Mike Fernando</Text>
                              <Text fontWeight="noraml" fontSize="sm" color="gray.300">Mikera2021@outlook.com</Text>
                           </Box>
                        </Td>
                        <Td>11 de Jun, 2021</Td>
                        <Td>
                           <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={<Icon as={RiEditLine} size="20" />}>
                              editar
                           </Button>
                        </Td>
                     </Tr>
                  </Tbody>
               </Table>
               <Pagination />
            </Box>
         </Flex>
      </Box>
   )
}
