import React from "react";
import { Flex, Heading, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import Button from "components/Button";

const StyledHeading = styled(Heading)`
  text-shadow: -0.0625em 0.0625em 0px ${(props) => props.theme.colors.light},
    calc(-0.0625em - 0.025em) calc(0.0625em + 0.025em) 0px
      ${(props) => props.theme.colors.primary};
`;

const Banner = ({ onCtaClick }) => {
  const { colors } = useTheme();
  return (
    <Flex
      py={[5, 7, 7]}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <StyledHeading
        textAlign="center"
        color={colors.dark}
        fontSize={["100px", "120px", "180px"]}
      >
        Layer1 Loopy Club
      </StyledHeading>
      <Text
        fontWeight="bold"
        mt={[5]}
        px={[4]}
        fontSize={[3]}
        color={colors.dark}
        textAlign="center"
        width={["auto", "auto", "1024px"]}
      >
        A community of loopring enthusiasts who wanna share the cost, security &
        speed benefits of layer1 with the bigger ETHEREUM community at large &
        wanna bring to notice to a larger subset of NFT enthusiasts the upcoming
        ZK Rollup EVM upgrades & more
      </Text>
      <Button mt={[5]} fontWeight="bold" fontSize={[5]} px={[4]} py={[3]}>
        Pre Sale Coming Soon
      </Button>
    </Flex>
  );
};

export default Banner;
