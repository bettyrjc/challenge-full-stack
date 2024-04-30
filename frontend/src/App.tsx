import React from 'react';
import { Box } from '@chakra-ui/react';
import UploadView from './components/UploadView';
import UsersView from './components/UsersView';

function App() {
  return (
    <Box bg="gray.900" h="100vh" color="white" px="20">
      <Box h="100%" bg="gray.800">

        {/* <UploadView /> */}

        <UsersView />
      </Box>
    </Box>
  );
}

export default App;
