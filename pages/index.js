import React, { useRef } from "react";
import { Box, Flex, Heading, Text } from "rebass";
import Header from "components/Header";
import Banner from "components/Banner";
import Quote from "components/Quote";
import Contact from "components/Contact";
import Services from "components/Services";
import Navbar from "components/Navbar";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import Slider from "components/Slider";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
const BannerImageContainer = styled(Box)`
  position: relative;
  top: 100%;
  left: 35%;
  transform: translateY(-620px);
  @media (min-width: 1000px) {
    left: 50%;
  }
`;

const Index = () => {
  const { colors } = useTheme();
  return (
    <>
      <Navbar />
      <Banner />
      <BlackStrip />
      <Slider />
      <BlackStrip />
    </>
  );
};

const BlackStrip = () => {
  const { colors } = useTheme();
  return <Box height={["56px"]} bg={colors.dark} width={["100%"]}></Box>;
};

export default Index;
