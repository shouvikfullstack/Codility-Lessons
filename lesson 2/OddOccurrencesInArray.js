// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Time complexity O(N**2)

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if(A.length%2 == 0 || A.length > 1000000 || A.length == 0){
      return null;
  }
  
  for(let i=0; i<= A.length; i++) {
      if(A[i] > 1000000000 || A[i] < 1) {
        return null;
      }
      let remainder = A.filter((v) => (v === A[i])).length % 2;
      if(remainder > 0) {
        return A[i];
      }
  }
  
  return null;
}

// Detected time complexity:
// O(N) or O(N*log(N))
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = 0;
  for (let element of A) {
  result ^= element
}

return result
}