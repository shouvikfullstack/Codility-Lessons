function solution(A){
  if(A.length == 0) return 1;
  if(A.length <0 || A.length > 100000) return 0;
  if((new Set(A)).size !== A.length) return 0;
  let sumOfAllNumber = 0;
  for(let i=0; i<A.length; i++){
    sumOfAllNumber +=A[i]
  }
  let expectedSum = ((A.length+1)*(A.length+2))/2
  return expectedSum - sumOfAllNumber;
}