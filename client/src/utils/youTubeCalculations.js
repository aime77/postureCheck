export const calculationVideo = async pose => {
  let array = pose.keypoints;
  const result = array.filter((value, index) => {
    return value.score > 0.9 && index > 6;
  });

  const resultSum = await result.reduce((acc, currValue, currIndex, array) => {
    return acc + currValue.score;
  }, 0);

  const avg = await (Math.round(resultSum / result.length)*100)/100;
  if (isNaN(avg)) return await 0;
  else return await avg / 100;
};
