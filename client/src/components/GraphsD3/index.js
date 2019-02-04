import React, { Component } from 'react'
import BarChart from './BarChart'
class GraphsD3 extends Component {
   render() {
   return (
      <div className='App'>
      <div className='App-header'>
      <h2>User Stats</h2>
      </div>
      <div>
      <BarChart data={[5,10,1,3]} size={[500,500]} />
      </div>
      </div>
   )
   }
}
export default GraphsD3