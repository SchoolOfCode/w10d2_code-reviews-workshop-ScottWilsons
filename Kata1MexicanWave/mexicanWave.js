function wave(str) {
  // Code here
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let toUpper = str[i];
    if (toUpper === " ") {
      continue;
    } else {
      arr.push(str.slice(0, i) + toUpper.toUpperCase() + str.slice(i + 1));
    }
  }
  return arr;
}

export default wave;
