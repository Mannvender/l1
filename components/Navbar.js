import { Flex, Text, Link, Box, Heading } from "rebass";
import { SiDiscord } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { useTheme } from "styled-components";
import { isMobile } from "react-device-detect";

function Navbar() {
  const { colors } = useTheme();
  return (
    <Flex
      p={4}
      color={colors.light}
      bg={colors.dark}
      alignItems="center"
      justifyContent="center"
    >
      <Heading fontWeight="bold" fontSize={[5, 8, 8]}>
        l1 L00PY
      </Heading>
      <Box mx="auto" />
      <Link variant="nav" href="#!" mr={4}>
        <SiDiscord size={isMobile ? 36 : 80} />
      </Link>
      <Link variant="nav" href="#!">
        <FaTwitter size={isMobile ? 36 : 80} />
      </Link>
    </Flex>
  );
}

export default Navbar;
