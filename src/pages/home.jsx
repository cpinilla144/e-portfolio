import React from "react";
import Discounted from "../components/discounted";
import Explore from "../components/explore";
import Featured from "../components/featured";
import Highlights from "../components/highlights";
import Landing from "../components/landing";

const home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};
export default home;
