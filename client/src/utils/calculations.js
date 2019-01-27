export const Calculation = function(x1, x2, y1, y2, position) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.px = position.x;
  this.py = position.y;

  this.range = () => {
    if (
      this.px / this.py < this.x1 / this.y1 &&
      this.px / this.py > this.x2 / this.y2
    ) {
      console.log("cal", this.px / this.py);
      return this.px / this.py;
    }else{
      return 0;
    }
  };
};

const estimatedPoses = {
  rightTricepStretchCal:
    390.8471071868517 / 303.5759737747351 +
    301.08126565133887 / 320.05258315987237 +
    379.6328469430758 / 385.6234118187716 +
    263.1215139048723 / 364.1650665177606 +
    183.85853114464473 / 351.5167236328125 +
    192.8838991030618 / 357.5203021092398,
  //5

  leftTricepStretchCal:
    378.37738416996245 / 333.7234338674578 +
    275.98109581658457 / 303.88227944555575 +
    419.9290295359505 / 398.79243316122404 +
    412.87687309550057 / 394.36153425064873 +
    469.9383177697906 / 348.48639148329363 +
    450.5954599974067 / 348.9209660196799,
  //6.8

  openHeartCal:
    (358.02880758071836 / 369.34349825637975 +
      271.9402075803132 / 320.05258315987237 +
      379.6328469430758 / 369.86132559066823 +
      228.96628162178263 / 386.7902498344236 +
      502.0185921696707 / 374.60435913508326 +
      159.70947138996047 / 373.62423801092126) /
    6,
  //5.20

  raiseArmsCal:
    (390.69784330629216 / 300.65984494958366 +
      276.1035776731879 / 299.58218373229346 +
      465.79530328141215 / 256.2128931593317 +
      220.77827928471865 / 266.4865038386678 +
      524.6491808119652 / 156.57806396484375 +
      157.03571683638324 / 164.34480871708746) /
    6
  //9.17
};

export const pointsCheck = function(pose) {
  if (rightTricepStretch(pose) === estimatedPoses.rightTricepStretchCal) {
    return true;
  }

  if (leftTricepStretch(pose) === estimatedPoses.leftTricepStretchCal) {
    return true;
  }

  if (openHeart(pose) === estimatedPoses.openHeartCal) {
    return true;
  }

  if (raiseArms(pose) === estimatedPoses.raiseArmsCal) {
    return true;
  }
};

export const rightTricepStretch = function(pose) {
  console.log("pose", pose);
  const ls = pose.keypoints[5].position;
  console.log("ls", ls);
  const rs = pose.keypoints[6].position;
  const le = pose.keypoints[7].position;
  const re = pose.keypoints[8].position;
  const lw = pose.keypoints[8].position;
  const rw = pose.keypoints[10].position;

  const leftShoulder = new Calculation(
    390.8471071868517,
    385.8471071868517,
    303.5759737747351,
    298.5759737747351,
    ls
  );

  console.log("test", leftShoulder);

  const rightShoulder = new Calculation(
    301.08126565133887,
    296.08126565133887,
    320.05258315987237,
    315.05258315987237,
    rs
  );
  const leftElbow = new Calculation(
    379.6328469430758,
    374.6328469430758,
    385.6234118187716,
    380.6234118187716,
    le
  );
  const rightElbow = new Calculation(
    263.1215139048723,
    258.1215139048723,
    364.1650665177606,
    359.1650665177606,
    re
  );
  const leftWrist = new Calculation(
    183.85853114464473,
    183.85853114464473,
    351.5167236328125,
    351.5167236328125,
    lw
  );
  const rightWrist = new Calculation(
    192.8838991030618,
    187.8838991030618,
    357.5203021092398,
    352.5203021092398,
    rw
  );

  console.log(
    leftShoulder.range() +
      rightShoulder.range() +
      leftElbow.range() +
      rightElbow.range() +
      leftWrist.range() +
      rightWrist.range()
  );

  return (
    leftShoulder.range() +
    rightShoulder.range() +
    leftElbow.range() +
    rightElbow.range() +
    leftWrist.range() +
    rightWrist.range()
  );
};

export const leftTricepStretch = function(pose) {
  const ls = pose.keypoints[5].position;
  const rs = pose.keypoints[6].position;
  const le = pose.keypoints[7].position;
  const re = pose.keypoints[8].position;
  const lw = pose.keypoints[8].position;
  const rw = pose.keypoints[10].position;

  const leftShoulder = new Calculation(
    378.37738416996245,
    373.37738416996245,
    333.7234338674578,
    328.7234338674578,
    ls
  );
  const rightShoulder = new Calculation(
    275.98109581658457,
    270.98109581658457,
    303.88227944555575,
    298.88227944555575,
    rs
  );
  const leftElbow = new Calculation(
    419.9290295359505,
    414.9290295359505,
    398.79243316122404,
    393.79243316122404,
    le
  );
  const rightElbow = new Calculation(
    412.87687309550057,
    407.87687309550057,
    394.36153425064873,
    389.36153425064873,
    re
  );
  const leftWrist = new Calculation(
    469.9383177697906,
    464.9383177697906,
    348.48639148329363,
    343.48639148329363,
    lw
  );
  const rightWrist = new Calculation(
    450.5954599974067,
    445.5954599974067,
    348.9209660196799,
    343.9209660196799,
    rw
  );
  return (
    leftShoulder.range() +
    rightShoulder.range() +
    leftElbow.range() +
    rightElbow.range() +
    leftWrist.range() +
    rightWrist.range()
  );
};

const openHeart = function(pose) {
  const ls = pose.keypoints[5].position;
  const rs = pose.keypoints[6].position;
  const le = pose.keypoints[7].position;
  const re = pose.keypoints[8].position;
  const lw = pose.keypoints[8].position;
  const rw = pose.keypoints[10].position;

  const leftShoulder = new Calculation(
    358.02880758071836,
    353.02880758071836,
    369.34349825637975,
    364.34349825637975,
    ls
  );
  const rightShoulder = new Calculation(
    271.9402075803132,
    266.9402075803132,
    320.05258315987237,
    315.05258315987237,
    rs
  );
  const leftElbow = new Calculation(
    379.6328469430758,
    374.6328469430758,
    369.86132559066823,
    364.86132559066823,
    le
  );
  const rightElbow = new Calculation(
    228.96628162178263,
    223.96628162178263,
    386.7902498344236,
    381.7902498344236,
    re
  );
  const leftWrist = new Calculation(
    502.0185921696707,
    497.0185921696707,
    374.60435913508326,
    369.60435913508326,
    lw
  );
  const rightWrist = new Calculation(
    159.70947138996047,
    154.70947138996047,
    373.62423801092126,
    368.62423801092126,
    rw
  );
  return (
    leftShoulder.range() +
    rightShoulder.range() +
    leftElbow.range() +
    rightElbow.range() +
    leftWrist.range() +
    rightWrist.range()
  );
};

const raiseArms = function(pose) {
  const ls = pose.keypoints[5].position;
  const rs = pose.keypoints[6].position;
  const le = pose.keypoints[7].position;
  const re = pose.keypoints[8].position;
  const lw = pose.keypoints[8].position;
  const rw = pose.keypoints[10].position;

  const leftShoulder = new Calculation(
    390.69784330629216,
    385.69784330629216,
    300.65984494958366,
    295.65984494958366,
    ls
  );
  const rightShoulder = new Calculation(
    276.1035776731879,
    271.1035776731879,
    299.58218373229346,
    294.58218373229346,
    rs
  );
  const leftElbow = new Calculation(
    465.79530328141215,
    460.79530328141215,
    256.2128931593317,
    251.2128931593317,
    le
  );
  const rightElbow = new Calculation(
    220.77827928471865,
    215.77827928471865,
    266.4865038386678,
    261.4865038386678,
    re
  );
  const leftWrist = new Calculation(
    524.6491808119652,
    519.6491808119652,
    156.57806396484375,
    151.57806396484375,
    lw
  );
  const rightWrist = new Calculation(
    157.03571683638324,
    152.03571683638324,
    164.34480871708746,
    159.34480871708746,
    rw
  );
  return (
    leftShoulder.range() +
    rightShoulder.range() +
    leftElbow.range() +
    rightElbow.range() +
    leftWrist.range() +
    rightWrist.range()
  );
};
