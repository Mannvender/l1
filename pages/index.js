import React from "react";
import { Box } from "rebass";
import Banner from "components/Banner";
import Navbar from "components/Navbar";
import styled, { useTheme } from "styled-components";
import Slider from "components/Slider";

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
