import { Box, Flex, Input, Stack, VStack,Text, Button, Divider, Heading, Tag, Progress, Show,StatGroup,Stat,StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow } from '@chakra-ui/react'
import React, { useState } from 'react'
// import { useEffect } from 'react';
import { FaDownload } from 'react-icons/fa'
import { apiService } from '../Services/ApiServices';
import { Colors } from '../Utils'

export default function Predict() {
  const [isLoading,setLoading] = useState(false);
  const [isDone,setDone] = useState(false);
  const [compound,setCompound] = useState('');
  const [file,setFile] = useState();
  const [fileDataResult,setFileDataResult] = useState([]);

  const toggleLoading = (val) => {
    setLoading((_prev)=>(val));
    if(val === true){
      setFileDataResult((_prev)=>([]))
    }
  }
  const toggleDone = (val) => setDone((_prev)=>(val))

  const handleCompoundSubmit = async () => {
    toggleLoading(true);
    toggleDone(false);
    const result = await apiService.postCompound({cpd:compound});
    if(result?.success === true){
      const _data = result?.data;
      const _formattedData = [];
      _formattedData.push({
        compound:compound,
        confidence:parseFloat(parseFloat(`${_data?.confidence || 0}`)*100).toFixed(0),
        prediction:parseInt(`${_data?.prediction || 0}`,10) === 1,
    })
    setFileDataResult((_prev)=>(_formattedData))
    }
    toggleLoading(false);
    toggleDone(true);
  }

  const handleFileSubmit = async () => {
    toggleLoading(true);
    toggleDone(false);
    const result = await apiService.postFile({cpd:file});
    if(result?.success === true){
      const _data = result?.data;
      const _formattedData = [];
      for (let _index = 0; _index < _data?.compound?.length; _index++) {
        _formattedData.push({
            compound:_data?.compound[_index],
            confidence:parseFloat(parseFloat(`${_data?.confidence[_index] || 0}`)*100).toFixed(0),
            prediction:parseInt(`${_data?.prediction[_index] || 0}`,10) === 1,
        })
      }
      setFileDataResult((_prev)=>(_formattedData))
      // setData(_data?.confidence,_data?.prediction);
    }
    toggleLoading(false);
    toggleDone(true);
  }

  const changeCompound = (e) => setCompound((_prev)=>(e?.target?.value))
  const changeFile = (e) => setFile((_prev)=>(e.target.files[0]))



  return (
   <VStack minW={'full'} spacing={10} flexWrap="wrap">
        {/* user input form */}
        <Box display={"flex"} justifyContent="space-around"  minW={"full"}  borderWidth={1} borderTopWidth={30} borderColor={Colors.primary}  overflowWrap="anywhere" flexWrap={"wrap"}>
                <Stack p={12} flex={1} >
                    <Text>Compound in SMILES notations</Text>
                     <Input onChange={changeCompound} type={"text"} placeholder='CCN(CC)CCCC(C)NC1=C2C=CC(=CC2=NC=C1)Cl
'       />
                    <Button isLoading={isLoading} onClick={handleCompoundSubmit} w={"fit-content"} bg={Colors.primary} color={'#fff'} >Submit</Button>
                </Stack>
                <Show above="md" >
                     <Divider orientation='vertical' />
                </Show>
                <Stack p={12} flex={1} >
                    <Text>Text file of SMILES notations</Text>
                     <Input type={"file"} onChange={changeFile}   />
                      <Flex justifyContent={'space-between'}>
                            <Button isLoading={isLoading} onClick={handleFileSubmit} w={"fit-content"} bg={Colors.primary} color={'#fff'} >Upload</Button>
                            {/* <Button variant={"ghost"}  rightIcon={<FaDownload/>}>Download Results</Button> */}
                      </Flex>      
                </Stack>

        </Box>
        {/* Result display */}

      
     { !isLoading && isDone &&
          <VStack minW={"full"} borderWidth={1} borderTopWidth={30} borderColor={Colors.primary} p={12} spacing="10"  align={"flex-start"} flexWrap={"wrap"} >  
            <VStack textAlign={"left"} >
               <Heading>Result</Heading>
                <StatGroup  >

                  { fileDataResult?.map((val,index,arr)=> <Stat mr={5}>
                      <StatLabel>{val?.compound}</StatLabel>
                      <Tag colorScheme={val?.prediction ? "green" :"gray"} >{val?.prediction ? "Active" :"Inactive"}</Tag>
                      <StatHelpText>
                        <StatArrow type={val?.prediction ? "increase" : "decrease"} />
                        {val?.confidence}% {"  Confidence"}
                      </StatHelpText>
                    </Stat>
                   )}

                  </StatGroup>
              
              
            </VStack>
          </VStack>
}
           
          
   </VStack>
  )
}
