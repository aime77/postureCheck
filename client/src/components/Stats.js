import React from 'react'
import { Segment, Statistic } from 'semantic-ui-react'

const Stats = ({props}) => (
  <Segment inverted>
    <Statistic.Group inverted>
      <Statistic >
        <Statistic.Value >12</Statistic.Value>
        <Statistic.Label>Time Left</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>2</Statistic.Value>
        <Statistic.Label>Points</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>3</Statistic.Value>
        <Statistic.Label>Exercises Left</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </Segment>
)

export default Stats