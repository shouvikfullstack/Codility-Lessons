function solution(N) {
  if(N < 1 || N > 2147483647){
    return 0;
  }
  let gap = 0;
  let finalGap = 0;
  let oneFound = false;
  let binary = N.toString(2);
  console.log(binary);
  binary = binary.toString();
  binary.split('').forEach(el => {
    if(el == '1') {
      if(!oneFound) {
        oneFound = true;
      } else {
        if(gap > finalGap) {
          finalGap = gap;
          gap = 0;
        } else {
          gap = 0;
        }
      }
    } else if(el == '0' && oneFound) {
      gap++
    }
  });
  return finalGap;
}

console.log(solution(561892));