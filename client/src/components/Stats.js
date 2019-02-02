import React from "react";
import { Segment, Statistic } from "semantic-ui-react";

const Stats = ({ value, label }) => (
  <Statistic style={{overflow:"hidden", width:"50%"}} >
    <Statistic.Value>{value} </Statistic.Value>
    <Statistic.Label>{label}</Statistic.Label>
  </Statistic>
);

export default Stats;
