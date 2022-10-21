import { Flex, Heading, Text, Box } from "rebass";
import { useTheme } from "styled-components";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";
import { isMobile } from "react-device-detect";

function Timeline() {
  const [id, setId] = useState(null);
  const { colors, fontSizes, space } = useTheme();
  const _LIST = [
    {
      heading: "MOON LOUNGE",
      when: 10,
      subHeading: "FROM MOON TO URANUS",
      description:
        "A clubhouse of LRC enthusiasts discussing trades & plans for the moon trip",
    },
    {
      heading: "MERCH",
      when: 25,
      subHeading: "TEEING OF A FEW LRC UNDERPANTS",
      description: "& a few layer 2s above those",
    },
    {
      heading: "METAL PRINTS",
      when: 50,
      subHeading: "FEELS LIKE COCONUT & METAL",
      description: "50 metal prints will be shipped to our lucky HODLers",
    },
    {
      heading: "3D LOOPYS",
      when: 69,
      subHeading: "BEAUTIFUL, VIBRANT BERLIN",
      description: `made of food grade silicone, the 3d loopys will be available to each 
        & every HODLer a 3d file & a droplist of 69 prints from the house via
        raffles, giveaways & challenges to our community`,
    },
    {
      heading: "CRYPTO CORNER",
      when: 75,
      subHeading: "BEAUTIFUL, VIBRANT BERLIN",
      description:
        "Betting on the best & brightest projects with a 20% mint funds community wallet",
    },
    {
      heading: "RED CROSS CHARITY",
      when: 100,
      subHeading: "10% OF THE FUNDS GO TO RC CHARITY",
      description: `About 2-4 eth of the 22-44ETH project
        depending on the whitelist to public mint ratio
        Announcement of the 2nd stage of Loopy UranusMap`,
    },
  ];
  const handleClick = (i) => {
    if (id == i) setId(null);
    else setId(i);
  };
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Box bg={colors.primary} width={["100%"]} py={[4]}>
        <Heading
          color={colors.light}
          fontSize={[fontSizes[7], fontSizes[9]]}
          textAlign="center"
        >
          M00N MAP
        </Heading>
      </Box>
      {_LIST.map((item, i, list) => {
        const isExpanded = id === i;
        const isLast = list.length - 1 === i;
        return (
          <>
            <Flex
              width={["100%"]}
              px={[4, 6, 6]}
              py={[4]}
              sx={{
                cursor: "pointer",
                borderTop: `2px solid ${colors.dark}`,
                borderBottom:
                  isLast || isExpanded ? `2px solid ${colors.dark}` : 0,
              }}
              justifyContent={["space-between"]}
              alignItems={["center"]}
              onClick={() => handleClick(i)}
            >
              <Heading
                color={colors.dark}
                fontSize={[fontSizes[6], fontSizes[8], fontSizes[8]]}
                textAlign="left"
              >
                {item.heading}
              </Heading>
              {isExpanded ? (
                <HiChevronDoubleUp
                  size={isMobile ? fontSizes[6] : fontSizes[8]}
                  fill={colors.dark}
                />
              ) : (
                <HiChevronDoubleDown
                  size={isMobile ? fontSizes[6] : fontSizes[8]}
                  fill={colors.dark}
                />
              )}
            </Flex>
            {isExpanded && <ImageOverlay data={{ ...item, id: i }} />}
          </>
        );
      })}
    </Flex>
  );
}

const ImageOverlay = ({ data }) => {
  const { colors, fontSizes, space, shadows } = useTheme();
  return (
    <Box sx={{ position: "relative" }} height={[space[8]]} width={["100%"]}>
      <Image
        layout="fill"
        objectFit="cover"
        src={`/loopys/loopy_00${data.id + 1}.jpeg`}
        alt={`loopy ${data.id}`}
        quality="70"
        key={data.id}
      />
      <Flex
        flexDirection="column"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          background: colors.dark3,
        }}
        color={colors.light}
        px={[4, 6, 6]}
        height={["100%"]}
        width={["100%"]}
        justifyContent="center"
      >
        <Heading fontSize={[fontSizes[6], fontSizes[7], fontSizes[8]]}>
          {data.subHeading}
        </Heading>
        <Text fontSize={[fontSizes[6], fontSizes[6], fontSizes[7]]}>
          {data.description}
        </Text>
      </Flex>
    </Box>
  );
};

export default Timeline;
