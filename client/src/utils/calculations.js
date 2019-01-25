export const calculatePoints=(data,a,b,c,d,keyScore)=>{

const position=data.position;
let pointsTotal=0;
if(position.x<a & position.x>b & position.y < c & position.y>d){
const pointsTotalArray=[];
pointsTotalArray.push(data.score);
pointsTotalArray.forEach(val=>{
    pointsTotal=+val;
})
}

if (pointsTotal===keyScore) return pointsTotal;

};

const totalPointsSum=()=>{


    
}