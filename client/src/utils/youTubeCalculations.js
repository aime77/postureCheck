export const calculationVideo = async pose => {
  const data = pose.keypoints;
  const sumScoresArray = [];

  await data.forEach((val, index) => {
    index > 4 && val.score > 95.2
      ? sumScoresArray.push(val.score)
      : sumScoresArray.push(0);
  });

  const reducer = async (accumulator, currentValue) =>
    accumulator + currentValue;
  return await sumScoresArray.reduce(reducer);
};
