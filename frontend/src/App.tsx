/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import UploadView from './views/UploadView';
import UsersView from './views/UsersView';
import { useUsers } from './services/useUsers';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const { data } = useUsers(debouncedSearchTerm);
  const [isShowFile, setIsFile] = React.useState<boolean>(false);
  const [isData, setIsData] = React.useState<boolean>(true);
  console.log('searchTerm', searchTerm)
  useEffect(() => {
    if (data?.length === 0) {
      setIsData(false);
    }
  }, [])
  return (
    <Box bg="gray.900" h="100vh" color="white" px="20">
      <Box h="100%" bg="gray.800">

        {isShowFile || !isData ? <UploadView setIsFile={setIsFile} />
          : <UsersView 
              data={data} 
              setIsFile={setIsFile} 
              setSearchTerm={setSearchTerm} 
              searchTerm={searchTerm}
              setDebouncedSearchTerm={setDebouncedSearchTerm} 
            />}
      </Box>
    </Box>
  );
}

export default App;
