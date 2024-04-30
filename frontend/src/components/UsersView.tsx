import { useState } from 'react'
import { Box, Flex, Grid, Heading, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
const DATA = [
  {
    "phone": "0987654321",
    "address": "456 Maple Ave",
    "career": "Data Science",
    "description": "Data Scientist",
    "last_name": "Smith",
    "name": "Jane",
    "id": "66306393bfb2302033613432"
  },
  {
    "phone": "1122334455",
    "address": "789 Oak Dr",
    "career": "Information Technology",
    "description": "Web Developer",
    "last_name": "Johnson",
    "name": "Bob",
    "id": "66306393bfb2302033613431"
  },
  {
    "phone": "1234567890",
    "address": "123 Main St",
    "career": "Computer Science",
    "description": "Software Engineer",
    "last_name": "Doe",
    "name": "John",
    "id": "66306393bfb2302033613433"
  },
  {
    "phone": "2233445566",
    "address": "654 Elm St",
    "career": "Software Engineering",
    "description": "Systems Analyst",
    "last_name": "Brown",
    "name": "Charlie",
    "id": "66306393bfb230203361343b"
  },
  {
    "phone": "5566778899",
    "address": "321 Pine Ln",
    "career": "Computer Engineering",
    "description": "Database Administrator",
    "last_name": "Williams",
    "name": "Alice",
    "id": "66306393bfb230203361343a"
  }
]
const UsersView = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Box h="90%" px="10px">
      <Heading as="h1" size="2xl" pt={10} mb="10">Users</Heading>

      <Flex alignItems={"flex-end"} w="100%" mb={6} >
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input type="text" placeholder="Search" onChange={handleSearchChange} border="1px solid" w="20%"
            borderColor="green.800" bg="gray.700" color="white"
          />
        </InputGroup>
      </Flex>
      <Grid templateColumns='repeat(5, 1fr)' gap={3}>
        {DATA.map((user) => (
          <Box key={user.id} border={'1px solid'} borderColor="green.400" bg="gray.700" px="10px" py="10px" boxShadow="lg" borderRadius={10}>
            <Text>{user.name} {user.last_name}</Text>
            <Text>{user.description}</Text>
            <Text>{user.career}</Text>
            <Text>{user.phone}</Text>
            <Text>{user.address}</Text>
          </Box>
        ))
        }
      </Grid >
    </Box >
  )
}

export default UsersView
