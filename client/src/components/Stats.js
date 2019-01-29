import React from 'react'
import { Segment, Statistic } from 'semantic-ui-react'

const Stats = ({value, label}) => (
  <Segment inverted>
    <Statistic.Group inverted>
      <Statistic >
        <Statistic.Value style={{fontSize:"60px"}}>{value} </Statistic.Value>
        <Statistic.Label>{label}</Statistic.Label>
      </Statistic>
    </Statistic.Group> 
  </Segment>
)

export default Stats