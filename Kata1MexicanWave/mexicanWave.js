function wave(str) {
  // Code here
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    return char.toUpperCase();
  }
}

export default wave;
