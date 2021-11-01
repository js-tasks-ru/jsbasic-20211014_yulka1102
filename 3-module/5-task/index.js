function getMinMax(str) {
  let arr = str.split(' ').filter(item => +item);
  let min = Math.min(...arr); 
  let max = Math.max(...arr);
  let result = {
    min: min,
    max: max
  };
  
  return result;
}
