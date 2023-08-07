function trackSummary(points: Array<number>) {
  function calculateDistance(points: Array<number>) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1: number, p2: number) {
    return radians(p2) - radians(p1);
  }

  function calculateTime() {
    return 60;
  }

  function radians(degree: number) {
    return 90;
  }

  const totalTime = calculateTime();
  const totalDistance = calculateDistance(points);
  const pace = totalTime / 60 / totalDistance;

  return {
    time: totalTime,
    distance: totalDistance,
    pace,
  };
}

console.log(trackSummary([1, 2, 3, 4]));

export default trackSummary;
