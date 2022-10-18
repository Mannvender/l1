import { Box, Flex, Heading, Link, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import {
  FcPieChart,
  FcAddressBook,
  FcAreaChart,
  FcApproval,
  FcBriefcase,
} from "react-icons/fc";

const getStats = (colors, fontSizes) => [
  {
    icon: <FcBriefcase color={colors.dark} size={fontSizes[9]} />,
    value: 2222,
    label: "loopys",
  },
  {
    icon: <FcApproval color={colors.dark} size={fontSizes[9]} />,
    value: "0.01 ETH",
    label: "Pre Sale",
  },
  {
    icon: <FcAreaChart color={colors.dark} size={fontSizes[9]} />,
    value: "0.02 ETH",
    label: "Public Sale",
  },
  {
    icon: <FcPieChart color={colors.dark} size={fontSizes[9]} />,
    value: "2 ETH",
    label: "Total funds",
  },
  {
    icon: <FcAddressBook color={colors.dark} size={fontSizes[9]} />,
    value: 690,
    label: "Whitelists",
  },
];

const Stats = () => {
  const { colors, fontSizes } = useTheme();
  return (
    <Flex
      py={[5, 7, 7]}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Heading
        color={colors.dark}
        fontSize={[fontSizes[7], fontSizes[9]]}
        textAlign="center"
      >
        Summit 1 in Numbers
      </Heading>
      <Flex
        mt={[5, 6, 6]}
        justifyContent="space-evenly"
        width={["100%"]}
        px={[4, 5, 6]}
        flexWrap="wrap"
      >
        {getStats(colors, fontSizes).map((stat) => (
          <Flex
            mb={[4, 0, 0]}
            flexDirection="column"
            alignItems="center"
            flex="1"
            flexBasis={["100%", 1 / 5]}
          >
            {stat.icon}
            <Heading
              color={colors.dark}
              fontSize={[fontSizes[7]]}
              textAlign="center"
            >
              {stat.value}
            </Heading>
            <Text color={colors.dark} mt={[1, 2, 2]}>
              {stat.label}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Stats;
