import React from "react";

import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/ChartsContainer";
import BarChart from "./BarChart";

const ChartsContainer = () => {
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <BarChart data={data} />
    </Wrapper>
  );
};

export default ChartsContainer;
