import React            from 'react';
import ReactBubbleChart from 'react-bubble-chart';

import {data} from "./data03.js"
import "./style.less"
import "./styleBubble.css"

var colorLegend = [
  //reds from dark to light
  {color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
  //neutral grey
  {color: "#f0f0f0", text: 'Neutral'},
  // blues from light to dark
  "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Positive', textColor: "#ffffff"}
];

var tooltipProps = [{
  css: 'symbol',
  prop: '_id'
}, {
  css: 'value',
  prop: 'value',
  display: 'Last Value'
}, {
  css: 'change',
  prop: 'colorValue',
  display: 'Change'
}];

const data=[{
  _id:"Jay",
  colorValue:-0.07944085908712871,
  value:324
},{
  _id:"Rachel",
  colorValue:-0.009495903024793365,
  value:241
},{
  _id:"Maggie",
  colorValue:0.04319046058653846,
  value:241
},{
  _id:"Aracei",
  colorValue:0.004815398261904765,
  value:207
},{
  _id:"Hillary",
  colorValue:-0.3686339492678572,
  value:197
},{
  _id:"Freya117",
  colorValue:0.10643388533181815,
  value:159
},{
  _id:"John",
  colorValue:0.24411120622222218,
  value:154
},{
  _id:"BJ",
  colorValue:-0.028494879556140353,
  value:153
},{
  _id:"Kevin",
  colorValue:0.050282342284210524,
  value:133
},{
  _id:"Arnold",
  colorValue:-0.22059138361538458,
  value:124
},{
  _id:"David",
  colorValue:-0.4091055542222222,
  value:108
},{
  _id:"Abdel",
  colorValue:-0.0147786997,
  value:102
},{
  _id:"Rahul Gandhi",
  colorValue:-0.018671950202173916,
  value:101
},{
  _id:"Vitter",
  colorValue:-0.3687923643636363,
  value:100
},{
  _id:"Louisiana",
  colorValue:-0.31676500610357144,
  value:100
},{
  _id:"Amanda",
  colorValue:-0.07535150214285714,
  value:94
},{
  _id:"Prasad",
  colorValue:0.08891558335333333,
  value:94
},{
  _id:"Sandie",
  colorValue:-0.08674999099,
  value:87
},{
  _id:"Punjab",
  colorValue:-0.18930136780000004,
  value:82
},{
  _id:"Allison",
  colorValue:0.564652979,
  value:81
},{
  _id:"Gonzalez",
  colorValue:-0.14334568181636367,
  value:80
},{
  _id:"Tej Pratap",
  colorValue:-0.011140719476470584,
  value:78
},{
  _id:"Gillian",
  colorValue:-0.257622498,
  value:69
},{
  _id:"Julia",
  colorValue:-0.36547411912894745,
  value:68
},{
  _id:"Nitish",
  colorValue:0.394960005,
  value:68
},{
  _id:"Calif",
  colorValue:-0.13648414485000002,
  value:67
},{
  _id:"Badal",
  colorValue:-0.2516938415846154,
  value:63
},{
  _id:"Kim",
  colorValue:0.10447110179999998,
  value:63
},{
  _id:"Patna",
  colorValue:0.04582446865624999,
  value:49
},{
  _id:"Nitish",
  colorValue:-0.0168896045173913,
  value:48
},{
  _id:"Kovind",
  colorValue:-0.024144825782608695,
  value:40
},{
  _id:"Delhi",
  colorValue:0.11408551748387094,
  value:40
},{
  _id:"RJ",
  colorValue:0.041676961461538466,
  value:39
},{
  _id:"Cricket",
  colorValue:0.04548641252941176,
  value:31
},{
  _id:"Shailesh",
  colorValue:0,
  value:27
},{
  _id:"Chloe",
  colorValue:0.0464503989,
  value:27
},{
  _id:"Mugabe",
  colorValue:-0.392563999,
  value:27
},{
  _id:"Sabha",
  colorValue:-0.06227504216666666,
  value:26
},{
  _id:"Thanh",
  colorValue:0.04797476876923076,
  value:25
},{
  _id:"Jefferson",
  colorValue:-0.421938002,
  value:25
},{
  _id:"Bhuria",
  colorValue:0.271458,
  value:25
},{
  _id:"Bijendra",
  colorValue:0.1200297475,
  value:25
},{
  _id:"Linda",
  colorValue:-0.1946571438294117,
  value:25
},{
  _id:"Jersey",
  colorValue:-0.20533366844444448,
  value:25
},{
  _id:"Macri",
  colorValue:-0.322297007,
  value:24
},{
  _id:"Siddiqui",
  colorValue:0.16466690666666667,
  value:24
},{
  _id:"Yadav",
  colorValue:0,
  value:24
},{
  _id:"Lucie",
  colorValue:-0.4245973328333333,
  value:24
},{
  _id:"Carlos",
  colorValue:-0.0269614488,
  value:24
},{
  _id:"Sealie",
  colorValue:-0.21992594315789474,
  value:24
},{
  _id:"Mamata",
  colorValue:0.34516873387222224,
  value:24
},{
  _id:"Mike",
  colorValue:-0.07465394917,
  value:24
}]


class BubbleChart extends React.Component {
  render () {
    var data = this.data.map(d => ({
      _id: d._id,
      value: d.value,
      colorValue: d.colorValue,
      // selected: d.selected
    }));

    return <ReactBubbleChart
      className="my-cool-chart"
      colorLegend={colorLegend}
      data={data}
      selectedColor="#737373"
      selectedTextColor="#d9d9d9"
      fixedDomain={{min: -1, max: 1}}
      // onClick={Actions.doStuff.bind(Actions)}
      legend={true}
      legendSpacing={0}
      tooltip={true}
      tooltipProps={tooltipProps}
      // tooltipFunc={tooltipFunc}
    />;
  }
}

export default BubbleChart;