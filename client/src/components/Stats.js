import React from 'react'
import { Segment, Statistic } from 'semantic-ui-react'

const Stats = (props) => (
  <Segment inverted>
    <Statistic.Group inverted>
      <Statistic >
        <Statistic.Value>{props.value} </Statistic.Value>
        <Statistic.Label>{props.label}</Statistic.Label>
      </Statistic>
    </Statistic.Group> 
  </Segment>
)

export default Stats