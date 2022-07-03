import { Flex, VStack,Text, Heading, Image, Box, ListItem, List, Button, Stack, Show, Switch, Divider } from '@chakra-ui/react'
import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logo, textLogo } from '../Assets';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { About, HomePages, Predict } from '../Pages';
import { AppRoutes,Colors,isSelectedRoute } from '../Utils';

export default function HomeLayout() {
  const loc= useLocation();
  const navigate = useNavigate();

  const routes = [
    {
      label:'Home',
      path:AppRoutes.home.path,
      title:AppRoutes.home.title
    },
    {
      label:'Predict',
      path:AppRoutes.predict.path,
      title:AppRoutes.predict.title
    },
    {
      label:'About',
      path:AppRoutes.about.path,
      title:AppRoutes.about.title
    },
  ]
  
  const handleNavigate = (path,data) =>{
    navigate(path,{replace:true,state:{...data}})
  }

  return (
    <VStack minW={"full"}  minH="full">
        <Flex  justifyContent={"space-between"} align="center" minW="full" height={"90"} shadow='md' borderWidth='0px' flexWrap={'wrap'} >
              <Stack bg={Colors.primary} minH={'full'} minW={"2xs"} direction={['column']} align="center" spacing='-16px' pt={"5"} >
                  <Image src={logo} width={70} mr="12"/>
                  <Image src={textLogo} width={160} />
               </Stack>
           <Show above='md'><Heading pl="10" flex={1} size={"md"} >{loc.state?.title}</Heading></Show>
           <Show above='md'> <ColorModeSwitcher/></Show>
        </Flex>
       <Flex minW={"full"}  minH="90vh" style={{ marginTop:0 }} >
            <Show above='md'>
              <VStack color={"#fff"} bg={Colors.primary} minH="full" minW="2xs">
                    
                    {
                      routes?.map((val,index,arr)=> <Button key={`side-menu-${index}`} bg={Colors.primary} onClick={()=>handleNavigate(val?.path,{title:val?.title})} isActive={isSelectedRoute(val.path,loc?.pathname)} _hover={{ backgroundColor:Colors.highlightedMenu }} _active={{ backgroundColor:Colors.highlightedMenu, borderRadius:0.5 } } minW={"full"} >{val?.label}</Button>)
                    }

              </VStack>
            </Show>
            <Show above='md'>
              <VStack flex={1} p="10">
                        <Outlet />

              </VStack>
            </Show>
            <Show below='md' >
                  <VStack  flex={1} p="10" spacing={16} >
                    <HomePages/>
                    <Divider/>
                    <Predict/> 
                    <Divider/>
                    <About/> 
                  </VStack> 
            </Show>
       </Flex>
    </VStack>
  )
}
