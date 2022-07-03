import { VStack,Tag, Text, Box, Divider,Flex, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import {legonLogo, waccBipLogo } from '../Assets'

export default function About() {
  return (
    <VStack minW={"full"} align={"flex-start"} spacing={"10"} >

            <Tag size={"lg"} >Developers</Tag>
            <Box>
                <Text>Samuel Kojo Kwofie, PhD</Text>
                <Text>Email: Skwofie2000@gmail.com</Text>
            </Box>

            <Box>
                <Text>Issah Abubakari Samori</Text>
                <Text>Email: issahsamori@gmail.com</Text>
            </Box>
            <Divider/>
            <Tag size={"lg"} >Affiliations</Tag>
             <Flex flexWrap={"wrap"}>
                <Box display={"flex"} pt="3">
                      <Image src={legonLogo} width={55} height={55}   />      
                      <Heading  maxW={60} size="md" >{`Department of  Biomedical Engineering`}</Heading>     
                </Box>
      
                   <Image src={waccBipLogo} width={170} height={100} ms={12}/>      
                
            </Flex>
    </VStack>
  )
}
