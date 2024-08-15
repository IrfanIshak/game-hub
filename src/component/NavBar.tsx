import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Screenshot 2024-06-20 180010.png";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" m={2}></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
