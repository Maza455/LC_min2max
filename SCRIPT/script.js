//Min to Max
function minMax(arr) {
    let min = Infinity;
    let max = -Infinity;
  
    for (let value of arr) {
      if (value < min) {
        min = value;
      }
      if (value > max) {
        max = value;
      }
    }
  
    return [min, max];
}
  
let arr = [2, 4, 8, 255, 16, 32, 64, 0, 1, 128];
console.log(minMax(arr));

   