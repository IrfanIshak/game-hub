import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Screenshot 2024-06-20 180010.png";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" m={2}></Image>
      <Text> NavBar </Text>
    </HStack>
  );
};

export default NavBar;
