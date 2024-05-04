import React from 'react'
import { Box, Button, Flex, FormControl, Input, Text, useToast } from '@chakra-ui/react'
import httpClientFormData from '../api/httpClientFormData';
import { CloseIcon } from '@chakra-ui/icons'

const UploadView = ({ setIsFile }: any) => {
  const [file, setFile] = React.useState<String>('');
  const [isLoadingUploaded, setIsLoadingUploaded] = React.useState<boolean>(false);
  const toast = useToast()

  const handleFileInputChange = async (event: any) => {
    event.preventDefault();
    const file = event?.target?.files[0];
    setFile(file?.name);
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setIsLoadingUploaded(true);
    try {
      await httpClientFormData.post(
        "api/v1/files",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast({
        title: `Archivo subido correctamente🥳`,
        status: 'success',
        isClosable: true,
      })
      setIsLoadingUploaded(false);
      setFile('');
      event.target.value = null;
    } catch (error) {
      setIsLoadingUploaded(false);
      toast({
        title: "Error al subir archivo🥲",
        status: 'error',
        isClosable: true,
      })

    }
  };

  return (
    <>
      <Flex justifyContent={"flex-end"} align="center" pt={4} pr={4}>
        <Button colorScheme="green"
          variant={'outline'}
          leftIcon={<CloseIcon  m={0} />}
          m={0}
          onClick={() => setIsFile(false)} />
      </Flex>

      <Flex justifyContent={"center"} align="center" flexDirection={"column"} h="90%">
        <Box color="white" w="100%">
          <FormControl display="flex" flexDirection={"column"} alignItems={"center"} justifyContent={"center"} w="100%">
            <Input type="file" style={{ display: 'none' }} id="file-upload"
              accept='.csv'
              onChange={handleFileInputChange}
            />
            <label htmlFor="file-upload">
              <Button as="span" bg="green.300" color="green.900"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("file-upload")
                    ?.click();
                }}
                isLoading={isLoadingUploaded}
              >
                Upload File
              </Button>
            </label>
          </FormControl>

          <Box mt="4" display="flex" flexDirection={"column"} alignItems={"center"} justifyContent={"center"} w="100%">
            <Text>{file && !isLoadingUploaded ? file : "not selected file"}</Text>
            {isLoadingUploaded && <Text>Uploading...</Text>}
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default UploadView