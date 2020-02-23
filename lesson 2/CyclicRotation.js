// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if(A.length ==0 || A.length > 100 || K < 0 || K >100){
      return [];
  }
  
  for(let i=0; i<= A.length; i++) {
      if(A[i] > 1000 || A[i] < -1000) {
          return []
      }
  }
  
  for(let j = 1; j <= K; j++) {
      let poppedItem = A.pop();
      A.unshift(poppedItem)
  }
  
  return A;
}