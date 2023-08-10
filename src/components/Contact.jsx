
import { Box ,VStack,Text,Button } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
     <Box id="con" bgColor={"blackAlpha.900"} p={"3"}>     
        <VStack> 
        <Text fontWeight={"bold"}>Contact Us</Text>
        </VStack>
        <VStack> 
        <Button color={"blue"} fontWeight={"bold"}></Button>
        </VStack>
        <VStack> 
        <Button color={"blue"} fontWeight={"bold"}>FACEBOOK</Button>
        </VStack>
        <VStack> 
        <Button color={"blue"} fontWeight={"bold"}>YOUTUBE</Button>
        </VStack>
        <VStack> 
           <Button color={"blue"} fontWeight={"bold"}>Phone Number=xxx</Button>
        </VStack>
   

     </Box>
  )
}

export default Contact