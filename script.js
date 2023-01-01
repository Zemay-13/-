function generation(n, min, max) {
  const newArray = [];
  for (let i = 0; i < n; i++) {
    const generationVal = Math.round(Math.random() * (max - min) + min);
    newArray.push(generationVal);
  }
  return newArray.join(", ");
}
function onclickButton() {
  const generateArray = `[${generation(18, 0, 1000)}]`;

  document.getElementById("array").innerHTML = generateArray;
}
