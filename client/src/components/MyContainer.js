import * as React from 'react'
import PoseNet from './PoseNet'

const MyContainer = (props) => (
  <div>
    <h3>This is my container</h3>
    <PoseNet 
      videoWidth={props.width} 
      videoHeight={props.height} 
      skeletonColor={props.color} />
  </div>
)

export default MyContainer