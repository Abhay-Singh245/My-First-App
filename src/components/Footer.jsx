import { Avatar, Box, Stack, Text, VStack,Image } from "@chakra-ui/react";
import React from "react";
import mypic from "../assets/mypic.jpg";
// const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      zIndex={"6"}
      px={"16"}
      py={["16", "8"]}
      id="foot"
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack bgColor={"none"} >
        <Image
        borderRadius='full'
        boxSize='80px'
        src='../assets/mypic.jpg'
     /> 
          <Text>Our Founder </Text>
        </VStack>

      </Stack>
       
     
    </Box>
  );
};

export default Footer;