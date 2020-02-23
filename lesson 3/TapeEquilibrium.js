function solution(A) {
  let prevSum = A[0]
  let nextSum = A.slice(1,A.length).reduce((a,b)=> a+b)

  let min = Math.abs(nextSum - prevSum)
  for(i=1; i<A.length-1; i++){
    prevSum += A[i]
    nextSum -= A[i]
    if(Math.abs(prevSum-nextSum) < min){
      min = Math.abs(prevSum-nextSum)
    }
  }
  return min
}