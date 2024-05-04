/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Box, Button, Flex, Grid, Heading, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';


const UsersView = ({ data, setIsFile, setSearchTerm, searchTerm, setDebouncedSearchTerm }: any) => {
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  return (
    <Box h="90%" px="10px">
      <Heading as="h1" size="2xl" pt={10} mb="10">Users</Heading>

      <Flex alignItems={"flex-end"} justifyContent="space-between" w="100%" mb={6} >
        <Box display="flex" >
          <InputGroup w="95%">
            <InputLeftElement pointerEvents='none'>
              <SearchIcon color='gray.300' />
            </InputLeftElement>
            <Input type="text" placeholder="Search" onChange={handleSearchChange} value={searchTerm || ''} border="1px solid" w="100%"
              borderColor="green.800" bg="gray.700" color="white"
            />
          </InputGroup>
          {searchTerm && <Button ml={1} colorScheme="green" leftIcon={<CloseIcon />} variant={"gosht"} onClick={() => setSearchTerm('')} />}
        </Box>

        <Button ml={4} colorScheme="green"
          variant={'outline'}
          onClick={() => setIsFile(true)}>Subir mas data</Button>
      </Flex>
      {data?.length > 0 ? <Grid templateColumns='repeat(5, 1fr)' gap={3}>
        {data?.map((user: any) => (
          <Box key={user.id} border={'1px solid'} borderColor="green.400" bg="gray.700" px="10px" py="10px" boxShadow="lg" borderRadius={10}>
            <Text>{user.name} {user.last_name}</Text>
            <Text>{user.description}</Text>
            <Text>{user.career}</Text>
            <Text>{user.phone}</Text>
            <Text>{user.address}</Text>
          </Box>
        ))
        }
      </Grid > : <Flex justifyContent={"center"} alignItems={"center"}>
        <Text>No se encontro user </Text></Flex>}
    </Box >
  )
}

export default UsersView
