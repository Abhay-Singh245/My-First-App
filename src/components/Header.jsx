import { Button, HStack ,Flex,Spacer,Image } from "@chakra-ui/react";
import React from "react";
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as Link} from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer"


const Header = () => {
  
  return (
    <Flex p={"4"}  shadow={"base"} bgColor={"Orange 200"} spacing={"4vw"} gap={"2.5vw"}>

       <Image
        borderRadius='full'
        boxSize='80px'
        left={"40px"}
        top={"70"}
       src='https://img.freepik.com/free-vector/gradient-crypto-mining-logo-template_23-2149390437.jpg?size=626&ext=jpg&ga=GA1.2.511390737.1691636690&semt=ais'
   />
       <Spacer left={"20"}/>
      <Button top={"2"}  variant={"unstyled"} color={" dark pink"}>
        <Link to="/">Home</Link>
      </Button>
      <Button  top={"2"}  variant={"unstyled"} color={" dark pink"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button  top={"2"}  variant={"unstyled"} color={" dark pink"}>
        <Link to="/coins">Coins</Link>
      </Button>
      <Button  top={"2"}  variant={"unstyled"} color={" dark pink"}>
      <ChakraLink as={ReactRouterLink} to='Contact'>
           Contact Us
         </ChakraLink>
      </Button>
    
      <Button top={"2"} right={"2"} variant={"unstyled"} color={" dark pink"}>
      <ChakraLink as={ReactRouterLink} to='Footer'>
        About Us
   </ChakraLink>
      </Button>
    </Flex>
  );
};

export default Header;