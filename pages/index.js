import React from "react";
import { Box } from "rebass";
import Banner from "components/Banner";
import Navbar from "components/Navbar";
import { useTheme } from "styled-components";
import Slider from "components/Slider";
import Stats from "components/Stats";
import Timeline from "components/Timeline";

const Index = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BlackStrip />
      <Slider />
      <BlackStrip />
      <Stats />
      <BlackStrip />
      <Timeline />
    </>
  );
};

const BlackStrip = () => {
  const { colors, space } = useTheme();
  return <Box height={[space[6]]} bg={colors.dark} width={["100%"]}></Box>;
};

export default Index;
