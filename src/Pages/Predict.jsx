import { Box, Flex, Input, Stack, VStack,Text, Button, Divider, IconButton, Heading, Tag, Progress, Show } from '@chakra-ui/react'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { Colors } from '../Utils'

export default function Predict() {
  return (
   <VStack minW={'full'} spacing={10} flexWrap="wrap">
        {/* user input form */}
        <Box display={"flex"} justifyContent="space-around"  minW={"full"}  borderWidth={1} borderTopWidth={30} borderColor={Colors.primary}  overflowWrap="anywhere" flexWrap={"wrap"}>
                <Stack p={12} flex={1} >
                    <Text>Compound in SMILES notations</Text>
                     <Input type={"text"} placeholder='CCN(CC)CCCC(C)NC1=C2C=CC(=CC2=NC=C1)Cl
' />
                    <Button w={"fit-content"} bg={Colors.primary} color={'#fff'} >Submit</Button>
                </Stack>
                <Show above="md" >
                     <Divider orientation='vertical' />
                </Show>
                <Stack p={12} flex={1} >
                    <Text>Text file of SMILES notations</Text>
                     <Input type={"file"}  />
                      <Flex justifyContent={'space-between'}>
                            <Button w={"fit-content"} bg={Colors.primary} color={'#fff'} >Upload</Button>
                            <Button variant={"ghost"}  rightIcon={<FaDownload/>}>Download Results</Button>
                      </Flex>      
                </Stack>

        </Box>
        {/* Result display */}
        <VStack minW={"full"} borderWidth={1} borderTopWidth={30} borderColor={Colors.primary} p={12} spacing="10"  align={"flex-start"} flexWrap={"wrap"} >
            <Flex >
                <Heading size={"sm"}>Prediction</Heading>
                <Tag ms={10}>Active</Tag>
            </Flex>
           <Flex minW={'full'} align="center">
             <Heading mt={7} mr={2} size={"sm"}>Confidence</Heading>
              <Stack minW={'70%'} >
                    <Text fontWeight={"semibold"} align="end">90%</Text>
                    <Progress borderRadius={"md"} size='sm' value={90} minW="full"/>
              </Stack>
           </Flex>

        </VStack>


   </VStack>
  )
}
