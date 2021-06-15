import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
   return (
      <Flex align="center">
         <Box mr="4" textAlign="right">
            <Text>Mike Fernando</Text>
            <Text color="gray.300" fontSize="small">
               Mikera2021@outlook.com
            </Text>
         </Box>

         <Avatar size="md" name="Mike Fernando" src="https://github.com/MikeFernando.png" />
      </Flex>
   )
}
